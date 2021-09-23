import express from "express";
import { getAllProducts, createProducts, getProductById } from "../controllers/products.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProducts);

export default router;