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
  $("#chevronA").click(() => {
    $path = $("#topLower").offset().top;
    $("body").animate({ scrollTop: $path }, 1000);
  });
});
