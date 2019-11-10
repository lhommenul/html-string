const express =require('express');
const app = express();
const siteUrl = "https://www.youtube.com/";
const axios = require("axios");
const htmlString = require('./index.js')

app.get('/',(req,res)=>{
    // Request the data
    axios.get(siteUrl)
    .then(function (re) {
        // handle success
        // console.log(re);
        
        var a = new htmlString(re.data)
        console.log(a.object);
        res.send(JSON.stringify(a.object))
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }) 
    // send data
})

app.listen(8080);