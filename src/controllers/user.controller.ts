import { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { UserService } from "../services/user.service";

@injectable()
export class UserController {
  constructor(@inject(UserService) private readonly userService: UserService) {}

  getUsers = (req: Request, res: Response) => {
    const users = this.userService.getAllUsers();
    res.json(users);
  };

  getUserById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = this.userService.getUser(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  };
}
