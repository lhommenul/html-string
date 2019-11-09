const y = require('./test.js')
// Next one :
    // -> Detect when there is a comment => Must found the patern //
    // -> Get the value of an element => check what we found between balises
    // -> Return only one array of objects => html_string = html_obj
    // -> Optimisation 

class htmlString{
    constructor(html_string = String){
        this.container = [];
        this.string_html = this.scanStringHtml(html_string,this.container);  
        this.childrenFounder()              
    }
    scanStringHtml(html,container){
        // Fill the global variable 'container' width every tag detected 
        // => tag : all the information from '<' to '>'
        // => start index : position where we found the '<'
        // => endf index : position where we found the '>'
        var compteur = 0;
        callMe()
        function callMe() {
            var start_index = html.indexOf('<',compteur);
            if (start_index != -1) {
                var end_index = html.indexOf('>',start_index);
                compteur = end_index;
                // tag: originalTagFounder(html.slice(start_index,end_index+1)),
                // start_index : start_index,
                // end_index : end_index
                var a = new Object;
                var tag = originalTagFounder(html.slice(start_index,end_index+1)).param;                

                if (tag.tag_info == undefined) {
                    tag.tag_info = null;
                }
                
                a.tag_name = tag.default_tag
                a.tag_info.open.position_start = start_index;
                a.tag_info.open.position_end = start_index;
                container.push( a )
                callMe()
            }else{
                console.log('1. => string_html as been created ');                
            }
        }
        function originalTagFounder(integralTag = String){
            var tag_index = 0,data = {};
            foundData();
            function foundData(){
                // VARIABLES => space , splice 
                var splice = integralTag.indexOf('=',tag_index),space = integralTag.indexOf(' ');
                if (splice != -1) {
                    tag_index = splice+1;
                    // VARIABLES => start , end , param_name
                    var start = integralTag.indexOf('"',splice), end = '',param_name = html.slice(space+1,splice-1);
                    if (start == -1) {
                        start = integralTag.indexOf("'",splice)
                        if (start != -1) {
                            end = integralTag.indexOf("'",start+1)
                        }
                    }else{
                        end = integralTag.indexOf("'",start+1)
                    }
                    // Adding informations inside the object 'data'
                    data.param = {
                        name : param_name,
                        data : integralTag.slice(start,end)
                    }         
                    space = end+1;           
                    // restart
                    foundData()
                }else{
                    // When there is no more params inside the tag 
                    var i = foundIt();
                    data.param = {
                        default_tag : i.default,
                        tag_info : i.info
                    }
                }
            }
            function foundIt() {
                var start = integralTag.indexOf('<'), end = integralTag.indexOf('>',integralTag.split().length), original = ''
                var data = integralTag.slice(start,end+1);
                var data_splitted = data.split(' ')[0];
                if(data_splitted.indexOf('<') != -1){
                    if (data_splitted.indexOf('>') != -1) {
                        original = data_splitted;
                        if (data_splitted.indexOf('/') != -1) {
                            var split = data_splitted.split('/');
                            data_splitted = split[0]+split[1];                            
                        }else{
                            // oktag
                        }     
                    }else{
                        data_splitted = data_splitted+'>';
                        original = data_splitted;                        
                    }                    
                }else{
                    console.log('erreur');
                    
                }
                return {info: whatIsMyTag(data_splitted), default : original};
            }            
            return data;
        }    
        function whatIsMyTag(tag = String){
            switch (tag) {
                // Structure
                case '<!--...-->':
                return {
                    tag_name:'<!--...-->',
                    self_closing:true,
                    type:'structure'
                }                  
                break;
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
                return
                tag_name:'<i>', {
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
                return 
                tag_name:'<tt>',{
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
                return
                tag_name:'<s>', {
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
                return 
                tag_name:'<em>',{
                    self_closing:true,
                    type:'structure'
                }              
                break;
            case '<h1>':
                return 
                tag_name:'<h1>',{
                    self_closing:true,
                    type:'structure'
                }              
                break;
            case '<h2>':
                return 
                tag_name:'<h2>',{
                    self_closing:true,
                    type:'structure'
                }              
            break;
            case '<h3>':
                return 
                tag_name:'<h3>',{
                    self_closing:true,
                    type:'structure'
                }              
            break;
            case '<h4>':
                return 
                tag_name:'<h4>',{
                    self_closing:true,
                    type:'structure'
                }              
            break;
            case '<h5>':
                return 
                tag_name:'<h5>',{
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
        return container;
    }
    // Found if the tag as childrens
    childrenFounder(){
        var string_html = this.string_html, container = [], compteur = 0;
        // Every single 
        for (let index = 0; index < string_html.length; index++) {
            const element = string_html[index];
            console.log(element);
            
            var self_closing = element.tag_info.self_closing;
            var tag_name = element.tag_name;
            console.log(element);                           
            // ADD the tag to the list container
            if (container[compteur] != undefined) {
                console.log(container[compteur]);
                // console.log(element.tag.param.tag_info);
                if (container[compteur].tag_name_clear == '</'+container[compteur].tag_name_clear+'>') {
                    
                } else {
                    
                }
                container[compteur].children.push(element)
            } else {
                container.push(element);                
            }
        }
        function haveChildren(params) {
            
        }
        function dontHaveChildren(params) {
            
        }
    }
}
class Object{
    constructor(){
        this.tag_name = null // <= exemple 'div , img , a , ul ,table ...'
        this.tag_name_clear = null
        this.tag_info = {
            open : {
                position_start : null, // <= '<', exemple position_start = 10 of the opening tag 
                position_end : null // <= '>', exemple position_end = 13 of the opening tag 
            },
            close : {
                position_start : null, // <= '>', exemple position_start = 13 of the closing tag 
                position_end : null // <= '>', exemple position_end = 13 of the closing tag 
            },
            self_closing : false, // <= if the tag as only one balise or not
        }
        this.tag_data = [] // <= src , href , name ... etc
        this.children = [] // <= every children witch he got 
    }
}
module.exports = htmlString;


// Test String Html  
var a = new htmlString(y)

