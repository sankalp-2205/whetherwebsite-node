
const request = require('request');
const express = require('express');
const geocode = require('../utils/geocoding.js');
const whether = require('../utils/whether.js');
const app = express();
app.set('view engine','hbs');
app.get('',(req,res)=>{
    res.render('index',{
        title:'Whether App',
        name: 'Sankalp'
    })
});

app.get('/whether',(req,res)=>{
   if(!req.query.address)
   {
       return res.send({
           error: 'Please provide an address'
       })
   }
   geocode(req.query.address,(error,data)=>{
    if(error)
    {
        return res.send({
            error: error
        })
    }
    whether(data.latitude,data.longitude,(error,whetherdata)=>{
        if(error)
        {
            return res.send({
                error: error
            })
        }
        res.send({
            Location : data.location,
            Temperature: whetherdata.temp,
            Summary: whetherdata.summary,
            Max: whetherdata.max,
            Min: whetherdata.min,
        })
    })
})
})
app.get('*',(req,res)=>{
    res.render('page404',{
        title:'Whether App',
    })
});
app.listen(3000,()=>
{
    console.log("Listening to port 3000");
})