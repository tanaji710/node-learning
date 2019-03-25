import express = require("express");
import AddPoolCarController = require("../controllers/AddPoolCarController");
const router = express.Router();

class UserRoutes {

    private poolcarController: AddPoolCarController;

    constructor() {
        this.poolcarController = new AddPoolCarController();
    }

    get routes(): express.Router {
        router.post("/", this.poolcarController.createAddPoolCar);
        router.get("/", this.poolcarController.getAllAddPoolCars);
        router.get("/:id", this.poolcarController.getAddPoolCarById);
        router.put("/:id", this.poolcarController.updatePoolCarById);
        router.delete("/:id", this.poolcarController.deletePoolCarById);
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes ;
