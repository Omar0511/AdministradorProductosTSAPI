import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateAvailability,
  updateProducts,
} from "./handlers/product";
import { body, check, param, validationResult } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *   Product:
 *    type: object
 *    properties:
 *     id:
 *      type: integer
 *      description: ID del producto
 *      example: 1
 *     name:
 *      type: string
 *      description: Nombre del producto
 *      example: Monitor 24 pulgadas
 *     price:
 *      type: number
 *      description: Precio del producto
 *      example: 3000.50
 *     availability:
 *      type: boolean
 *      description: Disponibilidad del producto
 *      example: true
 */

// Routing - req: es lo que recibe el servidor o lo que tu estas enviando, res: es lo que el servidor responde
// router.get("/", (req, res) => {
//   // res.send('Hello, World!');
//   // res.json('Hello, World!');

//   res.json("Desde GET");
// });

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags:
 *       - Products
 *     description: Lista de productos
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

router.get("/", getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *    summary: Obtiene un producto por ID
 *    tags:
 *     - Products
 *    description: Obtiene un producto específico usando su ID
 *    parameters:
 *     - in: path
 *       name: id
 *       description: ID del producto
 *       required: true
 *       schema:
 *        type: integer
 *    responses:
 *     200:
 *      description: Detalles del producto
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *    404:
 *     description: Producto no encontrado
 *    400:
 *     description: Solicitud inválida
 */

router.get(
  "/:id",
  param("id").isInt().withMessage("El ID debe ser un número"),
  handleInputErrors,
  getProductById
);

// router.post("/", (req, res) => {
//   res.json("Desde POST");
// });

// Body se utiliza para enviar datos al servidor en funciones que no son asíncronas
router.post(
  "/",
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
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

router.put(
  "/:id",
  param("id").isInt().withMessage("El ID debe ser un número"),
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  body("price")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .custom((value) => value > 0)
    .withMessage("El precio debe ser mayor que cero"),
  body("availability")
    .isBoolean()
    .withMessage("Valor para disponibilidad no válido"),
  handleInputErrors,
  updateProducts
);

router.patch(
  "/:id",
  param("id").isInt().withMessage("El ID debe ser un número"),
  handleInputErrors,
  updateAvailability
);

router.delete(
  "/:id",
  param("id").isInt().withMessage("El ID debe ser un número"),
  handleInputErrors,
  deleteProduct
);

export default router;
