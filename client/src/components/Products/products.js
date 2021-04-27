import React, {useEffect, useState} from 'react';
import useStyles from './style';
import {Box, Card, CardActionArea, CardContent, CardMedia,Button,
Typography, Grid,CircularProgress } from '@material-ui/core';
import AddProductModal from "../AddProductModal/addProductModal";
import AddProfileModal from "../AddProfile/addProfileModal";

import { getProducts, deleteProducts } from '../redux/actions/products'
import { getSellerDetails  } from '../redux/actions/sellerdetail';
import {useDispatch, useSelector } from 'react-redux';

const AddProducts = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const deldispatch = useDispatch();
    const sellerdispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [openp, setOpenP] = useState(false);
    const [currentId, setCurrentId] = useState(null)
    const userdata = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        dispatch(getProducts());
    }, [currentId, dispatch])

    useEffect(() => {
        sellerdispatch(getSellerDetails({username: userdata.result.username}));
    }, [currentId, openp, sellerdispatch])


    const products = useSelector((state) => 
        state.products
    );

    const sellerData = useSelector((state) => 
        state.seller
    );

    //  add product
    const handleOpen = () => {
        setCurrentId(null)
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenEdit = () => {
        setOpen(true);
    }

    // profile
    const handleProfileOpen = () => {
        setCurrentId(null)
        setOpenP(true);
      };

    const handleProfileClose = () => {
        setOpenP(false);
    };

    const handleOpenEditseller = () => {
        setOpenP(true);
    }

    console.log('== seller => ', sellerData)

    const handleEdit =(id) => {
        setCurrentId(id)
    }

    const handleDelete = (id) => {
        if (id) {
        deldispatch(deleteProducts(id))
        }
    }

    return (
        <Box style={{marginTop: 30}}>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                {sellerData && ( 
                    <Card className={classes.card} style={{margin: 24}}>
                            <>
                            <div style={{padding: 20}}>
                                <img widht="80" height="80" src={sellerData.selectedFile} />
                                <h3 style={{margin: "10px 0"}}>{sellerData.name}</h3>
                                <span>{sellerData.description}</span>
                            </div>
                            
                        <Button style={{ marginLeft: "79%"}} className={classes.btnstyle} color="primary" 
                        onClick={(e) => {handleOpenEditseller(); handleEdit(sellerData._id)}}>
                             Edit Profile
                        </Button>
                        </>
                        
                    </Card>
                    )}
                    {!sellerData &&(
                    <Button  className={classes.btnstyle} variant="contained" color="primary" onClick={handleProfileOpen}>
                       Add Profile
                    </Button>
                    )}
                    <AddProfileModal currentId={currentId} open={openp} 
                    username={userdata.result.username}
                    handleClose={handleProfileClose}/>
                </Grid>

                <Grid item xs={5}>
                    <Box > 
                        <Button  className={classes.btnstyle} variant="contained" color="primary" onClick={handleOpen}>
                        Add Product
                        </Button>
                        <AddProductModal currentId={currentId} open={open} handleClose={handleClose}/>
                    </Box>
                </Grid>
            </Grid>

            <Box>
            {!products.length ? <CircularProgress /> : (
            <Grid container justify="flex-start" spacing={3}>
                {products.filter((p) => p.username === userdata.result.username).map((item) => (
                    <Grid key={item._id} item={true} xs={12} sm={4} >
                        <Card className={classes.card} style={{margin: 24}}>
                            <img widht="220" height="220" src={item.selectedFile} />
                            <Box style={{padding: 20, borderTop: "1px solid lightgray"}}>
                                <h2 style={{marginBottom: 10}}>{item.name}</h2>
                                <span >{item.description}</span>
                                <h2 style={{marginTop: 10}}>Rs.&nbsp;{item.price}</h2>
                            </Box>

                            <Box style={{padding: 20}}>
                                <Button className={classes.btnstyle}
                                 variant="contained" color="primary" 
                                 onClick={() =>  {handleEdit(item._id); handleOpenEdit()}}
                                 >
                                Edit
                                </Button>

                                <Button
                                className={classes.btnstyle} 
                                style={{marginLeft: 20}} 
                                variant="contained" 
                                color="secondary" 
                                onClick={() => {handleDelete(item._id)}}>
                                Delete
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            )}
            </Box>
        </Box>
    )
}

export default AddProducts;