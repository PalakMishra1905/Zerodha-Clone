const {model} = require("mongoose");
// const bcrypt = require("bcrypt");

const { UserSchema } = require ("../Schema/UserSchema");

const UserModel = new model("user", UserSchema);

// UserSchema.pre("save", async function(next) {
//     try{
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(this.password, salt);
//       this.password = hashedPassword;
//       next();
//     }catch(err){
//        next(err);
//     }
//   });

module.exports = {UserModel};
