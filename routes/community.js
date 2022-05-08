const router = require("express").Router();
const { request } = require("express");
const { default: mongoose } = require("mongoose");
const Member=require("../models/Community");
//Team members data fetching
router.get("/:id",async (req,res)=>{
    try{
        const post=await Member.findOne({_id:req.params.id});
        console.log(post);
        res.status(200).json(post);
    }catch(e){
        res.status(500).json(e);
    }
});

module.exports=router;