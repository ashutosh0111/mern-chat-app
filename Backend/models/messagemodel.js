const mongoose = require('mongoose ');

const messagemodel = mongoose.schema({
   sender : {type : mongoose.Schema.Types.ObjectId,   ref :"User"},
   Content :{ type : String, trim : true } ,
   chat :{ type: mongoose.Schema.Types.ObjectId,   ref :"Chat"},

},
{
    timestamps : true ,
}
);
const Message = mongoose.model("Messages" , messagemodel);
module.exports = Message;