const yargs =require('yargs');
const axios =require('axios');

const argv=yargs.
options({
  a:{
    demand: true,
    alise :'address',
    describe:'address to fetch weather for ',
    string :true
  }
})
.argv


var encodedAddress=encodeURIComponent(argv.address);
var geocodeurl=`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAn9H8WcxJmkWIsgvzRIMvg7axHOm3Qgls&address=${encodedAddress}`

  axios.get(geocodeurl).then((response)=>{
    console.log(response.data);
    var lat =response.data.results[0].geometry.location.lat;
      var lng =response.data.results[0].geometry.location.lng;

  var tempurl=`https://api.darksky.net/forecast/ed5cbf3d3d413d1a8b8e45440ee2cdd3/${lat},${lng}`

    axios.get(tempurl).then((response)=>{
      console.log(response.data.currently.temperature);
    });


  }).catch((e)=>{
    console.log(e);
  });
