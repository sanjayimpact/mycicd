import express from "express";
import 'dotenv/config'

const app = express();
const port = process.env.PORT



app.use(express.json());

app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("welcome to the my  server")
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server is running on port ${port}`);

})