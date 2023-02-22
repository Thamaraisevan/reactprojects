
import { Typography, Box, TextField, Button, InputAdornment, IconButton } from '@mui/material'
import { makeStyles, createStyles, } from "@material-ui/core/styles";
import { useState } from 'react';
import useForm from '../hooks/useForm';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import validation from '../hooks/validation';


const useStyles = makeStyles({
    root: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },
}
);


const Auth = () => {
    const classes = useStyles();
    const { values, handleChange, handleVisible, handleSubmit, errors } = useForm(validation);

    return (
        <div>
            <form onClick={handleSubmit} >
                <Box display='flex'
                    flexDirection={"column"}
                    maxWidth={400}
                    alignItems="center"
                    justifyContent={'center'}
                    margin='auto'
                    marginTop={5}
                    padding={2}
                    borderRadius={'15px'}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        ':hover': {
                            boxShadow: '10px 10px 20px #ccc',
                            // borderRadius: '20px'
                        },
                    }}
                >
                    <Typography variant='h4' padding={2} textAlign='center'>
                        Log In
                    </Typography>
                    <TextField margin='normal'
                        type={'email'}
                        placeholder='enter mail*'
                        label="Email"
                        variant="filled"
                        size="small"
                        sx={{
                            width: 250
                        }}
                        maxLength={10}
                        InputProps={{ className: classes.root, }}
                        inputProps={{
                            maxLength: 10,
                        }}

                        value={values.email}
                        onChange={handleChange}
                        name='email'

                        error={errors.email == undefined ? false : true}
                        helperText={errors.email == undefined ? false : errors.email}


                    />
                    <TextField margin='normal'
                        type={values.showPass ? 'text' : 'password'}
                        placeholder='Password'
                        name='pass'
                        label="Password"
                        variant="filled"
                        size="small"
                        sx={{
                            width: 250
                        }}

                        inputProps={{
                            maxLength: 6,
                        }}
                        // onInput={(e) => {
                        //     e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6)
                        // }}
                        error={errors.pass == undefined ? false : true}
                        helperText={errors.pass == undefined ? false : errors.pass}
                        InputProps={{
                            className: classes.root,
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton aria-label='password-toggle' onClick={handleVisible} >
                                        {values.showPass ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        value={values.pass}
                        onChange={handleChange}
                    />

                    <Button variant="contained" color='error'
                        type='Submit'
                        // onClick={handleSubmit}
                        sx={{ margin: '20px' }}
                        className={classes.btnschange} >Login</Button>

                </Box>
            </form>
        </div>

    )
}

export default Auth