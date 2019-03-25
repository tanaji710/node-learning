import PoolCarSchema = require("../schemas/poolcarSchema");
import IPoolCar = require("./../mongoose/PoolCar");

import RepositoryBase = require("./base/repository.base");

class PoolCarRepository extends RepositoryBase<IPoolCar> {

    constructor() {
        super(PoolCarSchema);
    }

}

Object.seal(PoolCarSchema);
export = PoolCarRepository;
