const express = require("express");
const {
  showProducts,
  deleteProduct,
  postProduct,
  updateProduct,
} = require("../controllers/productsController");

const apiProductsRouter = express.Router();

apiProductsRouter.get("/", showProducts);
apiProductsRouter.delete("/:productId", deleteProduct);
apiProductsRouter.post("/", postProduct);
apiProductsRouter.put("/:productId", updateProduct);

module.exports = apiProductsRouter;
