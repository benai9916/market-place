import React , { useEffect } from 'react'
import {Card, Box, Grid, Button } from '@material-ui/core';
import {useDispatch, useSelector } from 'react-redux';

import  { useHistory, useParams} from 'react-router-dom';

import { getEachSellerDetails } from '../redux/actions/getseller';

const ProductDetail = () => {
    const history = useHistory();
    const alldispatch = useDispatch();
    let { username } = useParams();


    useEffect(() => {
        alldispatch(getEachSellerDetails({username: username}));
    }, [alldispatch])

    const sellerData = useSelector((state) => 
        state.sellerdetail
    );

    console.log('=============== all seller', sellerData)

    return (
        <div style={{marginTop: 20}}> 
            <h2>List of all Product</h2>
            <Grid container>
                {sellerData.map((item) => (
                    <Grid key={item._id} item={true} xs={12} sm={4} >
                        <Card style={{margin: 24}}>
                            <img widht="220" height="220" src={item.selectedFile} />
                            <Box style={{padding: 20, borderTop: "1px solid lightgray"}}>
                                <h2 style={{marginBottom: 10}}>{item.name}</h2>
                                <span >{item.description}</span>
                                <h2 style={{marginTop: 10}}>Rs.&nbsp;{item.price}</h2>
                            </Box>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ProductDetail
