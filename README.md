# html-string
You have an html document and you dont know how to transform it to an object to get specific data ?
================ CHECK THIS OUT ================
const html_scraping = require('html-scraping');
--> then every time you want to convert an html string to an object :
var result = new html_scraping('<html>'Your HTML document'</html>')
--> you can use some methods to get specific data :

* You can log the result to see you html_string splitted in pieces  

1. Get elements by there className :
  - result.foundClass('classname classname classname classname'); <=> return an array of elements witch match

2. Get elements by there Id :
  - result.foundId('id id id id'); <=> return an array of elements witch match

3. Get elements by there tagName :
  - result.foundTag('tag tag tag tag'); <=> return an array of elements witch match  
