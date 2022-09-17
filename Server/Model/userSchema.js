const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    }, phone: {
        type: Number,
        required: true
    },rollNo: {
        type: String,
        required: true
    }, course :{
        type: String,
        required:true
    },type: {
        type: String,
    },password: {
        type: String,
        required: true
    }, cpassword: {
        type: String,
        required: true
    }, date: {
        type: Date,
        default: Date.now
    }, tokens: [{
        token: {
            type: String,
            required: true
            }
        }
    ], complaints: [{
        Name: { type: String, require: true }  ,
        RoomNo: { type: String, require: true }  ,
        Type: { type: String, require: true }  ,
        Complaint: { type: String, require: true } 
    }]

});


userSchema.pre('save',  async function(next){
    console.log("hello");
    if(this.isModified('password')){
    this.password = await  bcrypt.hash(this.password,12);
    this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
})
// we are genrating token

userSchema.methods.generateAuthToken = async function () {
    try {
        let token =await jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token });
        await this.save();
        return token;
    } catch (e) {
        console.log(e);
    }
   
}
userSchema.methods.addcomplaint = async function (name, roomno,type,complaint) {
    try {
        this.complaints = this.complaints.concat({ Name: name, RoomNo: roomno, Type: type, Complaint: complaint });
        console.log( "dfdfgdfgd");
        await this.save();
        return this.complaints;
        
    } catch(err) {
        console.log(err);
    }
}
userSchema.methods.addeducation = async function (input1,input2,input3,input4,input5) {
    try {
        this.education = this.education.concat({ collegeName: input1, DegreeName: input2, Percentage: input3, City: input4, State: input5 });
        await this.save();
        console.log('added');
        return this.education;
    } catch(err) {
        console.log(err);
    }
}
userSchema.methods.addexperienceInfo = async function (input1,input2,input3,input4,input5) {
    try {
        this.experienceInfo = this.experienceInfo.concat({ companyName: input1, designation: input2, description: input3, workDuration: input4, state: input5 });
        await this.save();
        return this.experienceInfo;
    } catch(err) {
        console.log(err);
    }
}
userSchema.methods.addskillInfo  = async function (input1,input2,input3) {
    try {
        this.skillInfo = this.skillInfo.concat({ skill: input1, description: input2, certificateLink: input3});
        await this.save();
        return this.skillInfo;
    } catch(err) {
        console.log(err);
    }
}
userSchema.methods.addprojectInfo = async function (input1,input2,input3,input4) {
    try {
        this.projectInfo = this.projectInfo.concat({ projectName: input1, description: input2, title: input3, Image: input4 });
        await this.save();
        return this.projectInfo;
    } catch(err) {
        console.log(err);
    }
}
const User = mongoose.model('USER',userSchema);

module.exports = User;
