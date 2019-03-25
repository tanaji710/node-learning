import {UserInfo} from "os";
import Poolcar = require("../dataaccess/mongoose/AddPoolCar");
import PoolCarRepository = require("../dataaccess/repository/AddPoolCarRepository");

class AddPoolCarService {

    private userRepository: PoolCarRepository;

    constructor() {
        this.userRepository = new PoolCarRepository();
    }

    public createAddPoolCarDataa(addcarpool: Poolcar, callback: (error: any, response: any) => void) {
        this.userRepository.create(addcarpool, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result);
            }
        });
    }

    public getAllAddPoolCarData(callback: (error: any, response: any) => void) {
        this.userRepository.retrieve({}, (error, result) => {
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
