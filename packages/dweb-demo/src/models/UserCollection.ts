import User from "./User";
export default class UserCollection {
    users: Array<User>
    addUser(user: User, index: number): UserCollection {
        this.users.splice(index, 0, user);
        return this;
    }
    createUser(index): User {
        const user = new User("unnamed");
        this.addUser(user, index);
        return user;
    }
}