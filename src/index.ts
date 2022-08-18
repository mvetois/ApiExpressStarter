import express, { Express, Request, Response, NextFunction } from "express";
import "dotenv/config"
import API from "./routes";

const app : Express = express();
const port : number = Number(process.env.PORT) ||5000;

app.listen(port, () : void => {
    console.log("Server is running on port " + port);
});

app.use((req: Request, res: Response, next: NextFunction) => {
    res.append("Access-Control-Allow-Origin", "*");
    res.append("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use("/api", API);

export default app;