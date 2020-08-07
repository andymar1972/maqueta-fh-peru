// Aparecer Menu Responsive

$("#btn-open").click(function () {
  $(".main-menu").slideToggle();
});
$("#trabajo").click(function () {
  $("#trabajo-sub").slideToggle();
  // $(".menu__item").toggleClass("menu__item--event svg");
});
$("#dona").click(function () {
  $("#dona-sub").slideToggle();
  // $(".menu__item").toggleClass("menu__item--event svg");
});
