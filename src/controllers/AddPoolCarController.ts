import * as express from "express";
import AddPoolCarService = require("../service/AddPoolCarService");

class AddPoolCarController {
    private localPoolCarService: AddPoolCarService;
    constructor() {
        this.localPoolCarService = new AddPoolCarService();
    }

    public createPoolCar(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const poolcar = req.body;
            const poolCarService = new AddPoolCarService();
            poolCarService.createAddPoolCarDataa(poolcar, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating Poolcar Data : ", e);
        }
    }

    public getAllPoolCars(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const poolCarService = new AddPoolCarService();
            poolCarService.getAllAddPoolCarData((error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating PoolCar Data . ", e);
        }
    }
}

export = AddPoolCarService;
