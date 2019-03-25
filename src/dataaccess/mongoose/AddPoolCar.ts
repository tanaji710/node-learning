import * as mongoose from "mongoose";
import poolCarModal = require("./../models/addpoolcar");

interface IAddPoolCar extends poolCarModal, mongoose.Document {
    _id: string;
}
export = IAddPoolCar;
