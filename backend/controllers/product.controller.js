import Product from "../models/product.model.js";
import mongoose from "mongoose";

async function getProducts(req, res) {
    try {
        const products = await Product.find({});
        console.log("Products retrieved successfully");
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error in creating products", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

async function createProduct(req, res) {
    const product = req.body; // Data sent by user

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        console.log("Product created successfully");
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log("Error in creating product : ", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

async function updateProduct(req, res) {
    const { id } = req.params; // user will send this parameter in the url
    const product = req.body; // user will send this parameter in the body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ success: false, message: "Invalid Product Id" });
    }

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please enter all fields" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
        console.log("Product updated successfully");
    } catch (error) {
        console.log("Error in updating product", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

async function deleteProduct(req, res) {
    const { id } = req.params; // user will send this parameter in the url

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ success: false, message: "Invalid Product Id" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
        console.log("Product deleted successfully");
    } catch (error) {
        console.log("Error in deleting product", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export { getProducts, createProduct, updateProduct, deleteProduct };
