import express, { Application, Request, Response } from "express";
import mongo_connect from "./src/database/mongo";
import dotenv from "dotenv";
dotenv.config();
const app: Application = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const PORT: number = Number(process.env.PORT) || 3000;

mongo_connect();

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${port}`);
});
