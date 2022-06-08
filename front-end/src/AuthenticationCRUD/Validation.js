import * as yup from "yup"

export const addOrderSchema = yup.object().shape({
    name: yup.string().required(),
    email : yup.string().email().required(),
    location : yup.string().required(),
    purchase : yup.string().required()
})

//Email validation
export const EmailSchema = yup.object().shape({
    email : yup.string().email().required()
})

// Quantity Order
export const QuantitySchema = yup.object().shape({
    quantity: yup.number().positive().integer()
})