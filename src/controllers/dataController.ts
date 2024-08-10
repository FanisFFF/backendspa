import { Request, Response } from "express";
import Document from "../models/Document";
import User from "../models/User";

export const getDocuments = async (req: Request, res: Response) => {
  const { userId } = req.body;
  const documents = await Document.find({ userId });
  res.json({ data: documents });
};
export const getProfileDocuments = async (req: Request, res: Response) => {
  const { username } = req.params;
  const documents = await Document.find({ username });
  res.json({ data: documents });
};

export const getPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const documents = await Document.findById(id);
  res.json({ data: documents });
};

export const createDocument = async (req: Request, res: Response) => {
  const { userId, ...documentData } = req.body;
  try {
    const user = await User.findById(userId);
    const username = user?.username;
    const newDocument = new Document({ ...documentData, userId, username });
    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export const updateDocument = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId, ...documentData } = req.body;
  console.log(documentData);
  const documents = await Document.findById(id);
  try {
    const updatedDocument = await Document.findByIdAndUpdate(id, documentData, {
      new: true,
    });

    res.json(updatedDocument);
  } catch (err) {
    res.status(400).json({ error: "Error updating document" });
  }
};

export const replyDocument = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId, ...documentData } = req.body;
  const user = await User.findById(userId);
  const document = await Document.findById(id);
  const notificationUser = document?.userId;
  console.log(notificationUser);
  // console.log(userId);
  console.log(document);
  const username = user?.username;
  const newDocument = new Document({ ...documentData, userId, username });
  console.log(username);
  try {
    const updatedDocument = await Document.updateOne(
      { _id: id },
      { $push: { replies: newDocument } }
    );
    const updatedUser = await User.updateOne(
      { _id: notificationUser },
      {
        $push: {
          notification: {
            link: `/${document?.username}/${id}`,
            type: "reply",
            username: username,
          },
        },
      }
    );
    res.json(updatedDocument);
  } catch (err) {
    res.status(400).json({ error: "Error updating document" });
  }
};
export const likeDocument = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId, ...documentData } = req.body;
  console.log(id);
  const user = await User.findById(userId);
  const document = await Document.findById(id);
  const notificationUser = document?.userId;
  console.log(user);
  const username = user?.username;
  try {
    const updatedDocument = await Document.updateOne(
      { _id: id },
      { $push: { likes: { username: username } } }
    );
    res.json(updatedDocument);
    const updatedUser = await User.updateOne(
      { _id: notificationUser },
      {
        $push: {
          notification: {
            link: `/${document?.username}/${id}`,
            type: "like",
            username: username,
          },
        },
      }
    );
  } catch (err) {
    res.status(400).json({ error: "Error updating document" });
  }
};

export const deleteDocument = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Document.findByIdAndDelete(id);
    res.json({ message: "Document deleted" });
  } catch (err) {
    res.status(400).json({ error: "Error deleting document" });
  }
};
