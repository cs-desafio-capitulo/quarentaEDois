import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  user: {
    type: Number,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
    enum: ['INFO', 'WARN', 'ERROR'],
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('Log', schema);
