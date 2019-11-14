const y = require('./test.js')
// Next one :
    // -> Detect when there is a comment => Must found the patern //
    // -> Get the value of an element => check what we found between balises
    // -> Return only one array of objects => html_string = html_obj
    // -> Optimisation 

class htmlString{
    constructor(html_string = String){
        this.tag_container = this.htmlSplitter(html_string);
        this.tagNameFounder();
    }
    // Cut every single pieces of the html doc 
    htmlSplitter(html){
        var index = 0, container = [];
        // Comment Detection 
        var detectionComment = new Promise((resolve,reject)=>{
            var start_com = [], last_one = 0
            while (html.indexOf('<!--',last_one) != -1) {
                var result = html.indexOf('<!--',last_one);
                start_com.push(result)
                last_one = result+4; 
            }
            for (let index = 0; index < start_com.length; index++) {
                const element = start_com[index];
                try {               
                    var to_replace = html.slice(element,html.indexOf('-->',element+4)+3);
                    html.replace(to_replace,'');     
                } catch (error) {
                    reject('===> There is a probleme in the comment founded promise !!');
                }
            }
            resolve();
        })
        // Script Detection
        var detectionScript = new Promise((resolve,reject)=>{
            var container = [], cont = 0;
            while(html.indexOf('<script>', cont) != -1) {
                var result = html.indexOf('<script>', cont);
                container.push(result);
                cont = result+9;
            }
            for (let index = 0; index < container.length; index++) {
                const element = container[index];
                if (html.indexOf('</script>',element+9) < container[index+1] || container[index+1] == undefined) {
                    try {
                        html.replace(element,html.indexOf('</script>',element+9)+9, '')          
                    } catch (error) {
                        reject('ERROR REPLACEMENT OFF THE CONTENT IN THE HTML STRING => DETECTION SCRIPT');                        
                    }
                }else{
                    reject('ERROR SRIPT DETECTOR ? containe[index+1] > </sript> index ?');
                }
            }
            resolve();
        })
        // Style Detection
        var detectionStyle = new Promise((resolve,reject)=>{
            var container = { open : [], close : []}, cont = 0;
            // Searching Closing Tag
            while(html.indexOf('</style>', cont) != -1) {
                var result = html.indexOf('</style>', cont);
                container.close.push({start:result,end:result+9});
                cont = result+9;
            }
            cont = 0;
            while (html.indexOf('<style',cont) != -1) {
                var start = html.indexOf('<style',cont)
                var over = html.indexOf('>',start+6)
                container.open.push({start:start,end:over})
                cont = over+2;
            }
            for (let index = 0; index < container.close.length; index++) {
                const element = container;
                var to_remove = html.slice(element.open[index].start,element.close[index].end);
                html.replace(to_remove,'')                
            }
            resolve({htm:html});
        })
        // Balise Detection 
        var detectionBalise = new Promise((resolve,reject)=>{
            var tags = { open : [], close : [] }, count = 0;
            try {
                // Number of opening bracket
                while (html.indexOf('<',count) != -1) {
                    var i = html.indexOf('<',count)
                    tags.open.push(i)
                    count = i+1
                }            
                count = 0;       
                // Number of closing bracket     
                while (html.indexOf('>',count) != -1) {
                    var i = html.indexOf('>',count)
                    tags.close.push(i)
                    count = i+1
                }         

            } catch (error) {
                console.log(error);                
            }
            // resolve({tag:tags});
        })
        // EXECUTION LIST ORDER
        detectionComment.then(
            detectionScript.then(
                detectionStyle.then(  
                    detectionBalise.then(
            ).catch((error)=> console.log(error))                  
            ).catch((error) => console.log(error)))
            ).catch((error)=> console.log(error))
    }
    tagNameFounder(tag){
        if (tag == undefined)  return 
        if (tag.slice(1,2) == '/') {
            // CLOSING TAG
            return tag;
        }else if (tag.slice(0,4) == '<!--' || tag.slice(0,3) == '-->'){
            if (tag.slice(0,4) == '<!--') {
                // console.log('commentaire OUVERTURE');
                return '<!--'
            }else{
                // console.log('commentaire FERMETURE');
                return '-->'
            }
        }else {
            // OPEN TAG
            // console.log('ok');
            
            if (tag.indexOf(' ') != -1) {
                return tag.slice(0,tag.indexOf(' '))+'>';
            }else{
                return tag;
            }
        }                 
    }
    tagNameClearFounder(tag){
        // EXEMPLE RETURN : <ta>
        if (tag.slice(1,2) != '/') {
            return tag
        }else{
            return '<'+tag.slice(2,tag.length)
        }
        
        // EXEMPLE RETURN : </ta> or <ta>
    }
    tagInfoFounder(tag,whatIsMyTag){
        return whatIsMyTag(tag)
    }
    tagDataFounder(tag){
        // dont search if this is a self closing tag and a closing tag
        if (tag.tag_info.self_closing == true || tag.tag_name.indexOf('/') != -1) {
            // RIEN
        }else{
            // search data
            var data = tag.tag_no_filter, space = data.indexOf(' '), container = [];
            if (space != -1) {
                space = data.split(' ');
                for (let index = 0; index < space.length; index++) {
                    const element = space[index];
                    if (element.indexOf('=') != -1) {
                        container.push({
                            param_name:element.slice(0,element.indexOf('=')),
                            param_data:element.slice(element.indexOf('=')+1,element.length)
                        })
                    }
                }                
            }
            return container;
        }
    }
    tagChildrenFounder(html_obj){
        var exit = false,compteur = 0;
        while (exit === false) {
            if (html_obj[compteur].tag_info.self_closing === true) {
                compteur++;                
            }else{
                var push_out = false,count = 1;
                while (push_out == false) {
                if (compteur > html_obj.length) {
                    push_out = true;
                }else{                                
                    if ('</'+html_obj[compteur].tag_name.split('<')[1] == html_obj[compteur+count].tag_name) {
                        html_obj[compteur].tag_info.close.position_start = html_obj[compteur+count].tag_info.open.position_start
                        html_obj[compteur].tag_info.close.position_end = html_obj[compteur+count].tag_info.open.position_end;
                        compteur = compteur+count+1;
                        push_out = true;
                    }else{
                        html_obj[compteur].children.push(html_obj[compteur+count])
                        compteur++;
                        // html_obj[compteur] = html_obj[compteur+count]
                        count++;
                    }
                }
                }
            }
            if (html_obj[compteur] == undefined) {
                exit = true;
            }
        }        
    }
    // Found watching tag_name and return it with some data about it 
    whatIsMyTag(tag = String){
        switch (tag) {
            // Structure
        case '<!DOCTYPE>':
            return {
                tag_name:'<!DOCTYPE>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<html>':
            return {
                tag_name:'<html>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<head>':
            return {
                tag_name:'<head>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<title>':
            return {
                tag_name:'<title>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<meta />':
            return {
                tag_name:'<meta />',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<body>':
            return {
                tag_name:'<body>',
                self_closing:false,
                type:'structure'
            }              
            break;
        
        // Sections
        
        case '<div>':
            return {
                tag_name:'<div>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<span>':
            return {
                tag_name:'<span>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<section>':
            return {
                tag_name:'<section>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<header>':
            return {
                tag_name:'<header>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<hgroup>':
            return {
                tag_name:'<hgroup>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<nav>':
            return {
                tag_name:'<nav>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<article>':
            return {
                tag_name:'<article>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<details>':
            return {
                tag_name:'<details>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<summary>':
            return {
                tag_name:'<summary>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<figure>':
            return {
                tag_name:'<figure>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<figcaption>':
            return {
                tag_name:'<figcaption>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<aside>':
            return {
                tag_name:'<aside>',
                self_closing:false,
                type:'section'
            }              
            break;
        case '<footer>':
            return {
                tag_name:'<footer>',
                self_closing:false,
                type:'section'
            }              
            break;
        
        // Références
        
        case '<base />':
            return {
                tag_name:'<base />',
                self_closing:true,
                type:'base'
            }              
        
            break;
        case '<link />':
            return {
                tag_name:'<link />',
                self_closing:true,
                type:'structure'
            }              
        
            break;
        case '<style>':
            return {
                tag_name:'<style>',
                self_closing:false,
                type:'structure'
            }              
        
            break;
        case '<script>':
            return {
                tag_name:'<script>',
                self_closing:false,
                type:'structure'
            }              
        
            break;
        case '<noscript>':
            return {
                tag_name:'<noscript>',
                self_closing:false,
                type:'structure'
            }              
        
            break;
        
        Cadres
        
        case '<frameset>':
            return {
                tag_name:'<frameset>',
                self_closing:true,
                type:'structure'
            }              
        
            break;
        case '<frame />':
            return {
                tag_name:'<frame />',
                self_closing:true,
                type:'structure'
            }              
        
            break;
        case '<noframes>':
            return {
                tag_name:'<noframes>',
                self_closing:true,
                type:'structure'
            }              
        
            break;
        case '<iframe>':
            return {
                tag_name:'<iframe>',
                self_closing:true,
                type:'structure'
            }              
        
            break;
        
        Listes
        
        case '<dir>':
            return {
                tag_name:'<dir>',
                self_closing:false,
                type:'structure'
            }              
        
            break;
        case '<ol>':
             
            return{ tag_name:'<ol>',
                self_closing:false,
                type:'structure'
            }              
        
            break;
        case '<ul>':
            return {tag_name:'<ul>',
                self_closing:false,
                type:'structure'
            }              
        
            break;
        case '<li>':
                return {tag_name:'<li>',
                    self_closing:false,
                    type:'structure'
                }              
        
            break;
        case '<dd>':
            
                return {tag_name:'<dd>',
                self_closing:false,
                type:'structure'
            }              
        
            break;
        case '<dl>':
            
                return {tag_name:'<dl>',
                self_closing:false,
                type:'structure'
            }              
        
            break;
        case '<dt>':
            
                return { tag_name:'<dt>',
                self_closing:false,
                type:'structure'
            }              
        
            break;
        
        
        
        // Liens
        
        case '<a>':
            
                return{tag_name:'<a>', 
                self_closing:false,
                type:'structure'
            }              
        
            break;
        case '<map>':
            return {
                tag_name:'<map>',
                self_closing:false,
                type:'structure'
            }              
        
            break;
        case '<area>':
            return {
                tag_name:'<area>',
                self_closing:false,
                type:'structure'
            }              
        
            break;
        
        Multimédia
        
        case '<img />':
            return {
                tag_name:'<img />',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<video>':
            return {
                tag_name:'<video>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<track>':
            return {
                tag_name:'<track>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<audio>':
            return {
                tag_name:'<audio>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<source>':
            return {
                tag_name:'<source>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<embed>':
            return {
                tag_name:'<embed>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<applet>':
            return {
                tag_name:'<applet>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<object>':
            return {
                tag_name:'<object>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<param />':
            return {
                tag_name:'<param />',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<canvas>':
            return {
                tag_name:'<canvas>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<svg>':
            return {
                tag_name:'<svg>',
                self_closing:true,
                type:'structure'
            }              
            break;
        
        // Tableaux
        
        case '<table>':
            return {
                tag_name:'<table>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<caption>':
            return {
                tag_name:'<caption>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<colgroup>':
            return {
                tag_name:'<colgroup>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<col />':
            return {
                tag_name:'<col />',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<thead>':
            return {
                tag_name:'<thead>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<tbody>':
            return {
                tag_name:'<tbody>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<tfoot>':
            return {
                tag_name:'<tfoot>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<tr>':
            
                return  {tag_name:'<tr>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<th>':
                return {tag_name:'<th>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<td>':
                return { tag_name:'<td>',
                self_closing:true,
                type:'structure'
            }              
            break;
        
        Formulaires
        
        case '<form>':
            return {
                tag_name:'<form>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<fieldset>':
            return {
                tag_name:'<fieldset>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<legend>':
            return {
                tag_name:'<legend>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<label>':
            return {
                tag_name:'<label>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<button>':
            return {
                tag_name:'<button>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<input />':
            return {
                tag_name:'<input />',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<textarea>':
            return {
                tag_name:'<textarea>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<select>':
            return {
                tag_name:'<select>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<optgroup>':
            return {
                tag_name:'<optgroup>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<option>':
            return {
                tag_name:'<option>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<isindex>':
            return {
                tag_name:'<isindex>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<menu>':
            return {
                tag_name:'<menu>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<command>':
            return {
                tag_name:'<command>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<datalist>':
            return {
                tag_name:'<datalist>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<output>':
            return {
                tag_name:'<output>',
                self_closing:false,
                type:'structure'
            }              
            break;
        case '<keygen>':
            return {
                tag_name:'<keygen>',
                self_closing:false,
                type:'structure'
            }              
            break;
        
        
        // Rendus visuels
        
        case '<center>':
            return {
                tag_name:'<center>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<hr />':
            return {
                tag_name:'<hr />',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<br />':
            return {
                tag_name:'<br />',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<wbr />':
            return {
                tag_name:'<wbr />',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<meter>':
            return {
                tag_name:'<meter>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<progress>':
            return {
                tag_name:'<progress>',
                self_closing:true,
                type:'structure'
            }              
            break;
        
        // Textes - mise en forme
        
        case '<b>':
            return {tag_name:'<b>', 
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<basefont />':
            return {
                tag_name:'<basefont />',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<bdi>':
            return {
                tag_name:'<bdi>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<bdo>':
            return {
                tag_name:'<bdo>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<big>':
            return {
                tag_name:'<big>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<font>':
            return {
                tag_name:'<font>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<i>':
            return {tag_name:'<i>', 
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<mark>':
            return {
                tag_name:'<mark>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<strike>':
            return {
                tag_name:'<strike>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<sub>':
            return {
                tag_name:'<sub>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<sup>':
            return {
                tag_name:'<sup>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<tt>': 
            return {tag_name:'<tt>', 
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<u>':
            return {tag_name:'<u>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<s>':
            
            return{tag_name:'<s>', 
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<small>':
            return {
                tag_name:'<small>',
                self_closing:true,
                type:'structure'
            }              
            break;
        
        {/* Textes - sémantique */}
        
        case '<abbr>':
            return {
                tag_name:'<abbr>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<acronym>':
            return {
                tag_name:'<acronym>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<address>':
            return {
                tag_name:'<address>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<blockquote>':
            return {
                tag_name:'<blockquote>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<cite>':
            return {
                tag_name:'<cite>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<code>':
            return {
                tag_name:'<code>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<del>':
            return {
                tag_name:'<del>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<dfn>':
            return {
                tag_name:'<dfn>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<em>':
            return {tag_name:'<em>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<h1>':
            return {tag_name:'<h1>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<h2>':
            return {tag_name:'<h2>',
                self_closing:true,
                type:'structure'
            }              
        break;
        case '<h3>':
            return {tag_name:'<h3>',
                self_closing:true,
                type:'structure'
            }              
        break;
        case '<h4>':
            return {tag_name:'<h4>',
                self_closing:true,
                type:'structure'
            }              
        break;
        case '<h5>':
            return {tag_name:'<h5>',
                self_closing:true,
                type:'structure'
            }              
        break;
        case '<h6>':
            
                return {tag_name:'<h6>',
                self_closing:true,
                type:'structure'
            }              
        break;
        case '<ins>':
            return {
                tag_name:'<ins>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<kbd>':
            return {
                tag_name:'<kbd>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<p>':                
                return { tag_name:'<p>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<pre>':
            return {
                tag_name:'<pre>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<q>':
            return {tag_name:'<q>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<rp>':
            return {tag_name:'<rp>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<rt>':
            return {tag_name:'<rt>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<ruby>':
            return {
                tag_name:'<ruby>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<samp>':
            return {
                tag_name:'<samp>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<strong>':
            return {
                tag_name:'<strong>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<time>':
            return {
                tag_name:'<time>',
                self_closing:true,
                type:'structure'
            }              
            break;
        case '<var>':
            return {
                tag_name:'<var>',
                self_closing:true,
                type:'structure'
            }              
            break;
        default:
                return {
                    tag_name:null,
                    self_closing:null,
                    type:'UNKNOW'
                }     
            break;
        }
    }
}
class Object{
    constructor(tag_name = String,tag_name_clear = String,tag_no_filter = String,tag_info = Object,tag_data = Array, children = Array){
        this.tag_name = tag_name // <= exemple 'div , img , a , ul ,table ...'
        this.tag_name_clear = tag_name_clear
        this.tag_no_filter = tag_no_filter
        this.tag_info = tag_info
        // {
        //     open : {
        //         position_start : null, // <= '<', exemple position_start = 10 of the opening tag 
        //         position_end : null // <= '>', exemple position_end = 13 of the opening tag 
        //     },
        //     close : {
        //         position_start : null, // <= '>', exemple position_start = 13 of the closing tag 
        //         position_end : null // <= '>', exemple position_end = 13 of the closing tag 
        //     },
        //     self_closing : true, // <= if the tag as only one balise or not
        // }
        this.tag_data = tag_data // <= src , href , name ... etc
        this.children = children // <= every children witch he got 
    }
}
module.exports = htmlString;


// Test String Html  
var a = new htmlString(y);
