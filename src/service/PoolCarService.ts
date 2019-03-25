import {UserInfo} from "os";
import Poolcar = require("../dataaccess/mongoose/PoolCar");
import PoolCarRepository = require("../dataaccess/repository/PoolCarRepository");

class PoolCarService {

    private userRepository: PoolCarRepository;

    constructor() {
        this.userRepository = new PoolCarRepository();
    }

    public createPoolCarData(carpool: Poolcar, callback: (error: any, response: any) => void) {
        this.userRepository.create(carpool, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public getAllPoolCarData(callback: (error: any, response: any) => void) {
        this.userRepository.retrieve({}, (error, result) => {
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
