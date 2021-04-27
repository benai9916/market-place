import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import  Visibility from "@material-ui/icons/Visibility";
import  VisibilityOff from "@material-ui/icons/VisibilityOff";

const input = ({ name, handleChange, type, label, autoFocus, handleShowPassword }) => {
    return (
        <Grid item xs={12} style={{padding: 14}}>
            <TextField 
                name ={name}
                onChange={handleChange}
                required
                fullWidth
                 label={label}
                 autoFocus={autoFocus}
                 type={type}
                 InputProps={name === 'password' && {
                     endAdornment : (
                         <InputAdornment position="end">
                             <IconButton onClick={handleShowPassword}>
                                 {type ===  'password' ? <Visibility /> : <VisibilityOff />}
                             </IconButton>
                         </InputAdornment>
                     )
                 }}
            />
        </Grid>
    )
}

export default input
