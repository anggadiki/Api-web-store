import { Request, Response } from "express";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
const Express = require("express");

const prisma = new PrismaClient();
const port = process.env.PORT;
const app = Express();

app.get("/", (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "test" },
    { id: 2, name: "initial" },
  ]);
});

app.get("/product", async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
