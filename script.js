var myCarousel = document.querySelector('#demo');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // Adjust the slide interval as desired (in milliseconds)
  ride: 'carousel' // Set the ride option to enable auto-sliding
});

document.addEventListener("mousemove", function(event) {
var cursor = document.getElementById("cursor");
cursor.style.left = event.clientX + "px";
cursor.style.top = event.clientY + "px";
});

window.addEventListener('load', function() {
var loadingScreen = document.getElementById('loading-screen');
setTimeout(function() {
loadingScreen.style.display = 'none';
}, 2000); // Delay in milliseconds
});

const animatedImage = document.getElementById('animated-image');

const rangeX = 25; // Adjust the range of rotation on the X-axis
const rangeY = 25; // Adjust the range of rotation on the Y-axis

animatedImage.addEventListener('mousemove', function(e) {
const rect = this.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const percentageX = (x - centerX) / centerX;
const percentageY = (centerY - y) / centerY;

const rotateX = rangeX * percentageY;
const rotateY = rangeY * percentageX;

this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

animatedImage.addEventListener('mouseleave', function() {
this.style.transform = 'none';
});

// Set the target numbers for each column
var targetDays = 36;
var targetHours = 47;
var targetMinutes = 50;
var targetTournament = 900;

// Set the initial numbers for each column
var currentDays = 0;
var currentHours = 0;
var currentMinutes = 0;
var currentTournament = 0;

// Update the countdown every 200 milliseconds (increase the speed)
var countdown = setInterval(function() {
// Increment the numbers for each column
currentDays++;
currentHours++;
currentMinutes++;
currentTournament++;

// Display the current numbers in the respective elements
document.getElementById("days").innerHTML = formatTime(currentDays);
document.getElementById("hours").innerHTML = formatTime(currentHours);
document.getElementById("minutes").innerHTML = formatTime(currentMinutes);
document.getElementById("tournaments").innerHTML = formatTime(currentTournament);

// Check if the target numbers have been reached
if (currentDays >= targetDays && currentHours >= targetHours && currentMinutes >= targetMinutes && currentTournament >= targetTournament) {
clearInterval(countdown);
}
}, 100); // Change the interval duration to adjust the speed

// Format the time values to add leading zeros if necessary
function formatTime(time) {
return time < 10 ? "0" + time : time;
}


function showSearch() {
document.getElementById("search-modal").style.display = "flex";
document.getElementById("search-input").focus();
}

function hideSearch() {
document.getElementById("search-modal").style.display = "none";
document.getElementById("search-input").blur();
}


const btnScrollToTop = document.querySelector('#scrollButton');
btnScrollToTop.addEventListener("click", function(event) {
event.preventDefault(); // Prevent the default behavior

// Your code to scroll to the top of the page
window.scrollTo(0, 0);
// or
window.scrollTo({
top: 0,
left: 0,
behavior: 'smooth'
});

$("html, body").animate({ scrollTop: 0 }, "slow");
});

document.addEventListener("DOMContentLoaded", function() {
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var sidebar = document.getElementById("sidebar");

openBtn.addEventListener("click", function(event) {
event.preventDefault();
sidebar.classList.toggle("open");
});

closeBtn.addEventListener("click", function(event) {
event.preventDefault();
sidebar.classList.remove("open");
});
});
