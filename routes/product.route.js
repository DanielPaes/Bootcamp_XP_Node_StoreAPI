import express from "express";
import ProducteController from "../controllers/product.controller.js";
import productController from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", ProducteController.createProduct);
router.get("/", ProducteController.getProducts);
router.get("/:id", ProducteController.getProduct);
router.delete("/:id", ProducteController.deleteProduct);
router.put("/", ProducteController.updateProduct);
router.post("/info", productController.createProductInfo);
router.put("/info", productController.updateProductInfo);

export default router;
