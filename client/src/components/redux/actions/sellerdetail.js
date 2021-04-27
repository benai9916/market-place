import {UPDATE, FETCH_ALL, CREATE} from '../../constants/actionType'
import * as api from '../../../API';

// action creator
export const getSellerDetails = (username) => async (dispatch) => { 
    try {
        const { data } = await api.fetchSellerDetail(username);

        dispatch({ type:  'FETCH_ALL_SELLER', payload: data })
       
    } catch (error) {
        console.log('get error ==> ', error)
    }
}

export const addSellerDetails = (seller) => async (dispatch) => {
    try {   
        const {data} = await  api.addSellerDetail(seller)

        console.log('=== checking th data =====', data)

        dispatch({ type: 'CREATE_SELLER' , payload: data})
    } catch (error) {
        console.log('post error ==> ', error)
    }
}

export const updateSellerDetails = (id, seller) => async (dispatch) => {
    try {
       const { data } =  await api.updateSellerDetail(id, seller)

       dispatch({ type: 'UPDATE_SELLER', payload: data})
    } catch(error) {
        console.log(error)
    }
}
