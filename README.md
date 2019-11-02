# html-string
Pass an html document as a string and then use function to get class, id, text ... informations about the html tag wanted
<== For Example: 
var html_string = `<html> ... </html>` // Your htmldocument as a String

var html = new htmlString(html_string); <= Create an instance and pass the html_string as a parameter
// to see the html object you can use .getHtmlObj()
html.getHtmlObj() // it will return and array of objects with all tags and information about it
  -> exemple : [
      { start: 7117,
    end: 7121,
    tag_name: { tag: 'li', open_tag: false },
    tag: '</li>' },
  { start: 7159,
    end: 7263,
    tag_name: { tag: 'li', open_tag: true },
    tag:
     '<li id="menu-item-151" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-151">',
    class_name:
     [ 'menu-item',
       'menu-item-type-taxonomy',
       'menu-item-object-category',
       'menu-item-151' ],
    id: [ 'menu-item-151' ] },
  { start: 7264,
    end: 7323,
    tag_name: { tag: 'a', open_tag: true },
    tag:
     '<a href="https://www.filmstreaming.plus/films/comedie.html">',
    href: [ 'https://www.filmstreaming.plus/films/comedie.html' ] },
  { start: 7331,
    end: 7334,
    tag_name: { tag: 'a', open_tag: false },
    tag: '</a>' },
  ]
// to search a particular Class or ID you can use the methods .foundClass() or .foundId()
// ===> FOUND A PARTICULAR TAG WITH AN CLASS
var class_searched = 'name_of_the_class an_other';
html.foundClass(class_searched)
  -> will return an array of object
// ===> FOUND A PARTICULAR TAG WITH AN ID
var id_searched = 'id_searched an_other';
html.foundId(class_searched)
  -> will return an array of object
