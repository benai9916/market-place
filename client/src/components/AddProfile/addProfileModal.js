import React, {useState, useEffect } from 'react';
import useStyles from "./style";
import { Modal, Button,
    TextField, Box } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FileBase from 'react-file-base64';

// send data to redux
import { useDispatch, useSelector } from 'react-redux';
import { addSellerDetails, updateSellerDetails } from '../redux/actions/sellerdetail';

const AddProfileModal = ({currentId, open , handleClose, username}) => {
    const classes = useStyles();
    const userdata = JSON.parse(localStorage.getItem('profile'));

    const [sellerData, setSellerData] = useState({
      name: '', description: '', selectedFile: '', username: username})


    const dispatch = useDispatch();

    useEffect(()  => {
    if (currentId === null) {
        setSellerData({name: '', description: '', selectedFile: '', username: username})
    }
    }, [currentId])

  const sellerdata = useSelector((state) => state.seller );


  useEffect(() => {
    setSellerData({...sellerData, username: username})
    if (sellerdata) setSellerData(sellerdata)
  }, [sellerdata])

  console.log('=================================================', sellerData)

  //  form data
  const handleSubmitSeller = (e) => {
    e.preventDefault();
    if (currentId) { 
        console.log('greeta------------', currentId, sellerdata)
      dispatch(updateSellerDetails(currentId, sellerData))
    } else {
      console.log('greeta------------', sellerData)
      dispatch(addSellerDetails(sellerData))
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
            <h2 id="transition-modal-title"> {currentId === null ? 'Add' : 'Update'} Profile</h2>
                <form className={classes.root}  autoComplete="off">
                    <TextField className={classes.txtfield} 
                    required
                    value={sellerData.name} 
                    onChange={(e) => setSellerData({ ...sellerData, name: e.target.value})}
                    label="Name" />

                    <TextField className={classes.txtfield}
                    required
                     label="Description"
                     value={sellerData.description} 
                    onChange={(e) => setSellerData({ ...sellerData, description: e.target.value})}
                      />

                      <Box style={{ marginTop: 50, width: "100%"}}>
                          <FileBase 
                            type="file"
                            multiple={false}
                            onDone={ ({base64}) => setSellerData({ ...sellerData, selectedFile: base64})}
                          />
                      </Box>

                    <Box style={{marginTop: 38}}>
                        <Button className={classes.btnstyle} variant="contained" color="primary" onClick={handleSubmitSeller}>
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
    )
}

export default AddProfileModal
