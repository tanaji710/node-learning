import AddpoolcarSchema = require("../schemas/addpoolcarSchema");
import IAddPoolCar = require("./../mongoose/AddPoolCar");

import RepositoryBase = require("./base/repository.base");

class AddPoolCarRepository extends RepositoryBase<IAddPoolCar> {

    constructor() {
        super(AddpoolcarSchema);
    }

}

Object.seal(AddpoolcarSchema);
export = AddPoolCarRepository;
