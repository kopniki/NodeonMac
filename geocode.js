const request= require('request');

module.exports.getgeocode =(address, callback)=>{
  var encodedAddress=encodeURIComponent(address);


request({url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAn9H8WcxJmkWIsgvzRIMvg7axHOm3Qgls&address=${encodedAddress}`,
    json:true},(error,response,body)=>{
      if(error){
        callback('wrong url');
      }else if(response.statusCode === 400){
        callback('site not reachable');
      }else if(response.statusCode === 200)
      {
        callback(undefined, {
          lat :body.results[0].geometry.location.lat,
          lng :body.results[0].geometry.location.lng
        });
      }

});

};
