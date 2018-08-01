const request=require('request');

var getTemp =(lat,lng,callback)=>{

request({url:`https://api.darksky.net/forecast/ed5cbf3d3d413d1a8b8e45440ee2cdd3/${lat},${lng}`,json:true},(error,response,body)=>{
  if(error){
    callback('wrong url');
  }else if(response.statusCode === 400){
    callback('site not reachable');
  }else if(response.statusCode === 200)
  {
  callback(undefined,{ temp:body.currently.temperature});
  }

 });

};


module.exports={
  getTemp
};
