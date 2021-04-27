import React , { useEffect } from 'react'
import {Card, Box, Grid, Button } from '@material-ui/core';
import useStyles from './style';
import {useDispatch, useSelector } from 'react-redux';

import  { useHistory,} from 'react-router-dom';

import { getEachSellerDetails, getAllSellers } from '../redux/actions/getseller';

const BuyerDashboard = () => {
    const classes = useStyles();
    const eachdispatch = useDispatch();
    const history = useHistory();
    const alldispatch = useDispatch();

    useEffect(() => {
        eachdispatch(getAllSellers());
    }, [history, eachdispatch])

    

    const allseller = useSelector((state) => 
        state.sellerdetail
    );


    console.log('=============== all seller', allseller)
    // const sellerData = useSelector((state) => 
    //     state.seller
    // );

    const checkout = (username) => {
        console.log('============> ', username)
        history.push(`/product/${username}`)
    }

    return (
        <div style={{marginTop: 20}}> 
            <h2>List of all seller</h2>
            <Grid container>
                {allseller.map((item, i) =>  (
                <Grid item xs={4} key={i}>
                    <Card className={classes.card} style={{margin: 24}}>
                        <img widht="220" height="220" src={item.selectedFile} />
                        <Box style={{padding: 20, borderTop: "1px solid lightgray"}}>
                            <h2 style={{marginBottom: 10}}>{item.name}</h2>
                            <span >{item.description}</span>
                        </Box>

                        <Box style={{padding: 20}}>
                            <Button className={classes.btnstyle}
                                variant="contained" color="primary" 
                                onClick={() =>  {checkout(item.username)}}
                                >
                            Checkout
                            </Button>

                        </Box>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default BuyerDashboard
