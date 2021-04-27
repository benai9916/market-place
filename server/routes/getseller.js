import express from 'express';

import { getAllSeller, getEachSellerDetails } from "../controllers/getseller.js";

const router = express.Router();

router.get('/', getAllSeller)
router.post('/getall', getEachSellerDetails)


export default router;