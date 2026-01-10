import { Request, Response } from "express";
import colors from "colors";
import Product from "../models/Product.model";
import { check, validationResult } from "express-validator";

export const getProducts = async (req: Request, res: Response) => {
  // res.json("Desde GET");

  const products = await Product.findAll({
    // order: [["createdAt", "DESC"]],
    order: [["id", "DESC"]],
    // limit: 10,
    // atrtributes: omite ciertas columnas
    // attributes: {exlude: ['id', 'availability', 'createdAt', 'updatedAt']}
  });

  res.json({
    data: products,
  });
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  res.json({
    data: product,
  });
};

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

  const product = await Product.create(req.body);

  res.status(201).json({
    data: product,
  });
};

export const updateProducts = async (req: Request, res: Response) => {
  // res.json("Desde PUT");

  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  // Actualizar producto
  // console.log(colors.yellow(req.body));

  // update: solo actualiza los campos que se envían en el body
  await product.update(req.body);
  await product.save();

  res.json({
    data: product,
  });
};

export const updateAvailability = async (req: Request, res: Response) => {
  // res.json("Desde PATCH");

  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  product.availability = !product.dataValues.availability;
  await product.save();

  res.json({
    data: product,
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  // res.json("Desde DELETE");

  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  await product.destroy();

  res.json({
    data: "Producto eliminado correctamente",
  });
};
