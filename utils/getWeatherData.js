const axios =  require('axios');


function getWeatherData(lat,lon, callback){
    const url = `http://api.weatherstack.com/current?access_key=7c04a84168bc7ab9aa7bfdc5cd286370&query=${lat},${lon}`

    axios({
        method : 'get',
        url: url,
    }).then((data)=>{
        if(data.data.length !== 0){
            callback("Weather Data ", data.data);
        }else{
            callback("No Data Found", undefined)
        }
    }).catch((error)=>{
        callback(error.message, error);
    })
}


module.exports  = getWeatherData;


// const url = 'http://api.weatherstack.com/current?access_key=7c04a84168bc7ab9aa7bfdc5cd286370&query=India'
// const baseURL = ''
// axios({
//     method : 'get',
//     url : url,
// }).then(function(res){
//     console.log(res.data);
// }).catch((error)=>{
//     console.log(error.request,',-----------------------', error.message);
// }).finally(()=>{
//     //always execute
// })