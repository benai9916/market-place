import AddProducts from '../modals/addProducts.js';
import SellerDetail from '../modals/sellerdetail.js';

export const getAllSeller = async(req, res) => {
    try {
        const getAllSeller = await SellerDetail.find()

        res.status(200).json(getAllSeller)
    } catch (error) {
        res.status(404).json({ message : error })
    }
}

export const getEachSellerDetails = async(req, res) => {
    const  { username } = req.body

    try {
        const getSellerDetail = await AddProducts.find({ username })

        if (getSellerDetail) {
            res.status(200).json(getSellerDetail)
        } else {
            res.status(200).json(null)
        }

    } catch (error) {
        res.status(404).json({ message : error })
    }
}