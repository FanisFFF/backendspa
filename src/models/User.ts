import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  notification: any;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  notification: [
    {
      link: { type: String },
      type: { type: String },
      username: { type: String },
    },
  ],
});

export default model<IUser>("User", userSchema);
