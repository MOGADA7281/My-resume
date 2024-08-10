function sal(contentid){

var content = document.getElementById(contentid);
if(content.className === "hidden"){

content.className="visible";
}

else{
content.className="hidden";

}

}