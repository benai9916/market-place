import express from 'express';

import { getProducts, createProducts, updateProducts, deleteProducts } from "../controllers/products.js";

const router = express.Router();

router.get('/', getProducts)
router.post('/', createProducts)
router.patch('/:id', updateProducts)
router.delete('/:id', deleteProducts)

export default router;