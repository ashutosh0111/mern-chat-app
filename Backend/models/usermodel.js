const mongooose = require("mongoose ");
const userSchema = mongooose.Schema({
    name :{type  : String , required : true },
    email :{type : String , required : true  , unique : true  },
    password : {type :String , required : true },
    pic: {type : string ,  default :"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg", },
},{timestamps : true } );
const User = mongooose.model("User", userSchema);
modulse.exports = User;