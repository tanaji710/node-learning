import * as mongoose from "mongoose";
import poolCarModal = require("./../models/poolcar");

interface IPoolCar extends poolCarModal, mongoose.Document {
    _id: string;
}
export = IPoolCar;
