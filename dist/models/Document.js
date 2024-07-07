"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Document.ts
const mongoose_1 = require("mongoose");
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
const documentSchema = new mongoose_1.Schema({
  companySigDate: { type: String, required: true },
  postText: { type: String, required: true },
  // companySignatureName: { type: String, required: true },
  // documentName: { type: String, required: true },
  // documentStatus: { type: String, required: true },
  // documentType: { type: String, required: true },
  // employeeNumber: { type: String, required: true },
  // employeeSigDate: { type: String, required: true },
  // employeeSignatureName: { type: String, required: true },
  userId: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)("Document", documentSchema);
