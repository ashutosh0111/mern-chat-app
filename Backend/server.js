const express = require("express");
const {chats} = require("./Data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();

dotenv.config();
connectDB();
app.get('/', (req, res)=>{
    res.send("API is running ");
});
app.get("/api/chat", (req, res)=>{
    res.send(chats);

});

app.get("/api/chat/:id" ,(req,res)=>{
    const singlechat = chats.find((c)=> c._id === req.params.id);
    res.send(singlechat);
});
 const PORT = process.env.PORT || 5000;
app.listen(5000, console.log("server started on localhost 5000"));
