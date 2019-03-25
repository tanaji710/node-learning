import {UserInfo} from "os";
import User = require("../dataaccess/mongoose/User");
import UserRepository = require("../dataaccess/repository/UserRepository");

class UserService {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public createUserData(user: User, callback: (error: any, response: any) => void) {
        this.userRepository.create(user, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public getAllUserData(callback: (error: any, response: any) => void) {
        this.userRepository.retrieve({}, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public login(user: any, callback: (error: any, response: any) => void) {
        const query = { email : user.email };
        this.userRepository.retrieve(query, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                if (result.length > 0) {
                    console.log("result : " + JSON.stringify(result));
                    if (result[0].password === user.password) {
                        callback(null, result);
                    } else {
                        callback({ message : "Invalid Credentials"}, null);
                    }
                } else {
                    callback({ message : "User Not Found"}, null);
                }
            }
        });
    }

    public getUserById(userId: any, callback: (error: any, response: any) => void) {
        this.userRepository.findById(userId, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public updateUserData(userId: any, updatedUser: User, callback: (error: any, response: any) => void) {
        this.userRepository.update(userId, updatedUser, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public deleteUserById(userId: any, callback: (error: any, response: any) => void) {
        this.userRepository.deleteById(userId, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }
}

Object.seal(UserService);
export = UserService;
