import express from 'express';
import connection from './config/database.js'
const app = express();
const port = 3000;

app.use(express.json());


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