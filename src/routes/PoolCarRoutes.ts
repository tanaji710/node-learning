import express = require("express");
import PoolCarController = require("../controllers/PoolCarController");
const router = express.Router();

class UserRoutes {

    private poolcarController: PoolCarController;

    constructor() {
        this.poolcarController = new PoolCarController();
    }

    get routes(): express.Router {
        router.post("/", this.poolcarController.createPoolCar);
        router.get("/", this.poolcarController.getAllPoolCars);
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes ;
