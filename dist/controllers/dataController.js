"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDocument = exports.likeDocument = exports.replyDocument = exports.updateDocument = exports.createDocument = exports.getPost = exports.getProfileDocuments = exports.getDocuments = void 0;
const Document_1 = __importDefault(require("../models/Document"));
const User_1 = __importDefault(require("../models/User"));
const getDocuments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    const documents = yield Document_1.default.find({ userId });
    res.json({ data: documents });
});
exports.getDocuments = getDocuments;
const getProfileDocuments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    const documents = yield Document_1.default.find({ username });
    res.json({ data: documents });
});
exports.getProfileDocuments = getProfileDocuments;
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const documents = yield Document_1.default.findById(id);
    res.json({ data: documents });
});
exports.getPost = getPost;
const createDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { userId } = _a, documentData = __rest(_a, ["userId"]);
    try {
        const user = yield User_1.default.findById(userId);
        const username = user === null || user === void 0 ? void 0 : user.username;
        const newDocument = new Document_1.default(Object.assign(Object.assign({}, documentData), { userId, username }));
        yield newDocument.save();
        res.status(201).json(newDocument);
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
});
exports.createDocument = createDocument;
const updateDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { userId } = _a, documentData = __rest(_a, ["userId"]);
    console.log(documentData);
    const documents = yield Document_1.default.findById(id);
    try {
        const updatedDocument = yield Document_1.default.findByIdAndUpdate(id, documentData, {
            new: true,
        });
        res.json(updatedDocument);
    }
    catch (err) {
        res.status(400).json({ error: "Error updating document" });
    }
});
exports.updateDocument = updateDocument;
const replyDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { userId } = _a, documentData = __rest(_a, ["userId"]);
    const user = yield User_1.default.findById(userId);
    const document = yield Document_1.default.findById(id);
    const notificationUser = document === null || document === void 0 ? void 0 : document.userId;
    console.log(notificationUser);
    // console.log(userId);
    console.log(document);
    const username = user === null || user === void 0 ? void 0 : user.username;
    const newDocument = new Document_1.default(Object.assign(Object.assign({}, documentData), { userId, username }));
    console.log(username);
    try {
        const updatedDocument = yield Document_1.default.updateOne({ _id: id }, { $push: { replies: newDocument } });
        const updatedUser = yield User_1.default.updateOne({ _id: notificationUser }, {
            $push: {
                notification: {
                    link: `/${document === null || document === void 0 ? void 0 : document.username}/${id}`,
                    type: "reply",
                    username: username,
                },
            },
        });
        res.json(updatedDocument);
    }
    catch (err) {
        res.status(400).json({ error: "Error updating document" });
    }
});
exports.replyDocument = replyDocument;
const likeDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { userId } = _a, documentData = __rest(_a, ["userId"]);
    console.log(id);
    const user = yield User_1.default.findById(userId);
    const document = yield Document_1.default.findById(id);
    const notificationUser = document === null || document === void 0 ? void 0 : document.userId;
    console.log(user);
    const username = user === null || user === void 0 ? void 0 : user.username;
    try {
        const updatedDocument = yield Document_1.default.updateOne({ _id: id }, { $push: { likes: { username: username } } });
        res.json(updatedDocument);
        const updatedUser = yield User_1.default.updateOne({ _id: notificationUser }, {
            $push: {
                notification: {
                    link: `/${document === null || document === void 0 ? void 0 : document.username}/${id}`,
                    type: "like",
                    username: username,
                },
            },
        });
    }
    catch (err) {
        res.status(400).json({ error: "Error updating document" });
    }
});
exports.likeDocument = likeDocument;
const deleteDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield Document_1.default.findByIdAndDelete(id);
        res.json({ message: "Document deleted" });
    }
    catch (err) {
        res.status(400).json({ error: "Error deleting document" });
    }
});
exports.deleteDocument = deleteDocument;
