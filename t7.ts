type roles = "default" | "admin";

interface IUser {
    email: string;
    senha: string;
    role: roles;
}

type ITransactioUser = Omit<IUser, "role">;

class Authentication {
    static login(users: Array<IUser>, userRequest: ITransactioUser): IUser | undefined {
        return users.find(user => user.email === userRequest.email && user.senha === userRequest.senha);
    }
}

class Authorization {
    static isAdmin(users: Array<IUser>, userRequest: ITransactioUser): boolean {
        const user: IUser | undefined = users.find(user => user.email === userRequest.email && user.senha === userRequest.senha && user.role === "admin");
        return user ? true : false;
    }

    static isDefault(users: Array<IUser>, userRequest: ITransactioUser): boolean {
        const user: IUser | undefined = users.find(user => user.email === userRequest.email && user.senha === userRequest.senha && user.role === "default");
        return user ? true : false;
    }
}

class SystemAuth {
    private users: Array<IUser> = [];
    private authentication: Authentication = new Authentication;
    private authorization: Authorization = new Authorization;
}