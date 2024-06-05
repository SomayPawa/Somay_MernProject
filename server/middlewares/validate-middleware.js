// aab kya hai compare kerna hai jo usne dala hai vo sahi hai ya nahi
// ye jo sign up schema kiya hai ye vo hai 
const validate = (signupSchema) => async(req,res,next) =>{
    try{
        const parseBody = await signupSchema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }catch(err){
        const status = 422;
        const message = "fill the input properly";
        const extraDetails = err.errors[0].message;
        // res.status(400).json({msg:message});
        const error = {
            status,
            message,
            extraDetails,
        }
        next(error);
    }
};

module.exports = validate;