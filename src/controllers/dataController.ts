import { Request, Response } from "express";
import Document from "../models/Document";

export const getDocuments = async (req: Request, res: Response) => {
  console.log(req.body);
  const { userId } = req.body;
  const documents = await Document.find({ userId });
  res.json({ data: documents });
};

export const createDocument = async (req: Request, res: Response) => {
  const { userId, ...documentData } = req.body;
  console.log(req.body);
  console.log(userId);
  try {
    const newDocument = new Document({ ...documentData, userId });
    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export const updateDocument = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId, ...documentData } = req.body;

  try {
    const updatedDocument = await Document.findByIdAndUpdate(id, documentData, {
      new: true,
    });
    res.json(updatedDocument);
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
