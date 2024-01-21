import { Request, Response } from "express";
import "dotenv/config";

const Express = require("express");
const port = process.env.PORT;

const app = Express();

app.get("/", (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "test" },
    { id: 2, name: "initial" },
  ]);
});

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
