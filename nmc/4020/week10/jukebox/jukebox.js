let songArr = [];
let playButton = document.querySelector('#playButton');
let searchBar = document.querySelector('#searchBar');
let userQuery;
let submitButton = document.querySelector('#submit');

//constructs song object with title, cover link, and preview url
class Song {
    constructor(title, artist, albumCover, m4a) {
        this.title = title;
        this.artist = artist;
        this.albumCover = albumCover;
        this.m4a = m4a;
    } //const
} //Song

/* moving cloud banner */
let clouds = document.querySelector('#clouds');
let howfar = 0;
setInterval(function() {
    howfar += 1;
    if (howfar>1500) {howfar=-1000;}
    clouds.style.left = howfar + "px";
}, 10);
/* moving cloud banner end */

//init elements
function startup() {
    playButton.disabled = true;
    searchBar.innerHTML = "<label id= 'searchLabel' for='search'> Song Name </label>" 
        + "<input type='text' id='search'>" 
        + "<button id='submit' onclick = 'findSong()'>Search</button>";
} // startup

//find the song using the search
function findSong () {
    songArr = [];
    let i = 0;
    juke.innerHTML = "";
    document.getElementById('buttonHolder').style.paddingTop = '100px';
    document.getElementById('searchLabel').style.marginLeft = '70px';

    let results = document.querySelector('#results');
    results.innerHTML = "";

    let songName = document.querySelector('#search').value;
    let query = songName.trim();
    query = query.split(' '). join('+');
    let searchQuery = "https://itunes.apple.com/search?media=music&term=+"+ query +"&limit=5";

    fetch(searchQuery)
    .then(result => result.json())
    .then((output) => {
        if (output.results.length == 0) {
            results.innerHTML += "No results :(";
        } else {
            //for each elem generated
            output.results.forEach(element => {
                //if label is too long, shortens the end
                let label = element.trackName + " by " + element.artistName;
                if (label.length > 40) {
                    label = label.substring(0, 40) + "...";
                } //if
                //adds new song object to songArr
                let newSong = new Song(element.trackName, element.artistName, element.artworkUrl100, element.previewUrl);
                songArr.push(newSong); 

                //adds buttons and links display function
                results.innerHTML += "<button class = 'song' id = '"+ element.artworkUrl100 +"' onclick= 'addLink("+i+")'>" + label + "</button><br>";
                i++;
            });
        } //if
    })
    .catch(error => function () {
        results.innerHTML = "Song not found";
    });
} // findSong

//calls display on the index
function addLink(index) {
        displaySong(songArr[index]);
} // addLink

//displays the song title and album cover, as well as calls functions to add back button and player
function displaySong ({title, artist, albumCover, m4a}) {
    $('#results').hide();
    $('#searchBar').hide();

    juke.innerHTML = "<div id= 'songinfo'><img id = 'albumArt' src='" + albumCover + "'></img>" + "<h3 id= 'songTitle'>" + title + "<br><br>" + artist + "</h3></div>";
    player(m4a);

    juke.innerHTML += "<button id = 'back' onclick= 'back()'>Back</button>";
} //displaySong

//creates and formats back button for returning to search page
function back() {
    $('#results').show();
    $('#searchBar').show();
    juke.innerHTML = "";
} //back

//plays the song using audio player
function player(tune){
    juke.innerHTML += "<div id='audioPlayer'><audio controls autoplay src=" +tune+ " type='audio/m4a' id= 'player'></audio></div>";
} // player
