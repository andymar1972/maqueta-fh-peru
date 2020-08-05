new Glide(".glide").mount();
new Glide(".dona-empresas__slider").mount();

var glide = new Glide("#intro", {
  type: "carousel",
  perView: 6,
});

var glideCatalogo = new Glide("#catalogo", {
  type: "carousel",
  perView: 3,
});
glide.mount();
