let tumbes = document.getElementById("info-tumbes");
let lambayeque = document.getElementById("info-lambayeque");
let piura = document.getElementById("info-piura");
let laLibertad = document.getElementById("info-la-libertad");
// let ancash=document.getElementById('info-ancash')
// let callao=document.getElementById('info-callao')
// let ica=document.getElementById('info-ica')
// let arequipa=document.getElementById('info-arequipa')
// let moquegua=document.getElementById('info-moquegua')
// let tacna=document.getElementById('info-tacna')
// let lima=document.getElementById('info-lima')
// let huancavelica=document.getElementById('info-huancavelica')
// let amazonas=document.getElementById('info-amazonas')
// let cajamarca=document.getElementById('info-cajamarca')
// let sanMartin=document.getElementById('info-san-martin')
// let huanuco=document.getElementById('info-huanuco')
// let pasco=document.getElementById('info-pasco')
// let junin=document.getElementById('info-junin')
// let cusco=document.getElementById('info-cusco')
// let apurimac=document.getElementById('info-apurimac')
// let ayacucho=document.getElementById('info-ayacucho')
// let puno=document.getElementById('info-puno')
let mapa = document.getElementById("mapa");
let ultimaUbicacion = document.getElementById("info-tumbes");
if (mapa) {
  mapa.addEventListener("mouseover", (e) => {
    if (e.target.id == "tumbes") {
      ultimaUbicacion.classList.replace(
        "conocenos-page__content__item--active",
        "conocenos-page__content__item"
      );
      tumbes.classList.replace(
        "conocenos-page__content__item",
        "conocenos-page__content__item--active"
      );
      ultimaUbicacion = document.getElementById("info-" + e.target.id);
    }
    if (e.target.id == "lambayeque") {
      ultimaUbicacion.classList.replace(
        "conocenos-page__content__item--active",
        "conocenos-page__content__item"
      );
      lambayeque.classList.replace(
        "conocenos-page__content__item",
        "conocenos-page__content__item--active"
      );
      ultimaUbicacion = document.getElementById("info-" + e.target.id);
      console.log(e.target.id);
    }
    if (e.target.id == "piura") {
      ultimaUbicacion.classList.replace(
        "conocenos-page__content__item--active",
        "conocenos-page__content__item"
      );
      piura.classList.replace(
        "conocenos-page__content__item",
        "conocenos-page__content__item--active"
      );
      ultimaUbicacion = document.getElementById("info-" + e.target.id);
    }
    if (e.target.id == "la-libertad") {
      ultimaUbicacion.classList.replace(
        "conocenos-page__content__item--active",
        "conocenos-page__content__item"
      );
      laLibertad.classList.replace(
        "conocenos-page__content__item",
        "conocenos-page__content__item--active"
      );
      ultimaUbicacion = document.getElementById("info-" + e.target.id);
    }
  });
}
