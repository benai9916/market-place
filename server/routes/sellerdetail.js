import express from 'express';

import { getSellerDetails, createSellerDetails, updateSellerDetails } from "../controllers/sellerdetail.js";

const router = express.Router();

router.post('/get', getSellerDetails)
router.post('/post', createSellerDetails)
router.patch('/:id', updateSellerDetails)

export default router;