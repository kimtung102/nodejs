
function handleMongooseArray(mongooseArray) {
    return mongooseArray.map(mongoose => mongoose.toObject())
}

function handleMongooseData(mongooseData) {
    return mongooseData ? mongooseData.toObject() : mongooseData
}

export {handleMongooseArray, handleMongooseData}
