import express from 'express';
import dotenv from 'dotenv';
dotenv.config("./.env");
import connectDB from './src/config/mongo.config.js';
import short_url_routes from './src/routes/shortUrl.route.js';



import urlSchema from './src/models/shortUrl.model.js';

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use("/api/create", short_url_routes);


app.get("/:shortUrl",async (req,res)=>{
    const {shortUrl} = req.params;
    const url = await urlSchema.findOne({short_url:shortUrl});
    if(url){
        url.clicks++;
        await url.save();
        res.redirect(url.full_url);
    }else{
        return res.status(404).json("URL not found");
    }
})

app.listen(3000,()=>{
    connectDB();
    console.log("Server is running on port http://localhost:3000");
})