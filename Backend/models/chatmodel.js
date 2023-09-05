const mongoose = require('mongoose');

const chatmodel = mongoose.Schema({
    chatName :{ type : string , trim : true},
    isGroupChat : { type : boolean , default : false },
    users:[{
        type : mongoose.Schema.Types.ObjectId,
        ref :"User"},
    ],
    latestMessage:{
        type : mongoose.Schema.Types.ObjectId,
        ref :"Message",
    },
    grouptAdmin:{
        type : mongoose.Schema.Types.ObjectId,
        ref: User,

    },
    
}, 
{
    timestamps : true 
}


);
 const Chats = mongoose.model ("Chat", chatmodel);
modeule.exports = Chats;