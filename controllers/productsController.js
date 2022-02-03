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
    res.status(500).json({ error: error.message });
  }
};

// to post a product and push it to products JSON
const postProduct = async (req, res) => {
  try {
    const product = req.body;
    const createdProduct = await Product.create(product);
    res.status(201).json({
      msg: "Product got created successfully",
      theProduct: createdProduct,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// to delete a product and if is not found to return Not-found
const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const productCheck = await Product.findByIdAndDelete(productId);
  try {
    if (productCheck) {
      res.status(204).end();
    } else {
      res.status(404).json({ msg: "Product is not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// to update a product
const updateProduct = async (req, res) => {
  const product = req.body;
  const { productId } = req.params;
  try {
    const updateProduct = await Product.findByIdAndUpdate(productId, product, {
      new: true,
    });
    res.status(200).json({
      msg: "product updated successfully",
      updateProduct: updateProduct,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
  updateProduct,
};
