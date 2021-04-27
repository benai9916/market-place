import {DELETE, UPDATE, FETCH_ALL, CREATE} from '../../constants/actionType'
import * as api from '../../../API';

// action creator
export const getProducts = () => async (dispatch) => { 
    try {
        const { data } = await api.fetchProducts();

        dispatch({ type:  FETCH_ALL, payload: data })
       
    } catch (error) {
        console.log('get error ==> ', error)
    }
}

export const addProducts = (products) => async (dispatch) => {
    try {   
        const {data} = await  api.addProduct(products)

        dispatch({ type: CREATE , payload: data})
    } catch (error) {
        console.log('post error ==> ', error)
    }
}

export const updateProducts = (id, products) => async (dispatch) => {
    try {
       const { data } =  await api.updateProduct(id, products)

       dispatch({ type: UPDATE, payload: data})
    } catch(error) {
        console.log(error)
    }
}

export const deleteProducts = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id)

        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
}