const header = document.getElementById("header");
window.onscroll = function () {
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll > 25) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.width = "100%";
    header.style.zIndex = "15";
  }
  if (scroll < 25) {
    header.style.position = "relative";
    header.style.top = "0";
    header.style.width = "100%";
  }
};
