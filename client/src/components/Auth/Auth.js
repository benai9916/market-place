import React,  { useState } from 'react'
import useStyles from './style';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";

import {Typography,  Container,
     Paper, Grid, FormControl, InputLabel, Select, MenuItem, 
     Button} from '@material-ui/core';

import Input from './input';
import {signin, signup} from '../redux/actions/auth';

const initialState = { name: "", email :'', password:' ', confirmPassword :'', account:'', username: ''}
const Auth = () => {
    const state = null
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignIn ] = useState(false);
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword(( prevShowPassword) => !prevShowPassword)

    const switchMode = () => {
        setFormData(initialState)
        setIsSignIn((prevIsSignUp) => !prevIsSignUp )
        setShowPassword(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        if (isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
        // console.log('checkin g---> ', formData)
    }


    return (
        <Container component="main" maxWidth="sm">
            <Paper className={classes.paper} elevation={4}>
                <Typography style={{ paddingTop: 20, paddingLeft: 30}} variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container style={{padding: "10px 20px"}}>
                        {
                            isSignup && (
                                <>
                            <FormControl style={{width: "99%", marginLeft: 10, marginRight: 10, marginBottom: 10}}>
                                <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
                                <Select 
                                labelId="demo-simple-select-label"
                                name="account"
                                onChange={handleChange}
                                >
                                <MenuItem value="seller">Seller</MenuItem>
                                <MenuItem value="buyer">Buyer</MenuItem>
                                </Select>
                            </FormControl>

                                <Input  
                                 name="name"
                                handleChange={handleChange}
                                label="Name" />

                                <Input  
                                name="username"
                                handleChange={handleChange}
                                label="User Name" />
                                </>
                            )}

                            <Input  
                                 name="email"
                                handleChange={handleChange}
                                type="email"
                                label="Email" />

                            <Input 
                                name="password"
                                label="Password"
                                handleChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                handleShowPassword={handleShowPassword}
                             />


                             {isSignup && (
                                <Input name="confirmPassword" label="Repeat Password" type="password" handleChange={handleChange}/>
                             )}
                    </Grid>

                    <Button style={{margin: "20px"}} type="submit" size="large" variant="contained" color="primary">{isSignup ? 'Sign Up': 'Sign In'}</Button>
                    <Grid container justify="center" style={{paddingBottom: 10}}>
                        <Grid item>
                            <Button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign In': 'Dont have an accout?  Sign Up'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
