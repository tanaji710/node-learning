import {Schema} from "mongoose";
import IUser = require("../mongoose/User");
import DataAccess = require("./../dataAccess");

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
    static get schema() {

        const user = new Schema({
                contact: {
                    type: String
                },
                email: {
                    type: String
                },
                firstName: {
                    type: String
                },
                lastName: {
                    type: String
                },
                password: {
                    type: String
                },
            },
            {
                timestamps: true,
                versionKey: false
            });
        return user;
    }
}
const userSchema = mongooseConnection.model<IUser>("User", UserSchema.schema);
export = userSchema;
