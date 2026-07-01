const express = require("express");
const axios = require("axios");

const router = express.Router();

const Quote = require("../models/Quote");

router.get("/random",async(req,res)=>{

try{

const response=await axios.get("https://api.quotable.io/random");

const data=response.data;

const quote=new Quote({

content:data.content,
author:data.author

});

await quote.save();

res.json(data);

}catch(err){

res.status(500).json({message:err.message});

}

});

router.get("/history",async(req,res)=>{

const quotes=await Quote.find().sort({createdAt:-1});

res.json(quotes);

});

module.exports=router;