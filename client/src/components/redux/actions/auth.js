import {AUTH} from '../../constants/actionType'
import * as api from '../../../API';


export const signin = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signIn(formData);

        dispatch({type: AUTH , data})

        // history.push('/')
        window.location.href = '/';
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signUp(formData);

        dispatch({type: AUTH , data})

        // history.push('/')
        window.location.href = '/';
    } catch (error) {
        console.log(error)
    }
}