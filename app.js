const express = require("express");
const bodyParser = require("body-parser");
const { postController } = require("./controllers/productsController");
const apiProductsRouter = require("./routers/productsRouter");
const connectDB = require("./dataBase");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/products", apiProductsRouter);
connectDB();

app.listen(PORT, postController);
