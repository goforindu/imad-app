console.log('Loaded!');
//counter code
var button=document.getElementById("counter");
var counter=0;
button.onclick=function(){
    //make a request to a counter endpoint
    //get the response and store in a variable
    //render it in a correct span
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};