const axios = require("axios")

function geodata(location, callback){
    const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiYWF5dXNoY2hhdWhhbjE3IiwiYSI6ImNsa3M0eTV1ZTFqMzIzbWxrOWh2ajMzZWwifQ.xAHbfaxQg8lQ-sJ5ADjQMg&limit=1`

    axios({
        method: 'get',
        url : url,
    }).then((res)=>{
        callback("gotdata",res.data.features[0].center);
    }).catch((error)=>{
        callback(undefined,error);
    })
}

module.exports = geodata;