function change_autorefreshdiv(conNum){
    var NAME = document.getElementById(conNum);
    var currentClass = NAME.className;
    if (currentClass == "content-wrapper-null") { // Check the current class name
        NAME.className = "content-wrapper";   // Set other class name
    } else {
        NAME.className = "content-wrapper-null";  // Otherwise, use `second_name`
    }
} 


var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
var i;
var x = document.getElementsByClassName(slideId[no]);
if (n > x.length) {slideIndex[no] = 1}
if (n < 1) {slideIndex[no] = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex[no]-1].style.display = "block";  
}


/*
#######################

Just to be clear. This is by NO means, like absolutely NO MEANS a serious pw protection nor should it be considered as one - EVER - just no
and if you are checking the 'codebase' for hints of the pw - well, then you earned your right to visit this project.
But it is a very easy to implement and perfectly suitable for this kind of job on a static website - so yeah - no big mysteries behind this soft wall

*/

function clearContent() {
    var pw=document.getElementById("pw-input").value
    
    if (pw==5873) {
        document.getElementById('paw-zone-ent').style.display='none';
        document.getElementById('paw-zone-lock').style.display='block';
    } else {
        alert('That has been wrong. Please try again!');
    }

}