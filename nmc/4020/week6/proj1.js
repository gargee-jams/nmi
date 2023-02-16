let candidateNames1 = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore"];
let candidateNames2 = ["Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul"];
let candidateNames3 = ["Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"];
let candidatePix1 = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg"];
let candidatePix2 = ["graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg"];
let candidatePix3 = ["perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"];

let output = document.querySelector('#alsoRan');
let s1Add = document.querySelector('#ss1Add');
let s1Sub = document.querySelector('#ss1Sub');
let s2Add = document.querySelector('#ss2Add');
let s2Sub = document.querySelector('#ss2Sub');
let s3Add = document.querySelector('#ss3Add');
let s3Sub = document.querySelector('#ss3Sub');

let i = 0;
function canShow(plusMinus, arr1, arr2) {
    output.innerHTML = "<li>" + arr1[i] + "<br><img src=pix/" + arr2[i] + "> </li>";
    i += plusMinus;
    if (i == arr1.length) {
        i = 0;
    } else if (i < 0) {
        i = arr1.length - 1;
    } //if
} //canShow
s1Add.onclick = function() {
    canShow(1, candidateNames1, candidatePix1);
} //onClick
s1Sub.onclick = function() {
    canShow(-1, candidateNames1, candidatePix1);
} //onClick
s2Add.onclick = function() {
    canShow(1, candidateNames2, candidatePix2);
} //onClick
s2Sub.onclick = function() {
    canShow(-1, candidateNames2, candidatePix2);
} //onClick
s3Add.onclick = function() {
    canShow(1, candidateNames3, candidatePix3);
} //onClick
s3Sub.onclick = function() {
    canShow(-1, candidateNames3, candidatePix3);
} //onClick
