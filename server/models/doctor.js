import mongoose from 'mongoose';

const nurseSchema = mongoose.Schema({ //scema define what are the document look like in mongodb
    regNo:Number,
    nurseName:String,
    sex:String,
    section:{
        type:String,
    }
});

const nurse = mongoose.model('nurse', nurseSchema);

export default nurse;