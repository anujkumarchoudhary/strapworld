"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyAdmin = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authorization token required",
            });
        }
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return res.status(500).json({
                success: false,
                message: "Authentication configuration error",
            });
        }
        const token = authHeader.slice(7).trim();
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        if (typeof decoded === "string" ||
            !decoded.id ||
            typeof decoded.id !== "string" ||
            decoded.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Admin access required",
            });
        }
        req.admin = decoded;
        return next();
    }
    catch {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};
exports.verifyAdmin = verifyAdmin;
