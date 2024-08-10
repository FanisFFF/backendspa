import { Request, Response } from "express";
import User from "../models/User";

export const getUsers = async (req: Request, res: Response) => {
  // const { userId } = req.body;
  const users = await User.find({}, "username _id");
  res.json({ data: users });
};
export const getUser = async (req: Request, res: Response) => {
  const { userId } = req.body;
  // const user = await User.findById(userId);
  const _id = userId;
  const user = await User.find({ _id }, "username _id notification");
  res.json({ data: user });
};
