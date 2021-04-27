import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import productsRouter from './routes/products.js';
import userRouter from "./routes/user.js";
import sellerRouter from "./routes/sellerdetail.js";
import sellerdetailRouter from './routes/getseller.js';

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/products', productsRouter)
app.use("/user", userRouter);
app.use("/seller", sellerRouter);
app.use("/sellerdetail", sellerdetailRouter)

app.get('/', (req, res) => {
    res.send('API started')
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server runnnig on PORT:  ${PORT}`)))
    .catch((error) => console.log('Encounter Error => ',error));

mongoose.set('useFindAndModify', false);

