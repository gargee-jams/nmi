
var cards = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"];
var cards2 = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"];
var cardsDiscarded = [];
var cardsDiscarded2 = [];

let deck = document.querySelector('#deck');
let deck2 = document.querySelector('#deck2');

let button = document.createElement('button');
button.innerHTML = "shuffle";
button.onclick = function() {shuffle(cards, deck, cardsDiscarded)};
document.getElementById('button').appendChild(button);

let button2 = document.createElement("button");
button2.innerHTML = "add back";
button2.onclick = function() {addBack(cards, cardsDiscarded)};
document.getElementById('button').appendChild(button2);

let button3 = document.createElement("button");
button3.innerHTML = "shuffle 2";
button3.onclick = function() {shuffle(cards2, deck2, cardsDiscarded2)};
document.getElementById('button').appendChild(button3);

let button4 = document.createElement("button");
button4.innerHTML = "add back 2";
button4.onclick = function() {addBack(cards2, cardsDiscarded2)};
document.getElementById('button').appendChild(button4);


let button1 = document.createElement("button");
button1.innerHTML = "reset";
button1.onclick = function() {reset(cards)};
document.getElementById('button').appendChild(button1);

function shuffle(cards, deck, cardsDiscarded) {
    if (cards.length == 0) {
        deck.innerHTML = "End of deck";
        return;
    } //if
    deck.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let outcome = Math.floor(Math.random() * cards.length);
        deck.innerHTML += "<img src = cards/" + cards[outcome] + ">";
        cardsDiscarded.push(cards[outcome]);
        cards.splice(outcome, 1);
        
    } //for
    cardsDiscarded.push(cards[outcome]);
    //make draggable cards
    $(function() {
        $('img').draggable();
    })
    //make cards disappear on double click
    $('img').dblclick(function() {
        $(this).css("display", "none");
    });
} // shuffle

function addBack (cards, cardsDiscarded) {
    while (cardsDiscarded.length > 0) {
        cards.push(cardsDiscarded.pop());
    } // while
} // addBack

function reset() { 
    cards = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"];
    cards2 = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"];
} //reset
