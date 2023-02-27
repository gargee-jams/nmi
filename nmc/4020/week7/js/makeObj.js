let classObject = {"Ocean Fantasy": "ocean",
"Space Fantasy": "space",
"Forest Fantasy": "forest",
"Cloud Fantasy": "cloud",
"Mountain Fantasy": "mountain",
}

let keywordArray =["Ocean Fantasy","Space Fantasy","Forest Fantasy","Cloud Fantasy","Mountain Fantasy"];
 
let keywordButtons = document.querySelector("#artKeywords");
for (let i = 0; i < keywordArray.length; i++) {
  keywordButtons.innerHTML += "<li><button onclick = quote('" + classObject[keywordArray[i]] +"','" + keywordArray[i] + "') >" + keywordArray[i]+"</button></li>";
} //for

function quote(jpgName, keyword){   
    if (classObject.hasOwnProperty(keyword)) {
      document.querySelector("#about").innerHTML = "No information available about " + jpgName;
      document.querySelector("#image").innerHTML = "<img src= pix/" + jpgName + ".jpg>";
    } else {
      document.querySelector("#about").innerHTML = "No information available about " + keyword;
      document.querySelector("#image").innerHTML = "<img src= pix/AlexC.jpg>";
    } //if
  } //quote
