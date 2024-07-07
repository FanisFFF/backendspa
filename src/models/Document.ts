// src/models/Document.ts
import { Schema, model, Document } from "mongoose";

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
  // companySignatureName: string;
  // documentName: string;
  // documentStatus: string;
  // documentType: string;
  // employeeNumber: string;
  // employeeSigDate: string;
  // employeeSignatureName: string;
  userId: string;
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
  // companySignatureName: { type: String, required: tirue },
  // documentName: { type: String, required: true },
  // documentStatus: { type: String, required: true },
  // documentType: { type: String, required: true },
  // employeeNumber: { type: String, required: true },
  // employeeSigDate: { type: String, required: true },
  // employeeSignatureName: { type: String, required: true },
  userId: { type: String, required: true },
});

export default model<IDocument>("Document", documentSchema);
