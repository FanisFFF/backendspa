import mongoose, { Schema, model, Document } from "mongoose";
import { IUser } from "./User";

// interface IDocument extends Document {
//   companySigDate: string;
//   companySignatureName: string;
//   documentName: string;
//   documentStatus: string;
//   documentType: string;
//   employeeNumber: string;
//   employeeSigDate: string;
//   employeeSignatureName: string;
//   userId: string;
// }

interface IDocument extends Document {
  companySigDate: string;
  postText: string;
  userId: string;
  username: string;
  replies: IDocument[];
  likes: IUser[];
}

// const documentSchema = new Schema<IDocument>({
//   companySigDate: { type: String, required: true },
//   companySignatureName: { type: String, required: true },
//   documentName: { type: String, required: true },
//   documentStatus: { type: String, required: true },
//   documentType: { type: String, required: true },
//   employeeNumber: { type: String, required: true },
//   employeeSigDate: { type: String, required: true },
//   employeeSignatureName: { type: String, required: true },
//   userId: { type: String, required: true },
// });
const documentSchema = new Schema<IDocument>({
  companySigDate: { type: String, required: true },
  postText: { type: String, required: true },
  userId: { type: String, required: true },
  username: { type: String, required: true },
  replies: [
    {
      companySigDate: { type: String },
      postText: { type: String },
      username: { type: String },
    },
  ],
  likes: [{ username: { type: String } }],
});

export default model<IDocument>("Document", documentSchema);
