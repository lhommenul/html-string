const express =require('express');
const app = express();
const siteUrl = "http://www.pafteam.com/";
const axios = require("axios");
const htmlString = require('./index.js')

app.get('/',(req,res)=>{
    // Request the data
    axios.get(siteUrl)
    .then(function (re) {
        // handle success
        var a = new htmlString(re.data)
        console.log(a);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }) 
    // send data
})

app.listen(3000);