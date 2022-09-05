var moshi = document.querySelector("#moshi");
var moshiI = document.querySelector("#moshi>i");
var box = document.querySelector(".box");
var boxs = document.querySelector(".box .container");
var clicks = document.querySelector(".clicks");
var clients  = document.querySelector(".clients ");
var pds =true;
box.onclick = function () {
    boxs.classList.toggle("click");
    if(pds){
        clicks.style.display="block";
        clicks.style.height="250px";
        boxs.style.paddingLeft="23px"
        
        pds=false;
    }else{
        boxs.style.paddingLeft="15px"
        clicks.style.height="0px";
        pds=true;
    }
   

}
var pd =true;
moshi.onclick=function(){
    if(pd){
        moshiI.className="fa  fa-2x fa-sun-o";
        document.body.style.backgroundColor="black"
        clients.style.backgroundColor="black"
        document.body.style.color="white"
        pd=false;
    }else{
        moshiI.className="fa  fa-2x fa-moon-o";
        document.body.style.backgroundColor="white";
        clients.style.backgroundColor="#FAFAFB"
        document.body.style.color="black";
        pd=true;
    }
    
}