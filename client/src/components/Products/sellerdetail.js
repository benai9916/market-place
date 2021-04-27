import React, {useEffect, useState} from 'react';
import useStyles from './style';
import {Box, Card, CardActionArea, CardContent, CardMedia,Button,
Typography, Grid,CircularProgress } from '@material-ui/core';
import AddProductModal from "../AddProductModal/addProductModal";
import AddProfileModal from "../AddProfile/addProfileModal";

import {useDispatch, useSelector } from 'react-redux';

import { getProducts, deleteProducts } from '../redux/actions/products'
import { addSellerDetails,getSellerDetails , updateSellerDetails } from '../redux/actions/sellerdetail';

const Sellerdetail = () => {
    const classes = useStyles();
    const sellerdispatch = useDispatch();
    const userdata = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        sellerdispatch(getSellerDetails({username: userdata.result.username}));
    }, [sellerdispatch])

    
    const sellerData = useSelector((seller) => 
        seller.seller
    );

    console.log('THIS IS SELLER detail ', sellerData)


    return (
        <Card className={classes.card} style={{margin: 24}}>
            {sellerData !== null && (
        <>
            <img widht="50" height="50" src={sellerData.filename} />
            <h3>{sellerData.name}</h3>
            <span>{sellerData.description}</span>
        </>
         )}
        </Card>
    )
}

export default Sellerdetail
