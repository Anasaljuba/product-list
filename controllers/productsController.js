//requeres
const productsDemo = require("../dataBase/addedData");
const Product = require("../dataBase/models/Products");
//let to define a products without a major changes to affect the database for now
let products = productsDemo;

//home page
const home = (req, res) => {
  res.send("HOME");
};

// to show products in api/products
const showProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.massage });
  }
};

// to delete a product and if is not found to return Not-found
const deleteProduct = (req, res) => {
  const { productId } = req.params;
  const productCheck = products.find((product) => +product.id === +productId);
  if (productCheck) {
    products = products.filter((product) => +product.id !== +productId);
    res.status(204).end();
  } else {
    res.status(404).json({ msg: "Not Found" });
  }
};

// to post a product and push it to products JSON
const postProduct = (req, res) => {
  const product = {
    id: Math.floor(Math.random() * 100000),
    ...req.body,
  };
  products.push(product);
  res.status(201).json(product);
};

//to launch the app
const postController = () => {
  console.log("Hello World");
};

// export the modules es5 way
module.exports = {
  home,
  showProducts,
  deleteProduct,
  postProduct,
  postController,
};
