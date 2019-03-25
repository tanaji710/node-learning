import {UserInfo} from "os";
import IPoolCar = require("../dataaccess/mongoose/PoolCar");
import PoolCarRepository = require("../dataaccess/repository/PoolCarRepository");

class PoolCarService {

    private poolCarRepository: PoolCarRepository;

    constructor() {
        this.poolCarRepository = new PoolCarRepository();
    }

    public createPoolCarData(carpool: IPoolCar, callback: (error: any, response: any) => void) {
        this.poolCarRepository.create(carpool, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public getAllPoolCarData(callback: (error: any, response: any) => void) {
        this.poolCarRepository.retrieve({}, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public getPoolCarDataById(carId: any, callback: (error: any, response: any) => void) {
        this.poolCarRepository.findById(carId, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public updatePoolCarData(carId: any, updatedUser: IPoolCar, callback: (error: any, response: any) => void) {
        this.poolCarRepository.update(carId, updatedUser, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public deletePoolCarDataId(carId: any, callback: (error: any, response: any) => void) {
        this.poolCarRepository.deleteById(carId, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }
}

Object.seal(PoolCarService);
export = PoolCarService;
