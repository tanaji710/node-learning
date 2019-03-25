import {UserInfo} from "os";
import IAddPoolCar = require("../dataaccess/mongoose/AddPoolCar");
import AddPoolCarRepository = require("../dataaccess/repository/AddPoolCarRepository");

class AddPoolCarService {

    private addpoolCarRepository: AddPoolCarRepository;

    constructor() {
        this.addpoolCarRepository = new AddPoolCarRepository();
    }

    public createAddPoolCarData(addcarpool: IAddPoolCar, callback: (error: any, response: any) => void) {
        this.addpoolCarRepository.create(addcarpool, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public getAllAddPoolCarData(callback: (error: any, response: any) => void) {
        this.addpoolCarRepository.retrieve({}, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public getAddPoolCarDataById(carId: any, callback: (error: any, response: any) => void) {
        this.addpoolCarRepository.findById(carId, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public updateAddPoolCarData(carId: any, updatedUser: IAddPoolCar, callback: (error: any, response: any) => void) {
        this.addpoolCarRepository.update(carId, updatedUser, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public deleteAddPoolCarDataId(carId: any, callback: (error: any, response: any) => void) {
        this.addpoolCarRepository.deleteById(carId, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }
}

Object.seal(AddPoolCarService);
export = AddPoolCarService;
