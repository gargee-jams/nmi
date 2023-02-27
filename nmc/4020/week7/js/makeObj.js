let classObject = {"Ocean Fantasy": "ocean",
"Space Fantasy": "space",
"Forest Fantasy": "forest",
"Cloud Fantasy": "cloud",
"Mountain Fantasy": "mountain",
}

let keywordArray =["Ocean Fantasy","Space Fantasy","Forest Fantasy","Cloud Fantasy","Mountain Fantasy"];
 
let keywordButtons = document.querySelector("#artKeywords");
for (let i = 0; i < keywordArray.length; i++) {
  keywordButtons.innerHTML += "<li><button onclick = quote('" + classObject[i] + "')>" + keywordArray[i]+"</button></li>";
} //for


function quote(keyword){   
    //let source = classObject[document.querySelector("#artName").value];
   let source = classObject[keyword];
    //let source = document.querySelector("#artKeywords").value;

    if (classObject.hasOwnProperty(keyword)) {
      document.querySelector("#about").innerHTML = "No information available about " + source;
      document.querySelector("#image").innerHTML = "<img src= pix/" + source + ".jpg>";
    } else {
      document.querySelector("#about").innerHTML = "No information available about " + keyword;
    } //if
  } //quote
