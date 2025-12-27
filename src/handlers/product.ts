import { Request, Response } from "express";
import colors from "colors";
import Product from "../models/Product.model";
import { check, validationResult } from "express-validator";

export const createProduct = async (req: Request, res: Response) => {
  // console.log(colors.yellow(req.body));

  // const product = new Product(req.body);
  // const savedProduct = await product.save();

  // console.log(colors.magenta(`Producto creado: ${JSON.stringify(savedProduct)}`));

  // Validación
  // await check('name', 'El nombre es obligatorio').not().isEmpty().run(req);
  // await check('price', 'El precio debe ser un número').isNumeric().run(req);
  // await check('category', 'La categoría es obligatoria').not().isEmpty().run(req);

  // Este código lo movimos a: src/router.ts, para validar de otra forma en ese archivo
  // check: se usa en funciones asíncronas como middlewares, en el otro archivo usamos body para funciones no asíncronas
  // await check("name")
  //   .notEmpty()
  //   .withMessage("El nombre es obligatorio")
  //   .run(req);
  // await check("price")
  //   .isNumeric()
  //   .withMessage("El precio debe ser un número")
  //   .notEmpty()
  //   .withMessage("El precio es obligatorio")
  //   .custom((value) => value > 0)
  //   .withMessage("El precio debe ser mayor que cero")
  //   .run(req);

  // Almacenar en la BD
  // await product.save();

  // res.json("Crear un producto");

  try {
    const product = await Product.create(req.body);

    res.json({
      data: product,
    });
  } catch (error) {
    console.log(colors.bgRed.white(`Error al crear el producto: ${error}`));
  }
};
