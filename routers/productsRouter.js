const express = require("express");
const {
  showProducts,
  deleteProduct,
  postProduct,
} = require("../controllers/productsController");

const apiProductsRouter = express.Router();

apiProductsRouter.get("/", showProducts);
apiProductsRouter.delete("/:productId", deleteProduct);
apiProductsRouter.post("/", postProduct);

module.exports = apiProductsRouter;
