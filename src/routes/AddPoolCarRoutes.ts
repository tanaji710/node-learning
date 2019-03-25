import express = require("express");
import PoolCarController = require("../controllers/AddPoolCarController");
const router = express.Router();

class UserRoutes {

    private poolcarController: PoolCarController;

    constructor() {
        this.poolcarController = new PoolCarController();
    }

    get routes(): express.Router {
    /*    router.post("/", this.poolcarController.createAddPoolCarDataa)*/
        router.get("/", this.poolcarController.getAllAddPoolCarData);
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes ;
