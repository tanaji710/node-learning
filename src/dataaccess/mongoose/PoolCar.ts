import * as mongoose from "mongoose";
import Poolcar = require("./../models/poolcar");

interface IPoolCar extends Poolcar, mongoose.Document {
    _id: string;
}
export = IPoolCar;
