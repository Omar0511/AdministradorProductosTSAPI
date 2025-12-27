import { Router } from "express";
import { createProduct } from "./handlers/product";

const router = Router();

// Routing - req: es lo que recibe el servidor o lo que tu estas enviando, res: es lo que el servidor responde
router.get("/", (req, res) => {
  // res.send('Hello, World!');
  // res.json('Hello, World!');

  res.json("Desde GET");
});

// router.post("/", (req, res) => {
//   res.json("Desde POST");
// });

router.post("/", createProduct);

router.put("/", (req, res) => {
  res.json("Desde PUT");
});

router.patch("/", (req, res) => {
  res.json("Desde PATCH");
});

router.delete("/", (req, res) => {
  res.json("Desde DELETE");
});

export default router;