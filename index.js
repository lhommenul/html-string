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
            tag:null,
        }
    }
    // Cut every single pieces of the html doc 
    
    htmlSplitter(html){
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
            var tags = { position_open : [], position_close : [], position_back_close : [], position_self_closing : [], position_closing_tag : [] }, count = 0;
            try {
                // Number of opening bracket
                while (this.html_copie.indexOf('<',count) != -1) {
                    var i = this.html_copie.indexOf('<',count)
                    tags.position_open.push(i)
                    count = i+1
                }            
                console.log(`OPENING TAGS < : ${tags.position_open.length}`);                                                
                count = 0;       
                // Number of closing bracket     
                while (this.html_copie.indexOf('>',count) != -1) {
                    var i = this.html_copie.indexOf('>',count)
                    tags.position_close.push(i)
                    count = i+1
                }   
                console.log(`CLOSING TAGS > : ${tags.position_close.length}`);                                                
                count = 0;
                // Number of back slash 
                while (this.html_copie.indexOf('/',count) != -1) {
                    var i = this.html_copie.indexOf('/',count)
                    tags.position_back_close.push(i)
                    count = i+1
                }   
                console.log(`SELF CLOSING TAGS / : ${tags.position_back_close.length}`);                                                
                count = 0;
                // Number of self_closing tags
                while (this.html_copie.indexOf('/>',count) != -1) {
                    var i = this.html_copie.indexOf('/>',count)
                    tags.position_self_closing.push(i)
                    count = i+1
                }     
                count = 0;
                console.log(`SELF CLOSING TAGS /> : ${tags.position_self_closing.length}`);                                                
                // Number of closing tags
                while (this.html_copie.indexOf('</',count) != -1) {
                    var i = this.html_copie.indexOf('</',count)
                    tags.position_closing_tag.push(i)
                    count = i+2
                }            
                console.log(`CLOSING TAGS </ : ${tags.position_closing_tag.length}`);                                                
            } catch (error) {
                console.log(error);                
            }                
            // Next
            var tag = {closing_tags:[],opening_tags:[],self_closing:[]}
            var name = []
            try {
                // CLOSING TAGS => into  tag.closing_tags
                for (let index = 0; index < tags.position_closing_tag.length; index++) {
                    const open = tags.position_closing_tag[index];
                    var close = this.html_copie.indexOf('>',open+2), sliced = this.html_copie.slice(open,close+1);
                    tag.closing_tags.push({
                        start:open,
                        end:close+1,
                        name:this.html_copie.slice(open+2,close),
                        data:sliced
                    })
                    this.html_copie.replace(sliced,'')                    
                }  
                // console.log(tag.closing_tags.length);
                
                // MAKE COUPLES OF CLOSING AND OPENING TAGS 
                    // data generated => above => tag = closing_tags, opening_tags, self_closing 
                var cont = 0;
                for (let index = 0; index < tags.position_open.length; index++) {
                    const open = tags.position_open[index];
                    var close = tags.position_close[cont];
                    if (this.html_copie.slice(open+1,open+2) == '/') {
                        cont++;
                        // console.log(cont);
                    }else{
                        // how many cut do i have ?
                            // html.split('')
                        while (tags.position_close[cont] < open) {
                            cont++;
                            close = tags.position_close[cont];
                            if (close == undefined) {
                                break;
                            }
                        }                          
                        // Check how many splits there is beetween < and >
                        function foundName(html_copie) {
                            var y = html_copie.slice(open,close+1), split = y.split(' ');
                            if (split.length >= 2) {                           
                                return html_copie.slice(open+1,open+split[0].length);
                            }else{
                                return html_copie.slice(open+1,close-1);
                            }     
                        } 
                        
                        if (this.html_copie.slice(close-1,close) == '/') {
                            // SELF CLOSING TAG
                            tag.self_closing.push({
                                start:open,
                                end:close,
                                name:foundName(this.html_copie),
                                data:this.html_copie.slice(open,close+1),
                            })                       
                            name.push(foundName(this.html_copie))
                        }else{
                            // OPENING TAG                            
                            tag.opening_tags.push({
                                start:open,
                                end:close,
                                name:foundName(this.html_copie),
                                data:this.html_copie.slice(open,close+1),
                            })
                            name.push(foundName(this.html_copie))
                        }
                    }                    
                }
                console.log(`Number of opening tags < > = ${tag.opening_tags.length}`);
                console.log(`Number of closing tags </ > = ${tag.closing_tags.length}`);
                console.log(`Number of self closing tags < /> = ${tag.self_closing.length}`);
                console.log(`TOTAL = ${tag.opening_tags.length+tag.closing_tags.length+tag.self_closing.length}`);
                // DELETE ALL COUPLES THATS SEEMS WRONG
                var position = {closing:0,self_closing:0}, to_close = null, object = [];
                for (let index = 0; index < tag.opening_tags.length; index++) {
                    // < >
                    const element = tag.opening_tags[index];
                    // < />
                    const self_closing = tag.self_closing[position.self_closing]
                    // </ >
                    const closing = tag.closing_tags[position.closing];
                    if (element.start == self_closing.start){
                        // this is a self_closing tag
                        position.self_closing++;
                    }else if (element.start == closing.start){
                        // this is a closing tag                        
                        position.closing++;
                    }else{
                        // this is an opening tag
                        to_close = element.name;
                    }
                }
            } catch (error) {
                console.log(error);                
            }
            fs.writeFile('re.txt',JSON.stringify(name),(err)=>{
                console.log(err);
                
            })
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
                            this.data.tag = response.data;
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
module.exports = htmlString;


// Test String Html  
var a = new htmlString(y);
