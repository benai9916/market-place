import mongoose from 'mongoose'

//  add scheme
const addSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    selectedFile: [String],
    category: [String],
    username: String
})

//  turn scheme to a model
const addProducts = mongoose.model('addProducts', addSchema)

export default addProducts
