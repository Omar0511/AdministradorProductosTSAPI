import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    tags: [
      {
        name: "Products",
        description: "Operations related to products",
      },
      {
        name: "Auth",
        description: "Operations related to authentication",
      },
    ],
    info: {
      title: "REST API Node.js / Express / TypeScript",
      version: "1.0.0",
      description: "API Docs for Products",
    },
  },
  apis: ["./src/router.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerUiOptions: SwaggerUiOptions = {
  customCss: `.topbar-wrapper .link {
      content: url('https://cdn.prod.website-files.com/682b57242e7239658cb37f10/682b57242e7239658cb37f32_Logo.svg');
      width: 150px;
      height: 40px;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .swagger-ui .topbar {
      background-color: #000000;
    }
  `,
  customSiteTitle: "API Products Docs",
};

export default swaggerSpec;
export { swaggerUiOptions };
