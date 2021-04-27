import React, {useState, useEffect } from 'react';
import useStyles from "./style";
import { Modal, Button, FormControl,
    TextField, Box, Select, MenuItem, InputLabel } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FileBase from 'react-file-base64';

// send data to redux
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, updateProducts } from '../redux/actions/products';


 const AddProductModal = ({currentId, open , handleClose}) => {
  const classes = useStyles();
  const userdata = JSON.parse(localStorage.getItem('profile'));


  const [productData, setProductData] = useState({
    name: '', price: '', description: '', selectedFile: '', category: '', username: userdata.result.username})

    // console.log('INIDE THE MODEL ====>', currentId, productData)

  useEffect(()  => {
    if (currentId === null) {
      setProductData({name: '', price: '', description: '', selectedFile: '', category: '', username: userdata.result.username})
    }
  }, [currentId])

  const dispatch = useDispatch();

  const product = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId ) : null );

  useEffect(() => {
    if (product) setProductData(product)
  }, [product])

  //  form data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) { 

      dispatch(updateProducts(currentId, productData))
    } else {
      console.log('FINALLL  PRODUC =>', productData)
      dispatch(addProducts(productData))
    }
    handleClose()
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title"> {currentId === null ? 'Add' : 'Update'} Product</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField className={classes.txtfield} 
                    required
                    value={productData.name} 
                    onChange={(e) => setProductData({ ...productData, name: e.target.value})}
                    label="Product Name" />

                    <TextField className={classes.txtfield}
                    required
                     label="Product Description"
                     value={productData.description} 
                    onChange={(e) => setProductData({ ...productData, description: e.target.value})}
                      />
                    
                    <FormControl className={classes.txtfield}>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select 
                    labelId="demo-simple-select-label"
                    value={productData.category}
                    onChange={(e) => setProductData({ ...productData, category: e.target.value})}
                    >
                    <MenuItem value="Fruit">Fruit</MenuItem>
                    <MenuItem value="Vegetable">Vegetable</MenuItem>
                    <MenuItem value="Frozen food">Frozen food</MenuItem>
                    </Select>
                    </FormControl>

                    <TextField className={classes.txtfield}
                    required
                      label="Price"
                      value={productData.price} 
                    onChange={(e) => setProductData({ ...productData, price: e.target.value})}
                      />

                      <Box style={{ marginTop: 50, width: "100%"}}>
                          <FileBase 
                            type="file"
                            multiple={false}
                            onDone={ ({base64}) => setProductData({ ...productData, selectedFile: base64})}
                          />
                      </Box>

                        <Box style={{marginTop: 38}}>
                  <Button className={classes.btnstyle} variant="contained" color="primary" onClick={handleSubmit}>
                  {currentId === null ? 'Add' : 'Update'}
                  </Button>
                  <Button style={{marginLeft: 20}} className={classes.btnstyle} variant="contained" color="secondary" onClick={handleClose}>
                      Cancel
                  </Button>
                </Box>
                </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddProductModal;