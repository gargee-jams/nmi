let classObject = {"AlexW": "I am the oldest of two boys, two girls; two redheads, two blondes; two left-handers, two right-handers. ",
"AlexC": " My beard is thicker than this photo shows. I need new pictures :-(",
"Allison": "I write about peanuts. ",
"Amy": " I like mint tea and taking pictures!",
"aardvark": " I like to eat peanuts. "}

let nameArray =["AlexW","AlexC","Allison","Amy","aardvark"];
 
let nameButtons = document.querySelector("#names");
for (let i = 0; i < nameArray.length; i++) {
    nameButtons.innerHTML += "<li><button>" + Hii+"</button></li>";

} //for


function quote(name){    
    if (classObject.hasOwnProperty(name)) {
      document.querySelector("#about").innerHTML = classObject[name];
    } else {
      document.querySelector("#about").innerHTML = "No information available about " + name;
    } //if
  } //quote
