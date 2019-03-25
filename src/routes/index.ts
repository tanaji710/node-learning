import * as express from "express";
import AddPoolCarRoutes = require("./AddPoolCarRoutes");
import PoolCarRoutes= require("./PoolCarRoutes");
import UserRoutes = require("./UserRoutes");

const app = express();

class BaseRoutes {
    get routes() {
        console.log("Routes Init");
        app.use("/api/users/", new UserRoutes().routes);
        app.use("/api/poolcars/", new PoolCarRoutes().routes);
        app.use("/api/addpoolcars/", new AddPoolCarRoutes().routes);
        return app;
    }
}
export = BaseRoutes;
