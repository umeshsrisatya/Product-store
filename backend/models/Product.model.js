import mongoose from "mongoose";
//here schema is like a blueprint of the model
const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        // brand: {type: String, required: true},
        // category: {type: String, required: true},
        // description: {type: String, required: true},
        price: { type: Number, required: true },
        // countInStock: {type: Number, required: true},
        // rating: {type: Number, required: true},
        // numReviews: {type: Number, required: true},
        image: { type: String, required: true },
    },
    {
        timestamps: true, // this will create created at and updated at fields
    }
);

const Product = mongoose.model("Product", productSchema);
//mongoose makes Product plural and lowercase as collection name as products
export default Product;