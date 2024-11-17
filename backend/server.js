import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoDb from './config/mongoDb.js'
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js'
import productRouter from './routes/product.route.js'

//config app
const app = express();
const port = process.env.PORT || 4000;
dotenv.config();
mongoDb();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter)

app.get('/',(req,res) => {
    res.send('Server testing ....');
})

app.listen(port,() => {
    console.log(`Server is running on port: ` + port);
})