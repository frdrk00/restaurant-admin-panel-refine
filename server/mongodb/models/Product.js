import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    productType: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    allCategories: { type: mongoose.Schema.Types.ObjectId, ref: "Category"}
  },
  { timestamps: true }
)

const productModel = mongoose.model('Product', ProductSchema)

export default productModel
