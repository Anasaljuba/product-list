const express = require("express");
const { postController } = require("./controllers/productsController");
const apiProductsRouter = require("./routers/productsRouter");
const connectDB = require("./database");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/api/products", apiProductsRouter);
connectDB();

app.listen(PORT, postController);
