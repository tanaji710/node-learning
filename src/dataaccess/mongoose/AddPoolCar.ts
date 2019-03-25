import * as mongoose from "mongoose";
import Addpoolcar = require("./../models/addpoolcar");

interface IAddPoolCar extends Addpoolcar, mongoose.Document {
    _id: string;
}
export = IAddPoolCar;
