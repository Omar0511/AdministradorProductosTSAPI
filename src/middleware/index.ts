  import { Request, Response, NextFunction } from "express";
  import { validationResult } from "express-validator";

  export const handleInputErrors = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // console.log("Middleware de manejo de errores de entrada ejecutado");

    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // next: permite que la solicitud continúe a la siguiente función en la cadena de middleware o al controlador de ruta
    next();
  };
