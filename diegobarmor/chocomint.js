window.onscroll = function () { scrollFunction() };

var speed = 0.2;
var max_offset = 0;
var y0 = 0; var y1 = 0; var offset = 0;

// Function to set the max_offset based on the navbar height
function setMaxOffset() {
    navbar_height = document.getElementById("navbar").offsetHeight;
    document.getElementById("main").style.marginTop = navbar_height + "px";
    max_offset = -navbar_height;
}

// Set the max_offset when the page loads
window.onload = function () {
    setMaxOffset();
};

// Set the max_offset when the window is resized
window.onresize = function () {
    setMaxOffset();
};

function scrollFunction() {
    y1 = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    offset = Math.min(0, offset - (y1 - y0) * speed); // to hide the navbar, only negative values are relevant
    offset = Math.max(offset, max_offset); // treshold is applied with "max" because the offset is always negative
    document.getElementById("navbar").style.top = Math.round(offset) + "px";
    y0 = y1;
}
