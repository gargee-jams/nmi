var request = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "7Vx13S7mkavWDEtmFRWHbWEmBMDQN4GZI0VhNRP7";
request.open("GET", url + api_key);
request.send();

request.addEventListener("load", function(){
	if(request.status == 200 && request.readyState == 4){
  	response = JSON.parse(request.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
  }
})

function getDate () {
  document.getElementById("popupContainer").style.zIndex = "2";
  var div = document.createElement("div");
  div.id = "dateInput";
  document.getElementById("popup").innerHTML = "<input type='date' id='userDate'>";

  var button = document.createElement('button');
  button.appendChild(document.createTextNode("Submit"));
  button.id = "closeButton";
  button.onclick = function() {
      var queryDate = "&date=" + document.getElementById("userDate").value;
      request.open("GET", url + api_key + queryDate);
      request.send();
      useDate = true;
      close();
    };
  div.appendChild(button);
  document.getElementById("popup").appendChild(div);
}

function showDesc() {
  document.getElementById("popupContainer").style.zIndex = "2";
  var div = document.createElement("div");
  div.id = "descAndButton";
  document.getElementById("popup").innerHTML = "<p id= 'explanation'>"+ response.explanation + "</p>";
  var button = document.createElement('button');
  button.appendChild(document.createTextNode("Close"));
  button.id = "closeButton";
  button.onclick = function() {
      close();
    };
  div.appendChild(button);
  document.getElementById("popup").appendChild(div);
}
function showPic() {
  document.getElementById("popupContainer").style.zIndex = "2";
  var div = document.createElement("div");
  div.id = "imgAndButton";
  div.innerHTML = "<img id = 'hdPic' src= '" + response.hdurl + "'>";
  var button = document.createElement('button');
  button.appendChild(document.createTextNode("Close"));
  button.id = "closeButton";
  button.onclick = function() {
      close();
    };
  div.appendChild(button);
  document.getElementById("popup").appendChild(div);
}
function close() {
  document.getElementById("popup").innerHTML = "";
  document.getElementById("popupContainer").style.zIndex = "-1";
}