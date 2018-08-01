const request=require('request');
const geocode =require('./geocode');
const temp =require('./temprature');

const yargs =require('yargs');

const argv =yargs.argv;

geocode.getgeocode(argv.address,(errorMessage,results)=>{
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(results.lat);
    console.log(results.lng);
  }

  temp.getTemp(results.lat,results.lng,(errorMessage,results)=>{
    if(errorMessage){
      console.log(errorMessage);
    }else{
      console.log(results.temp);

    }
  })


});


 //request({url:`https://api.darksky.net/forecast/ed5cbf3d3d413d1a8b8e45440ee2cdd3/${lat},${lng}`,json:true},(error,response,body)=>{

   //console.log(JSON.stringify(body.currently.temperature));
  //});
