import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AdminPayload extends JwtPayload {
  id: string;
  role: "user" | "admin";
}

export interface AuthenticatedAdminRequest extends Request {
  admin?: AdminPayload;
}

export const verifyAdmin = (
  req: AuthenticatedAdminRequest,
  res: Response,
  next: NextFunction,
) => {
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
    const decoded = jwt.verify(token, secret);

    if (
      typeof decoded === "string" ||
      !decoded.id ||
      typeof decoded.id !== "string" ||
      decoded.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Admin access required",
      });
    }

    req.admin = decoded as AdminPayload;

    return next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};