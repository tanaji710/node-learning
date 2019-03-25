import * as express from "express";
import UserService = require("../service/UserService");

class UserController {
    private localUserService: UserService;
    constructor() {
        this.localUserService = new UserService();
    }

    public createUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const user = req.body;
            const userService = new UserService();
            userService.createUserData(user, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data : ", e);
        }
    }

    public login(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const user = req.body;
            const userService = new UserService();
            userService.login(user, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    if (result.length > 0) {
                        res.send(result);
                    } else {
                        res.send({ message : "User Not found." });
                    }
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data : ", e);
        }
    }

    public getAllUsers(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const userService = new UserService();
            userService.getAllUserData((error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in getting all User Data.", e);
        }
    }

    public getUserById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const userService = new UserService();
            const userId = req.params.id;
            userService.getUserById(userId, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in get User Data by Id.", e);
        }
    }

    public updateUserById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const userService = new UserService();
            const userId = req.params.id;
            const updatedUser = req.body;
            userService.updateUserData(userId, updatedUser, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in updating User By Id.", e);
        }
    }

    public deleteUserById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const userService = new UserService();
            const userId = req.params.id;
            userService.deleteUserById(userId, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in deleting User By Id.", e);
        }
    }
}

export = UserController;
