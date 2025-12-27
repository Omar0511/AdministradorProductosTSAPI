import { Router } from "express";
import { createProduct } from "./handlers/product";
import { body, check, validationResult } from "express-validator";
import { handleInputErrors } from "./middleware";

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

// Body se utiliza para enviar datos al servidor en funciones que no son asíncronas
router.post(
  "/",
  body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),
  body("price")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .custom((value) => value > 0)
    .withMessage("El precio debe ser mayor que cero"),
  handleInputErrors,
  createProduct
);

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
