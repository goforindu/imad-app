console.log('Loaded!');
//counter code
var button=document.getElementById("counter");

button.onclick=function(){
    //create a request to a counter endpoint
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
    };
    //get the response and store in a variable
    
    //make a request
    request.open('GET',"http://goforindu.imad.hasura-app.io/counter",true);
    request.send(null);
};

//submit name
var nameInput=document.getElementById("name");
var name=nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    
    //make a request to server send name as data
     //create a request to a counter endpoint
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                  //get the reponse as alist of name submit and render it
                var names=request.responseText;
                names=JSON.parse(names);
                var list="";
                for(i=0;i<names.length;i++){
                    list+="<li>"+names[i]+"</li>";
                }
                 var ul=document.getElementById("name_list");
                 ul.innerHTML=list;
            }
        }
    };
    //get the response and store in a variable
    
    //make a request
    request.open('GET',"http://goforindu.imad.hasura-app.io/submit-name?name="+name,true);
    request.send(null);
 
   
}