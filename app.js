const express = require('express');
const getWeatherData = require('./utils/getWeatherData.js');
const geodata = require('./utils/getGeoData.js');


const app = express();


app.get('/', (req,resp)=>{

    resp.send("hello!!")
})

app.get('/weather', (req, resp)=>{

    if(!req.query.location){
        return resp.send({
            error : "Please give us the location"
        })
    }

    geodata(req.query.location, (error,res)=>{

        if(!error || res.length === 0){
            return resp.send({error}); 
        }

        getWeatherData(res[1], res[0], (status,data)=>{
            // console.log(status, " ==> ", data);
            resp.send(data);
        })
    })
})


app.listen(3000, ()=>{
    console.log("server is up!!")
})