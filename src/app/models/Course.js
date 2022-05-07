import mongoose from "mongoose";
import slug from 'mongoose-slug-generator'


const Schema = mongoose.Schema;
mongoose.plugin(slug)

const Course = new Schema({
    name: String,
    description: String,
    videoid: String,
    slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    })

export default mongoose.model('Course', Course)