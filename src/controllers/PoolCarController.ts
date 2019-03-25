import * as express from "express";
import PoolCarService = require("../service/PoolCarService");

class PoolCarController {
    private localPoolCarService: PoolCarService;
    constructor() {
        this.localPoolCarService = new PoolCarService();
    }

    public createPoolCar(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const poolcar = req.body;
            const poolCarService = new PoolCarService();
            poolCarService.createPoolCarData(poolcar, (error , result) => {
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
            const poolCarService = new PoolCarService();
            poolCarService.getAllPoolCarData((error , result) => {
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

    public getPoolCarById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const poolCarService = new PoolCarService();
            const carId = req.params.id;
            poolCarService.getPoolCarDataById(carId, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in get PoolCar data by Id.", e);
        }
    }

    public updatePoolCarById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const poolCarService = new PoolCarService();
            const carId = req.params.id;
            const updatedCarBody = req.body;
            poolCarService.updatePoolCarData(carId, updatedCarBody, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in updating PoolCar By Id.", e);
        }
    }

    public deletePoolCarById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const poolCarService = new PoolCarService();
            const carId = req.params.id;
            poolCarService.deletePoolCarDataId(carId, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in deleting PoolCar By Id.", e);
        }
    }
}

export = PoolCarController;
