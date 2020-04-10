const request = require('request');
const geocode = (address,callback) =>{
     url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2Fua2FscDIyMDUiLCJhIjoiY2s3dnNybHpnMGZsZDNtbzJoOTR4cnUyNCJ9.ynkqYPpFLahtphPMTOScaQ&limit=1'
request({url : url,json : true},(error,response)=>{
    if(error)
    {
        callback('Unable to fetch the location',undefined);
    }
    else if(response.body.features.length===0)
    {
        callback('Location is not defined',undefined);
    }
    else
    {
        callback(undefined,{
            latitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            location: response.body.features[0].place_name}
        )
    }

})}
module.exports = geocode;