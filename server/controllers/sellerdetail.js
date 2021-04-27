import SellerDetail from '../modals/sellerdetail.js';
import mongoose from 'mongoose';

export const getSellerDetails = async(req, res) => {
    const  { username } = req.body
    try {
        const getSeller = await SellerDetail.findOne( { username })

        if (getSeller) {
            res.status(200).json(getSeller)
        } else {
            res.status(200).json(null)
        }

    } catch (error) {
        res.status(404).json({ message : error })
    }
}

export const createSellerDetails = async(req, res) => {
    const seller = req.body;
    const newSeller = new SellerDetail(seller);
    try {
        await  newSeller.save();

        res.status(201).json(newSeller);
    } catch (error) {
        res.status(409).json({ message : error })
    }
}

export const updateSellerDetails = async (req, res) => {
    const {id : _id } = req.params
    const seller =  req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No seller with that id');

    const updateSeller =  await SellerDetail.findByIdAndUpdate(_id, {...seller, _id} , { new: true})

    res.json(updateSeller)
}