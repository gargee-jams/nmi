var request = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "7Vx13S7mkavWDEtmFRWHbWEmBMDQN4GZI0VhNRP7";
var response;

request.open("GET", url + api_key);
request.send();

request.addEventListener("load", function(){
	if(request.status == 200 && request.readyState == 4){
  	response = JSON.parse(request.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    //document.getElementById("explanation").textContent = response.explanation;
  }
})

function showDesc() {
  document.getElementById("popupContainer").style.zIndex = "2";
  document.getElementById("popup").innerHTML = "<p>"+ response.explanation + "</p>";
  var button = document.createElement('button');
  button.appendChild(document.createTextNode("Close"));
  button.onclick = function() {
      close();
    };
  document.getElementById("popup").appendChild(button);
}
function showPic() {
  document.getElementById("popupContainer").style.zIndex = "2";
  document.getElementById("popup").innerHTML = "<img id = 'hdPic' src= '" + response.hdurl + "'>";
  var button = document.createElement('button');
  button.appendChild(document.createTextNode("Close"));
  button.onclick = function() {
      close();
    };
  document.getElementById("popup").appendChild(button);
}
function close() {
  document.getElementById("popup").innerHTML = "";
  document.getElementById("popupContainer").style.zIndex = "-1";
}