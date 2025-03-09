//////////////////////////////////////////
///////// DYNAMIC NAVIGATION BAR /////////
//////////////////////////////////////////

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

window.onscroll = function () { scrollFunction() };


///////////////////////////////////////////////////////
////////// TOGGLE BACKGROUND PARTICLE EFFECT //////////
///////////////////////////////////////////////////////

function toggle_particles() {
    var container = document.getElementById("bg-animation-container");
    if (container.innerHTML === '') { // Create the bg-animation divs
        container.innerHTML = `
        <div class="bg-animation">
          <div id="stars0"></div><div id="stars1"></div>
          <div id="stars2"></div><div id="stars3"></div>
        </div>
      `;
    } else { // Destroy the bg-animation divs
        container.innerHTML = '';
    }
}

toggle_particles() // Start with the background particles
