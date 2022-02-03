const { Schema, model } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const mongoose = require("mongoose");

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = model("product", ProductSchema);
