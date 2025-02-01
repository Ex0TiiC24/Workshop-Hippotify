import express from 'express';
import playlistRoute from './routes/playlistRoute.js'
import connection from './config/database.js'
import userRoute from  './routes/userRoutes.js'
import cors from 'cors';
import { logger } from './middlewares/logger.js';
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.use(logger)
app.use('/api/playlists',playlistRoute)
app.use('/api/user',userRoute)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

connection.connect((err)=>{
    if (err){
        console.log("database failed to connect")
        console.log(err)
    }
    else{
        console.log('database is connected')
    }
})

app.get('/hi',(req,res)=>{
    res.json({
        status:'success',
        message:'Hello World'
    })
})

