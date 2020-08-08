let banner = document.querySelector("#banner");
if (banner) {
  var glideBanner = new Glide(banner, {
    autoplay: 2000,
  });
  glideBanner.mount();
}

let empresas = document.getElementById("intro");
if (empresas) {
  var glide = new Glide(empresas, {
    type: "carousel",
    perView: 6,
    autoplay: 2000,
    breakpoints: {
      1400: {
        perView: 4,
      },
      800: {
        perView: 4,
      },
      480: {
        perView: 1,
        autoplay: 3000,
        focusAt: "center",
      },
    },
  });
  glide.mount();
}
let catalogo = document.getElementById("catalogo");
if (catalogo) {
  var glideCatalogo = new Glide(catalogo, {
    type: "carousel",
    perView: 3,
    breakpoints: {
      800: {
        perView: 2,
      },
      480: {
        perView: 1,
        autoplay: 3000,
      },
    },
  });

  glideCatalogo.mount();
}
