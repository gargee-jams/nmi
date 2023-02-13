let candidateNames = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore","Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul","Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"]
let candidatePix = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg","graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg","perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"]
let output = document.querySelector('#alsoRan');
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');

let i = 0;
function canShow(plusMinus) {
    output.innerHTML = "<li>" + candidateNames[i] + "<br><img src=pix/" + candidatePix[i] + "> </li>";
    i += plusMinus;
    if (i == candidateNames.length) {
        i = 0;
    } else if (i < 0) {
        i = candidateNames.length - 1;
    } //if
} //canShow
next.onclick = function() {
    canShow(1);
} //onClick
previous.onclick = function() {
    canShow(-1);
} //onClick
