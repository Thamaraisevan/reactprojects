import { Box, TextField, Button, Typography } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import React from 'react'
import { useFormik } from 'formik'
import { color } from '@mui/system';

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


const validate = values => {
    const errors = {};
    if (!values?.email.trim()) {
        errors.email = "email is required*"
    }
    else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values?.email)) {
        errors.email = "*email is invalid"

    }

    if (!values?.pass.trim()) {
        errors.pass = "password is required*"
    }
    else if (values?.pass.maxLength < 6) {
        errors.pass = "password needs to be 6 characters*"

    }

    return errors;
}


const FormikForm = () => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            email: '',
            pass: '',
            showPass:false
        },
        validate

    });

    console.log("values", formik.values)


    const handleVisible = e => {

    }


    return (
        <div>
            <form>
                <Box display='flex'
                    flexDirection={"column"}
                    alignItems='center'
                    justifyContent={'center'}
                    maxWidth={400}
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
                            maxLength: 25,
                        }}

                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}

                    // error={formik.touched.email && formik.errors.email == undefined ? false : true}
                    // helperText={formik.touched.email && formik.errors.email == undefined ? false : formik.errors.email}

                    />

                    {formik.touched.email && formik.errors.email ? <span style={{ color: 'red', fontSize: '13px' }}>{formik.errors.email}</span> : null}

                    <TextField margin='normal'
                        placeholder='Password'
                        name='pass'
                        type={'password'}
                        label="Password"
                        variant="filled"
                        size="small"
                        sx={{
                            width: 250
                        }}
                        inputProps={{
                            maxLength: 6,
                        }}
                        value={formik.values.pass}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}

                        // error={formik.touched.pass && formik.errors.pass == undefined ? false : true}
                        // helperText={formik.touched.pass && formik.errors.pass == undefined ? false : formik.errors.pass}

                        onInput={(e) => {
                            e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6)
                        }}

                        InputProps={{
                            className: classes.root,
                            // endAdornment: (
                            //     <InputAdornment position='end'>
                            //         <IconButton aria-label='password-toggle' onClick={handleVisible} >
                            //             {values.showPass ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}
                            //         </IconButton>
                            //     </InputAdornment>
                            // )
                        }}

                    />
                    {formik.touched.pass && formik.errors.pass ? <span style={{ color: 'red', fontSize: '13px' }}>{formik.errors.pass}</span> : null}

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

export default FormikForm