const mongoose  = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});

/*comapre password

 userSchema.methods.comparepassword = async function(password){
    return bcrypt.compare(password,this.password);
 }*/


// json web token(jwt) --> header,payload,signature
// ye ek instance method hai bhai isme kitne bhi function create ker sakte hoo
userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d",
            }
        );
    }catch(error){
        console.error(error);
    }
};
// define the model or the collection name 

const User = new mongoose.model("User",userSchema);

module.exports = User;