import express from 'express';
import morgan from 'morgan';
import connectDB from './db/db.js';
import userRoutes from './routes/userRoute.js'
connectDB();


const app = express();


app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import all the things//
app.use("/users", userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});


export default app;
