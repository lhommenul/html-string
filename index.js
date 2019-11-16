const y = require('./test.js')
const fs = require('fs')
// Next one :
    // -> Detect when there is a comment => Must found the patern //
    // -> Get the value of an element => check what we found between balises
    // -> Return only one array of objects => html_string = html_obj
    // -> Optimisation 

class htmlString{
    constructor(html_string = String){
        this.html_copie = html_string;
        this.tag_container = this.htmlSplitter(html_string);
        this.data = {
            commentaire:null,
            script:null,
            style:null,
        }
    }
    // Cut every single pieces of the html doc 
    
    htmlSplitter(html){
        var index = 0, container = [];
        // Comment Detection 
        var detectionComment = new Promise((resolve,reject)=>{            
            var start_com = [], last_one = 0, comments_elements = []
            while (this.html_copie.indexOf('<!--',last_one) != -1) {
                var result = this.html_copie.indexOf('<!--',last_one);
                start_com.push(result)
                last_one = result+4; 
            }
            for (let index = 0; index < start_com.length; index++) {
                const element = start_com[index];
                try {               
                    var to_replace = this.html_copie.slice(element,this.html_copie.indexOf('-->',element+4)+3);
                    comments_elements.push({start:element,close:this.html_copie.indexOf('-->',element+4)+3,data:to_replace})
                    this.html_copie.replace(to_replace,'');     
                } catch (error) {
                    reject('===> There is a probleme in the comment founded promise !!');
                }
            }
            // Delete the content from the html document
            for (let index = 0; index < comments_elements.length; index++) {
                const element = comments_elements[index];
                var to_replace = this.html_copie.slice(element.start,element.close)                
                this.html_copie = this.html_copie.replace(to_replace,'')   
            }                     
            resolve({data:comments_elements});
        })
        // Script Detection
        var detectionScript = new Promise((resolve,reject)=>{
            var container = {open:[],close:[]}, cont = 0, script_elements = [];            
            while(this.html_copie.indexOf('</script>', cont) != -1) {
                var result = this.html_copie.indexOf('</script>', cont);
                container.close.push(result);
                cont = result+9;
            }
            cont = 0;
            for (let index = 0; index < container.close.length; index++) {
                const element = container.close[index];
                var script = this.html_copie.indexOf('<script',cont)
                if (script < element) {
                    var position = this.html_copie.indexOf('>',script+7)                    
                    container.open.push(script)
                    // replace 
                    script_elements.push({start:script,close:position+1,data:this.html_copie.slice(script,element+9)})
                    cont = position++;
                }else{
                    reject('ERROR script balise');
                }
            }
            // Delete the content from the html document
            for (let index = 0; index < script_elements.length; index++) {
                const element = script_elements[index];
                this.html_copie = this.html_copie.replace(element.data,'')   
            }            
            resolve({data:script_elements});
        })
        // Style Detection
        var detectionStyle = new Promise((resolve,reject)=>{
            var container = { open : [], close : []}, cont = 0,style_elements = [];
            // Searching Closing Tag
            while(this.html_copie.indexOf('</style>', cont) != -1) {
                var result = this.html_copie.indexOf('</style>', cont);
                container.close.push({start:result,end:result+9});
                cont = result+9;
            }
            cont = 0;
            while (this.html_copie.indexOf('<style',cont) != -1) {
                var start = this.html_copie.indexOf('<style',cont)
                var over = this.html_copie.indexOf('>',start+6)
                container.open.push({start:start,end:over})
                cont = over+2;
            }
            for (let index = 0; index < container.close.length; index++) {
                const element = container;
                var to_remove = this.html_copie.slice(element.open[index].start,element.close[index].end-1);
                style_elements.push({start:element.open[index].start,close:element.close[index].end,data:to_remove})                                
            }
            // console.log(style_elements);
            for (let index = 0; index < style_elements.length; index++) {
                const element = style_elements[index];
                var to_replace = this.html_copie.slice(element.start,element.close)                                
                this.html_copie = this.html_copie.replace(to_replace,'')   
            }                        
            resolve({data:style_elements});
        })
        // Balise Detection 
        var detectionBalise = new Promise((resolve,reject)=>{
            fs.writeFile('base.txt',this.html_copie,(err)=>{
                console.log(err);                
            })
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
            // Whats are beetween those tags ?
            var ok = true, u = 0,founded_tags = [];
            var l = 0
            while (ok != false) {
                var tag_temp = {
                    start : tags.open[u],
                    close : tags.close[u]+1,
                    data : [],
                    closing_tag : false,
                    self_closing : false,
                }
                
                var tag = this.html_copie.slice(tags.open[u],tags.close[u]+1)           
                // =======> Check if there is some data ?
                if (tag.indexOf('=') != -1) {
                    // search for some data
                    var i = 0;
                    while (tag.indexOf('=',i) != -1) {
                        var l = 0,value = 0;
                        while (tag.indexOf(' ',l) < tag.indexOf('=',i) && tag.indexOf(' ',l) != -1) {
                            value = tag.indexOf(' ',l);
                            l = value+1;
                        }
                        var data_inside = tag.slice(tag.indexOf('=',i)+1,tag.indexOf('=',i)+2);
                        if (data_inside == '"' || data_inside == "'") {
                            var end = '';
                            // console.log(data_inside);
                            
                            if (data_inside == '"') {
                                end = tag.indexOf('"',tag.indexOf('=',i)+2)
                            }else{
                                end = tag.indexOf("'",tag.indexOf('=',i)+2)
                            }
                            data_inside = tag.slice(tag.indexOf('=',i)+2,end);                            
                        }
                        tag_temp.data.push({
                            name : tag.slice(value,tag.indexOf('=',i)),
                            data : data_inside,
                        })          
                        i = tag.indexOf('=',i)+1;              
                    }
                }                                
                // =======> Is it a closing tag ?                
                if (this.html_copie.slice(tags.open[u]+1,tags.open[u]+2) == '/') tag_temp.closing_tag = true;
                // ========> Self Closing Tag ?                
                if (this.html_copie.slice(tags.close[u]-1,tags.close[u]) == '/') tag_temp.self_closing = true;;
                // Restart ?
                if (tags.open[u] == undefined) ok = false;
                u++;
                founded_tags.push(tag_temp);
            }
            var q = 0, couple = 0;
            console.log(founded_tags[20].self_closing);  
            while (founded_tags[q] != undefined) {
                q++;
            }
                            
            // Delete the content founded from the html document
            for (let index = 0; index < founded_tags.length; index++) {
                var tag = this.html_copie.slice(founded_tags[index].start,founded_tags[index].close)                           
                this.html_copie = this.html_copie.replace(tag,'')
            }            
            fs.writeFile('o.txt',JSON.stringify(founded_tags),()=>{})
            resolve({data:founded_tags});
        })
        // EXECUTION LIST ORDER
        detectionComment.then(
            (response)=>{
                this.data.commentaire = response.data;                   
                detectionScript.then((response)=>{
                    this.data.script = response;
                    detectionStyle.then((response)=>{
                        this.data.style = response;        
                        detectionBalise.then((response)=>{       
                            fs.writeFile('result.txt',this.html_copie,(err)=>{
                                // console.log(err);                                
                            })                    
                        }).catch((error)=>{
                            console.log(error);                             
                        })
                    }).catch((error)=>{
                        console.log(error);                        
                    })
                }).catch((error)=>{
                    console.log(error);                    
                }) 
            }).catch((error)=>{
                console.log('COMMENT DETECTION SECTION PROBLEM : '+ error);                
            })
    }
    getData(){
        return this.tag_container;
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
