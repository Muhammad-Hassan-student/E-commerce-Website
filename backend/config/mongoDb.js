import mongoose from "mongoose";


const mongoDb = async () => {
    mongoose.connection.on('connected',() => {
        console.log(`MongoDb connected successfully`)
    })
    await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`);
}

export default mongoDb;