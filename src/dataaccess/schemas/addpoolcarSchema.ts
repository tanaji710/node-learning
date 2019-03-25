import {Schema} from "mongoose";
import IAddPoolCar = require("../mongoose/AddPoolCar");
import DataAccess = require("./../dataAccess");

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class AddpoolcarSchema {
    static get schema() {

        const user = new Schema({
                UserId: {
                    type: String
                },
                accepted: {
                    type: Boolean
                },
                addharNo: {
                    type: Number
                },
                contact: {
                    type: String
                },
                name: {
                    type: String
                },
                pickupPoint: {
                    type: String
                },
                poolId: {
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
const addpoolcarSchema = mongooseConnection.model<IAddPoolCar>("AddPoolCar", AddpoolcarSchema.schema);
export = addpoolcarSchema;
