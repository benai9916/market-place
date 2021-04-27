

export default  (seller = [] , action ) => {
    switch (action.type ) {
        case 'FETCH_ALL_SELLER':
            return action.payload;

        case 'CREATE_SELLER':
            return  action.payload;

        case 'UPDATE_SELLER':
            return action.payload;

        default:
            return seller;
    }
}