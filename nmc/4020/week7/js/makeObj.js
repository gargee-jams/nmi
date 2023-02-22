let classObject = {"AlexW": "I am the oldest of two boys, two girls; two redheads, two blondes; two left-handers, two right-handers. ",
"AlexC": " My beard is thicker than this photo shows. I need new pictures :-(",
"Allison": "I write about peanuts. ",
"Amy": " I like mint tea and taking pictures!",
"aardvark": " I like to eat peanuts. "}

let nameArray =["AlexW","AlexC","Allison","Amy","aardvark"];
 
let nameButtons = document.querySelector("#aname");
for (let i = 0; i < nameArray.length; i++) {
    nameButtons.innerHTML += "<li><button onclick =quote('" + nameArray[i] + "')>" +nameArray[i]+"</button></li>";

} //for


function quote(name){
    let sName = document.querySelector("#aname").value;
    
    if (classObject.hasOwnProperty(sName)) {
      document.querySelector("#about").innerHTML = classObject[sName];
    } else {
      document.querySelector("#about").innerHTML = "No information available about " + sName;
    } //if
  } //quote
