var chevron = document.getElementById("chevronIcon");

$("#chevronIcon").hover(
  () => {
    chevron.setAttribute("viewBox", "0 0 24 15");
    chevron.style.cursor = "pointer";
  },
  () => {
    chevron.setAttribute("viewBox", "0 0 24 24");
  }
);

$(document).ready(() => {
  $("#chevronA").click(event => {
    event.preventDefault();
    $path = $("#topLower").offset().top;
    $("body").animate({ scrollTop: $path }, 1000);
  });
});

var playHeader = document.querySelector(".playHeader");
var playSpan = document.querySelector(".playSpan");
var playIcon = document.querySelector(".playIcon");
var playBox = document.querySelector(".play");

$(".playA").hover(
  () => {
    playIcon.style.display = "none";
    playSpan.style.display = "block";
    playHeader.style.display = "block";
    playBox.style.padding = "0 0 5.5rem 0";
  },
  () => {
    playIcon.style.display = "block";
    playSpan.style.display = "none";
    playHeader.style.display = "none";
    playBox.style.padding = "0 0 5.1rem 0";
  }
);
