"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const dataRoutes_1 = __importDefault(require("./routes/dataRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const searchRoutes_1 = __importDefault(require("./routes/searchRoutes"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use("/auth", authRoutes_1.default);
app.use("/data", dataRoutes_1.default);
app.use("/user", userRoutes_1.default);
app.use("/search", searchRoutes_1.default);
exports.default = app;
//
