import PoolCarSchema = require("../schemas/addpoolcarSchema");
import IAddPoolCar = require("./../mongoose/AddPoolCar");

import RepositoryBase = require("./base/repository.base");

class PoolCarRepository extends RepositoryBase<IAddPoolCar> {

    constructor() {
        super(PoolCarSchema);
    }

}

Object.seal(PoolCarSchema);
export = PoolCarRepository;
