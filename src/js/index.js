let banner = document.querySelector(".glide");
if (banner) {
  new Glide(".glide").mount();
}

let empresas = document.getElementById("intro");
if (empresas) {
  var glide = new Glide(empresas, {
    type: "carousel",
    perView: 6,
  });
  glide.mount();
}
let catalogo = document.getElementById("catalogo");
if (catalogo) {
  var glideCatalogo = new Glide(catalogo, {
    type: "carousel",
    perView: 3,
  });

  glideCatalogo.mount();
}
$("#btn-animales").click(function () {
  $.ajax({
    url: "pag-animales.html",
    data: "data",
    success: function (data) {
      setTimeout(function () {
        $("#contenido-ajax").html(data);
      });
    },
  });
});
