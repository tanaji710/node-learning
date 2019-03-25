import {Schema} from "mongoose";
import IPoolCar = require("../mongoose/PoolCar");
import DataAccess = require("./../dataAccess");

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class PoolCarSchema {
    static get schema() {

        const user = new Schema({
                UserId: {
                    type: String
                },
                carName: {
                    type: String
                },
                contact: {
                    type: String
                },
                date: {
                    type: Date
                },
                from: {
                    type: String
                },
                name: {
                    type: String
                },
                seats: {
                    type: String
                },
                time: {
                    type: String
                },
                to: {
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
const poolCarSchema = mongooseConnection.model<IPoolCar>("PoolCar", PoolCarSchema.schema);
export = poolCarSchema;
