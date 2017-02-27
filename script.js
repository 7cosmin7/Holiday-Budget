/*display image and hide */

var divUnu = setInterval(function(){ setColor_Prim() }, 4000);


function setColor_Prim(){
    document.getElementById("divunu-doi").classList.add("one");
    document.getElementById("divdoi-doi").classList.add("one");
    document.getElementById("divtrei-doi").classList.add("one");
    document.getElementById("divpatru-doi").classList.add("one");
    document.getElementById("divunu-doi-right").classList.add("one");
    document.getElementById("divdoi-doi-right").classList.add("one");
    document.getElementById("divtrei-doi-right").classList.add("one");
    document.getElementById("divpatru-doi-right").classList.add("one");
 }

var divUnu1 = setInterval(function(){ setColor_Prim2() }, 8000);


function setColor_Prim2(){
    document.getElementById("divunu-doi").classList.remove("one");
    document.getElementById("divunu-doi").classList.add("one1");
    document.getElementById("divdoi-doi").classList.remove("one");
    document.getElementById("divdoi-doi").classList.add("one1");
    document.getElementById("divtrei-doi").classList.remove("one");
    document.getElementById("divtrei-doi").classList.add("one1");
    document.getElementById("divpatru-doi").classList.remove("one");
    document.getElementById("divpatru-doi").classList.add("one1");
    document.getElementById("divunu-doi-right").classList.remove("one");
    document.getElementById("divunu-doi-right").classList.add("one1");
    document.getElementById("divdoi-doi-right").classList.remove("one");
    document.getElementById("divdoi-doi-right").classList.add("one1");
    document.getElementById("divtrei-doi-right").classList.remove("one");
    document.getElementById("divtrei-doi-right").classList.add("one1");
    document.getElementById("divpatru-doi-right").classList.remove("one");
    document.getElementById("divpatru-doi-right").classList.add("one1");
}
    
/*function myFunction() {
    var node = document.createElement("div");
    var anchor=document.createElement("a");
    var text=document.createTextNode("X");
       
    node.classList.add("divul"); 
    node.appendChild(anchor);
    anchor.appendChild(text);    
    anchor.classList.add("right");
    document.getElementsByClassName("text")[0].appendChild(node);
   
   }*/
/*--------budget calculation --------------*/

function destination_sl(){
   if(A.selected === true){
   document.getElementById("result1").innerHTML=100 +"£";}
   else if(B.selected === true){
   document.getElementById("result1").innerHTML=60 +"£";}
   else if(C.selected === true){
    document.getElementById("result1").innerHTML=70+"£";}
    else if(D.selected === true){
    document.getElementById("result1").innerHTML=50+"£";}
     else if(E.selected === true){
    document.getElementById("result1").innerHTML=120+"£";}
     else if(F.selected === true){
    document.getElementById("result1").innerHTML=40+"£";}
     else if(G.selected === true){
    document.getElementById("result1").innerHTML=90+"£";}
     else if(H.selected === true){
    document.getElementById("result1").innerHTML=90+"£";}
	   else{document.getElementById("result1").innerHTML=0;}
   }


function show_val(){
	var a= document.getElementById("first");
	var b= document.getElementById("second");
    var c= document.getElementById("third");

	

	
	var total=0;
	if(a.checked===true){
	 document.getElementById("result").innerHTML=total +500 +"£";}
     else if(b.checked===true){
     document.getElementById("result").innerHTML=total +400  +"£";}
    else if(c.checked===true){
     document.getElementById("result").innerHTML=total +300 +"£";}
   else{document.getElementById("result").innerHTML=total;}
};


function transfer(){
	var sum="";
	var c=document.getElementById('bus');
	var d=document.getElementById('train');
	var e=document.getElementById('taxi');
	if(c.checked===true){
		document.getElementById('result2').innerHTML=c.value +"£";
	}
	else if(d.checked===true){
		document.getElementById('result2').innerHTML=d.value+"£";
}
    	else if(e.checked===true){
		document.getElementById('result2').innerHTML=e.value+"£";
}
};
    function make_sum(){
var z= document.getElementById('result1').innerHTML;
var y= document.getElementById('result').innerHTML;
var x= document.getElementById('result2').innerHTML;
var misc=document.getElementById('miscellaneous').value;
var meals=document.getElementById('meals').value; 
        document.getElementById("cost").innerHTML=parseInt(meals)+parseInt(z)+parseInt(y)+parseInt(x)+parseInt(misc);
        
        if(isNaN(document.getElementById("cost").innerHTML)){
           document.getElementById("cost").innerHTML="You have to fill up all the fields!!!";
        }
    };



   