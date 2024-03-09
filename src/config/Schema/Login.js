import * as yup from 'yup';



export const loginSchema = yup.object({
    Email: yup.string().email().required("Enter Your Email."),
    Password: yup.string().min(6).required("Enter Your Password.")
})