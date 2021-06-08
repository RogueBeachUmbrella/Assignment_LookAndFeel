/**
 * Your JS code here
 */

/**
 * Sample code
 */
// document.addEventListener('DOMContentLoaded', function() {
//     var ulElement = document.getElementById('links');
//     var liElement = document.createElement('li');
//     liElement.appendChild(document.createTextNode('created by main.js'));

//     ulElement.appendChild(liElement);
// });


// When the user scrolls the page, execute myFunction
window.onscroll = function() { stickyHeader() };

// Get the header
var header = document.getElementById("sticky-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

var slideIndex = [1, 1, 1];
var slideId = ["chateau-de-bellet", "domaine-de-tosac", "chateau-de-cremat"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";


}

$(function() {
    var menuVisible = false;
    $('.navbar-toggler').click(function() {
        if (menuVisible) {
            $('.navbar-collapse').css({ 'display': 'none' });
            menuVisible = false;
            return;
        }
        $('.navbar-collapse').css({ 'display': 'block' });
        menuVisible = true;
    });
    $('.navbar-collapse').click(function() {
        $(this).css({ 'display': 'none' });
        menuVisible = false;
    });
});