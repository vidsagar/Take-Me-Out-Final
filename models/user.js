const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
   lname: {
type:String,
required:true,
    },
    email:{
        type:String,
        required:true,
    },
    passwordHash:{
        type:String,
        required:true,
    },

    // isAdmin:{
    //     type:Boolean,
    //     default:false,
    // }
})

userSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

userSchema.set('toJSON',{
    virtuals:true,
})

module.exports=mongoose.model('myusers',userSchema)