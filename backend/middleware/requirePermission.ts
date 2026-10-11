import { Request, Response, NextFunction } from "express";
import User from "../model/user.model";
import Role from "../model/role.model";

export function requirePermission(permission: string) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Authentication required",
        });
      }

      const user = await User.findById(req.user.id)
        .select("role isActive")
        .lean();

      if (!user || !user.isActive) {
        return res.status(403).json({
          success: false,
          message: "User is inactive or access is denied",
        });
      }

      const role = await Role.findById(user.role)
        .select("permissions")
        .lean();

      if (!role || !role.permissions.includes(permission)) {
        return res.status(403).json({
          success: false,
          message: "You do not have permission to perform this action",
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}