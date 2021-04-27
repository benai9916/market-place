import mongoose from 'mongoose'

//  add scheme
const sellerScheme = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    description: {type: String, required: true},
    selectedFile: [String]
})

//  turn scheme to a model
const addSeller = mongoose.model('sellerDetails', sellerScheme)

export default addSeller