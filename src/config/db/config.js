import mongoose from "mongoose"

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_nodejs_dev');
        console.log('connected!!');
    } catch (e) {
        console.log('connection failed!!');
    }
}

export default connect