
// Next one :
    // -> Detect when there is a comment => Must found the patern //
    // -> Get the value of an element => check what we found between balises
    // -> Return only one array of objects => html_string = html_obj
    // -> Optimisation 

class htmlString{
    constructor(string_html = String){
        this.string_html = string_html;
        this.html_obj = this.start(string_html);
        this.object = this.generateChildrens();
    }
    // Generate the obj width all the tags inside
    start(string_html = String) {
        var done = false, from = null,obj = [];
        while (done == false) tagFinder(string_html);
        function tagFinder(string_html) {
            if (from == null) {
                // Start of the tag        
                var first = string_html.indexOf('<'), last = string_html.indexOf('>',first);
                // End of the tag        
                obj.push({
                    start:first,
                    end:last,
                    tag_name:tagType(first,last,string_html),
                    tag:string_html.slice(first,last+1),
                    self_closing:selfClosing(tagType(first,last,string_html).tag),
                    childrens:[]
                })
                from = last;            
            }else{
                // Start of the tag
                var first = string_html.indexOf('<',from), last = string_html.indexOf('>',first)
                if (first == -1){ done = true}
                else{
                    obj.push({
                        start:first,
                        end:last,
                        tag_name:tagType(first,last,string_html),
                        tag:string_html.slice(first,last+1),
                        self_closing:selfClosing(tagType(first,last,string_html).tag),
                        childrens:[]
                    })
                    from = last;
                }
                // End of the tag
            }
            // List of every selfclosing tags
            function selfClosing(params) {
                // -> if selfclosing ==> return true;
                // -> else ==> return false;
                switch (params) {
                    case 'DOCTYPE':
                        return true;
                    case 'area':                        
                        return true;
                    case 'base':                    
                        return true;
                    case 'br':                    
                        return true;
                    case 'col':                                            
                        return true;
                    case 'command':                    
                        return true;
                    case 'embed':                    
                        return true;
                    case 'area':                    
                        return true;     
                    case 'hr':
                        return true;
                    case 'img':    
                        return true;
                    case 'input':    
                        return true;
                    case 'keygen':    
                        return true;
                    case 'link':    
                        return true;
                    case 'meta':    
                        return true;
                    case 'param':    
                        return true;
                    case 'source':    
                        return true;
                    case 'track':    
                        return true;
                    case 'wbr':    
                        return true;                                                                                                                                                           
                    default:
                        return false;
                }
            }
            // !! A modifier => Ajouter la detection des commentaires et des values presents dans les tags
            // => Verifier que les resultats de sortie correspondes bien avec les resultats attendus
            // !! Doit etre effectuer avant la creation d'une liste unique pour html_string et html_object

            // Pour l'instant detection simple des tag avec !/ et sans rien 
            // Ameliorer pour pouvoir trouver 
            function tagType(index,last,string_html) {
                var compteur = index;                
                if (string_html.slice(compteur+1,compteur+2) != '/') {                    
                    if (string_html.slice(compteur+1,compteur+2) == '!') {                        
                        return { 
                            tag:string_html.slice(index+2,last).split(" ")[0],
                            open_tag:false,                        
                        }                        
                    }else{                        
                        return {
                            tag:string_html.slice(index+1,last).split(" ")[0],
                            open_tag:true,                            
                        }
                    }
                }else{
                    return {
                        tag:string_html.slice(index+2,last).split(" ")[0],
                        open_tag:false,                            
                    }
                    
                }
            }
        }
        // !! A modifier => la recherche n'est pas complete
            // -> Liste seulement 5 tags
        for (let index = 0; index < obj.length; index++) {
            const element = obj[index].tag;
            var src = element.indexOf('src='), href = element.indexOf('href='),name = element.indexOf('name='),id = element.indexOf('id='),class_name =  element.indexOf('class=');
            if (class_name != -1) {
                // console.log(obj[index].tag);                     
                var starter = obj[index].tag.indexOf('"',class_name), ending = obj[index].tag.indexOf('"',starter+1);
                if (starter == -1) {
                    starter = obj[index].tag.indexOf("'",class_name)
                    ending = obj[index].tag.indexOf("'",starter+1);
                }            
                var result = obj[index].tag.slice(starter+1,ending);
                obj[index].class_name = result.split(" ");
                        
            }
            if (id != -1) {
                var starter = obj[index].tag.indexOf('"',id), ending = obj[index].tag.indexOf('"',starter+1);
                if (starter == -1) {
                    starter = obj[index].tag.indexOf("'",id)
                    ending = obj[index].tag.indexOf("'",starter+1);
                }            
                var result = obj[index].tag.slice(starter+1,ending);   
                obj[index].id = result.split(" ");   
            }
            if (name != -1) {
                var starter = obj[index].tag.indexOf('"',name), ending = obj[index].tag.indexOf('"',starter+1);
                if (starter == -1) {
                    starter = obj[index].tag.indexOf("'",name)
                    ending = obj[index].tag.indexOf("'",starter+1);
                }            
                var result = obj[index].tag.slice(starter+1,ending);
                name = result.split(" ");                 
                obj[index].name = result.split(" ");
            }    
            if (src != -1) {
                var starter = obj[index].tag.indexOf('"',src), ending = obj[index].tag.indexOf('"',starter+1);
                if (starter == -1) {
                    starter = obj[index].tag.indexOf("'",src)
                    ending = obj[index].tag.indexOf("'",starter+1);
                }            
                var result = obj[index].tag.slice(starter+1,ending);
                src = result.split(" ");                                  
                obj[index].src = result.split(" ");
            }
            if (href != -1) {
                var starter = obj[index].tag.indexOf('"',href), ending = obj[index].tag.indexOf('"',starter+1);
                if (starter == -1) {
                    starter = obj[index].tag.indexOf("'",href)
                    ending = obj[index].tag.indexOf("'",starter+1);
                }            
                var result = obj[index].tag.slice(starter+1,ending);
                obj[index].href = result.split(" ");
            }               
        }
        return obj; 
    }   
    // !! Prevoir des modifications
    // => Generate childrens with the list html_string
        // -> to modify 
    generateChildrens(){
        var container = [],compteur = 0;
        for (let index = 0; index < this.html_obj.length; index++) {
            const element = this.html_obj[index];
            if (container[compteur] == undefined) {                
                container[compteur] = element;
            }else{
                // Si pas undefined alors il y a deja un element donc
                // console.log(`start = ${this.html_obj[index].tag}`);
                // console.log(element.tag);
                
                if (container[compteur].tag == element.tag) {
                    container[compteur].childrens.push(element)
                    compteur++;
                    container[compteur] = element;          
                    // console.log('add layer');
                              
                }else if(`</${container[compteur].tag}>` == element.tag){
                    // console.log('closing');
                    compteur++;
                    this.html_obj[index] = '';
                }else{                    
                    // -> donc soit j'ajoute l'element car self_closing = true
                    if (element.self_closing == true) {
                        // console.log('push element into the container');
                        container[compteur].childrens.push(element)
                    }
                        // -> ou j'ajoute l'element car self_closing = false et ajouter compteur ++ et l'ajouter a container                 
                    else if (element.self_closing == false){
                        // console.log('push element into the container and add a layer');
                        if (element.tag_name.open_tag == false) {
                            container[compteur].closing_tag = element;
                            // compteur++;
                        }else{
                            container[compteur].childrens.push(element)
                            compteur++;
                            container[compteur] = element;
                        }
                    }
                }
            }
        }
        return container;
    }
    getHtmlObj(){
        return this.html_obj;
    }
    getObject(){
        return this.object;
    }
    // Return every object matching
    foundClass(classes = String){
        var classe = [], data = this.html_obj        
        check(classes)
        function check(params) {
            var size = params.split(' ');
            for (let index = 0; index < size.length; index++) {
                const element = size[index];
                classe.push(element)
            }
        }
        function found() {        
            var result = [];
            for (let index = 0; index < classe.length; index++) {
                const element = classe[index];
                for (let compteur = 0; compteur < data.length; compteur++) {
                    const elem = data[compteur].class_name;
                    if (element == elem) {
                        result.push(data[compteur])
                    }
                }
            }
            return result;
        }
        return found();
    }
    // Return every object matching
    foundId(id = String){
        var ids = [], data = this.html_obj        
        check(id)
        function check(params) {
            var size = params.split(' ');
            for (let index = 0; index < size.length; index++) {
                const element = size[index];
                ids.push(element)
            }
        }
        function found() {        
            var result = [];
            for (let index = 0; index < ids.length; index++) {
                const element = ids[index];
                for (let compteur = 0; compteur < data.length; compteur++) {
                    const elem = data[compteur].id;
                    if (element == elem) {
                        result.push(data[compteur])
                    }
                }
            }
            return result;
        }
        return found();
    }
    // Return every object matching
    foundTag(tag = String){
        var split = tag.split(' '), container = {}
        for (let index = 0; index < split.length; index++) {
            const red = split[index];
            var count = 0, cot = [];
            for (let compteur = 0; compteur < this.html_obj.length; compteur++) {
                const element = this.html_obj[compteur];                
                if (red == element.tag_name.tag) {
                    cot.push(element);
                    count++;
                }
            }
            container.result = {
                searched:red,
                data:cot
            };
        }
        return container;
    }
}  
class Object{
    constructor(){
        this.tag_name = null // <= exemple 'div , img , a , ul ,table ...'
        this.tag_info = {
            open : {
                position_start : null, // <= '<', exemple position_start = 10 of the opening tag 
                position_end : null // <= '>', exemple position_end = 13 of the opening tag 
            },
            close : {
                position_start : 20, // <= '>', exemple position_start = 13 of the closing tag 
                position_end : 23 // <= '>', exemple position_end = 13 of the closing tag 
            },
            self_closing : false, // <= if the tag as only one balise or not

        }
        this.tag_data = [] // <= src , href , name ... etc
        this.children = [] // <= every children witch he got 
    }
}
module.exports = htmlString;


// Test String Html  
var a = new htmlString('<html>data html<div>data div</div></html>')
console.log(a);
