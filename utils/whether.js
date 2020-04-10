const request = require('request');
const whether = (latitude,longitude,callback) =>{
     url = 'https://api.darksky.net/forecast/e4e42eff209926dde4d22eafcce6f8da/'+latitude+','+longitude+'?units=si'
request({url : url,json : true},(error,response)=>{
    if(error)
    {
        callback('Unable to fetch the whether',undefined);
    }
    else if(response.body.error)
    {
        callback('Unable to fetch whether.Try different location',undefined);
    }
    else
    {
        callback(undefined,{
            summary :response.body.currently.summary,
            temp :Math.round(response.body.currently.temperature),
            max: Math.round(response.body.daily.data[0].temperatureHigh),
            min: Math.round(response.body.daily.data[0].temperatureLow),
        });
    }

})}
module.exports = whether;