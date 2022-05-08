const router = require("express").Router();
const { request } = require("express");
const { default: mongoose } = require("mongoose");
const Event=require("../models/Events");
//Events data fetching
router.get("/:id",async (req,res)=>{
    try{
        const post=await Event.findOne({_id:req.params.id});
        console.log(post);
        res.status(200).json(post);
    }catch(e){
        res.status(500).json(e);
    }
});

module.exports=router;