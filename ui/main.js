console.log('Loaded!');
//counter code
var counter=0;
var button=document.getElementById("counter");
button.onClick=function(){
    //make a request to a counter endpoint
    //get the response and store in a variable
    //render it in a correct span
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHtml=counter.toString();
};