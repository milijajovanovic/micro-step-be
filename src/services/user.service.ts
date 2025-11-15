import { injectable } from "tsyringe";

@injectable()
export class UserService {
  private users = ["Milan", "Marko", "Jovan"];

  getAllUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users[id] ?? null;
  }
}
