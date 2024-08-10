import { Request, Response } from "express";
import User from "../models/User";

export const getSearchUsers = async (req: Request, res: Response) => {
  const { username } = req.params;
  const search = new RegExp(username, "i");
  const documents = await User.find({ username: search }, "username _id");
  res.json({ data: documents });
};
