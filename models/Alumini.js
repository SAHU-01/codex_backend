const mongoose=require ('mongoose');

const AluminiSchema=new mongoose.Schema({
    github:{
        type:String,
    },
    _id:{
        type:String,
    },
    githubDP:{
        type:String,
    },
    linkedin:{
        type:String,
    },
    name:{
        type:String,
    },
    role:{
        type:String,
    },
    skill:{
        type:String,
    },
    twitter:{
        type:String,
    }
})

module.exports=mongoose.model("alumini",AluminiSchema);