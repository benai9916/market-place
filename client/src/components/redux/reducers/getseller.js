
export default  (sellerdetail = [] , action ) => {
    switch (action.type ) {
        case 'FETCH_EACH_SELLER':
            return action.payload;

        case 'FETCH_ALL_SELLER':
            return action.payload;

        default:
            return sellerdetail;
    }
}