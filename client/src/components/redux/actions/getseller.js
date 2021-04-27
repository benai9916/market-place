import * as api from '../../../API';

// action creator

export const getAllSellers = () => async (dispatch) => { 
    try {
        const { data } = await api.getAllSeller();

        dispatch({ type:  'FETCH_ALL_SELLER', payload: data })
       
    } catch (error) {
        console.log('get error ==> ', error)
    }
}

export const getEachSellerDetails = (username) => async (dispatch) => { 
    try {
        const { data } = await api.getEachSellerDetail(username);
        console.log('=====================================', data, username)

        dispatch({ type:  'FETCH_EACH_SELLER', payload: data })
       
    } catch (error) {
        console.log('get all error ==> ', error)
    }
}
