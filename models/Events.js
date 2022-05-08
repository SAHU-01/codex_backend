const mongoose =require("mongoose");

const EventSchema = new mongoose.Schema({
    EventName:{
        type:String,    
    },
    EventLink:{
        type:String,
    },
    EventDescription:{
        type:String, 
    },
    EventImage:{
        type:String,
    },
    EventOrganizer:{
        type:String,
    },
    _id:{
        type:String,
    },
    CreatedOn:{
        type:String,
    }
    
})

module.exports=mongoose.model("events",EventSchema);