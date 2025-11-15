import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = container.resolve(UserController);

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);

export { router as userRoutes };
