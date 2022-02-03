const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    image: String,
    description: String,
    color: String,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("product", ProductSchema);
