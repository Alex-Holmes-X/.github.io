 /* function mouseOn() {
    var x = document.getElementById("aboutMe");
    x.style.backgroundColor = "white"; 
}

function mouseOff() {
  var x = document.getElementById("aboutMe");
    x.style.backgroundColor = "rgba(0, 216, 194, 0.577)";

} */



/* This section highlights the section HTML and increases the size of the text */
function highlightOn () {
    let focus = document.getElementById("projects");
    // focus.style.color = 'rgb(115, 115, 115)';
    focus.style.fontSize = '25px';
}

function highlightOff () {
    let focus = document.getElementById("projects");
    // focus.style.color = '';
    focus.style.fontSize = ''
}

function highlightOnSkills () {
    let focus = document.getElementById("skills");
    // focus.style.color = 'rgb(115, 115, 115)';
    focus.style.fontSize = '25px';
}

function highlightOffSkills () {
    let focus = document.getElementById("skills");
    // focus.style.color = '';
    focus.style.fontSize = ''
}