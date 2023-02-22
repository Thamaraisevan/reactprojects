import React, { useState } from 'react'

const useForm = (validation) => {

    const [values, setValues] = useState({
        email: '',
        pass: '',
        showPass: false
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setValues((prevValues) => {
            return {
                ...prevValues,
                [name]: value
            }
        })

    }


    const [errors, setErrors] = useState({})


    const handleVisible = () => {

        setValues({
            ...values,
            showPass: !values.showPass

        })

        console.log("pass", values.showPass)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submittt")
        setErrors(validation(values));

    }


    return { values, setValues, handleChange, handleVisible, handleSubmit,errors };
}

export default useForm;