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
        router.get("/:id", this.poolcarController.getPoolCarById);
        router.put("/:id", this.poolcarController.updatePoolCarById);
        router.delete("/:id", this.poolcarController.deletePoolCarById);
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes ;
