import * as express from "express";
import AddPoolCarService = require("../service/AddPoolCarService");

class AddPoolCarController {
    private localPoolCarService: AddPoolCarService;
    constructor() {
        this.localPoolCarService = new AddPoolCarService();
    }

    public createAddPoolCar(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const poolcar = req.body;
            const poolCarService = new AddPoolCarService();
            poolCarService.createAddPoolCarData(poolcar, (error , result) => {
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

    public getAllAddPoolCars(req: express.Request, res: express.Response, next: express.NextFunction): void {
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

    public getAddPoolCarById(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const poolCarService = new AddPoolCarService();
            const carId = req.params.id;
            poolCarService.getAddPoolCarDataById(carId, (error , result) => {
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
            const poolCarService = new AddPoolCarService();
            const carId = req.params.id;
            const updatedCarBody = req.body;
            poolCarService.updateAddPoolCarData(carId, updatedCarBody, (error , result) => {
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
            const poolCarService = new AddPoolCarService();
            const carId = req.params.id;
            poolCarService.deleteAddPoolCarDataId(carId, (error , result) => {
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

export = AddPoolCarController;
