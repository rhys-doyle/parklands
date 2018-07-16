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
