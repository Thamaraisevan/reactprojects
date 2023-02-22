

export default function validation(values) {
    console.log("values", values);
    let errors = {};
    if (!values?.email.trim()) {
        errors.email = "email is required"
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values?.email)) {
        errors.email = '*email is invalid'
    }

    if (!values?.pass.trim()) {

        errors.pass = 'password is required'
    }
    else if (values?.pass.length < 6) {

        errors.pass = 'password needs to be 6 characters'

    }

    console.log("errors", errors)
    return errors;


}