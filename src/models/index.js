import mongoose from 'mongoose';

const schema = new mongoose.Schema({
   user: Number,
   service: String,
   description: String,
   type: String,
   date: Date, 
});

const Log = mongoose.model('Log', schema);

export default Log;
