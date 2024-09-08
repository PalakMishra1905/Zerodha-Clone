const {UserModel} = require("./Model/UserModel.js");
const { createSecretToken } = require("./Util/SecretToken");
const bcrypt = require("bcryptjs");

//Signup.
module.exports.Signup = async (req, res, next) => {
  try {
    const {email} = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const user = await UserModel.create({ 
      email:req.body.email,
      password: await bcrypt.hash(req.body.password, salt),
      username:req.body.username,
      createdAt:req.body.createdAt });
    const token = createSecretToken(user);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};


//Login.
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await UserModel.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect email' }) 
    }
    const auth = await bcrypt.compare(password, user.password)
    if (!auth) {
      return res.json({message:'Incorrect password' }) 
    }
     const token = createSecretToken(user);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}

