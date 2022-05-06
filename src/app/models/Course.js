import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    title: String,
    description: String,
    image: String,
    createdDate: {type:Date, default: Date.now},
    modifiedDate: {type:Date, default: null},
})

export default mongoose.model('Course', Course)