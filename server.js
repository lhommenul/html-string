const express =require('express');
const app = express();
const fs = require('fs');
const siteUrl = "https://www.youtube.com/";
const axios = require("axios");
const htmlString = require('./index.js')

app.get('/',(req,res)=>{
    // Request the data
    axios.get(siteUrl)
    .then(function (re) {
        var a = new htmlString(re.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }) 
    // send data
})

app.listen(8080);