const {z} = require("zod");

// creating an object schema
// ye bhi ek middle ware hai
const signupSchema = z.object({
   username:z
        .string({
            required_error:"name is required"
        })
        .trim()
        .min(3,{message:"name must be atleast 3 char"})
        .max(255,{message:"name must not be more than 255 char"}),
    email:z
        .string({
            required_error:"email is required"
        })
        .trim()
        .email({message:"invalid email address"})
        .min(3,{message:"email must be atleast 3 char"})
        .max(255,{message:"name must not be more than 255 char"}),
    phone:z
        .string({
            required_error:"phone is required"
        })
        .trim()
        .min(10,{message:"phone must be atleast 10 char"})
        .max(10,{message:"name must not be more than 10 char"}),
    password:z
        .string({
            required_error:"password is required"
        })
        .trim()
        .min(7,{message:"password must be atleast 7 char"})
        .max(1024,{message:"password must not be more than 1024 char"}),
});

module.exports = signupSchema;