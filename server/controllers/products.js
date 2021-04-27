import AddProducts from '../modals/addProducts.js';
import mongoose from 'mongoose';


export const getProducts = async(req, res) => {
    try {
        const getProducts = await AddProducts.find()

        res.status(200).json(getProducts)
    } catch (error) {
        res.status(404).json({ message : error })
    }
}

export const createProducts = async(req, res) => {
    const product = req.body;
    
    const newProduct = new AddProducts(product);
    try {
        await  newProduct.save();

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message : error })
    }
}

export const updateProducts = async (req, res) => {
    const {id : _id } = req.params
    const product =  req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No product with that id');

    const updateProducts =  await AddProducts.findByIdAndUpdate(_id, {...product, _id} , { new: true})

    res.json(updateProducts)
}


export const deleteProducts = async (req, res) => {
    const {id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No product with that id');

    await AddProducts.findByIdAndRemove(id);

    res.json( { message: "Product deleted successfully..!"});
}