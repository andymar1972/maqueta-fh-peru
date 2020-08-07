let tumbes = document.getElementById("info-tumbes");
let lambayeque = document.getElementById("info-lambayeque");
let piura = document.getElementById("info-piura");
let laLibertad = document.getElementById("info-la-libertad");
let ancash = document.getElementById("info-ancash");
let callao = document.getElementById("info-callao");
let ica = document.getElementById("info-ica");
let arequipa = document.getElementById("info-arequipa");
let moquegua = document.getElementById("info-moquegua");
let tacna = document.getElementById("info-tacna");
let lima = document.getElementById("info-lima");
let huancavelica = document.getElementById("info-huancavelica");
let amazonas = document.getElementById("info-amazonas");
let cajamarca = document.getElementById("info-cajamarca");
let sanMartin = document.getElementById("info-san-martin");
let huanuco = document.getElementById("info-huanuco");
let pasco = document.getElementById("info-pasco");
let junin = document.getElementById("info-junin");
let cusco = document.getElementById("info-cusco");
let apurimac = document.getElementById("info-apurimac");
let ayacucho = document.getElementById("info-ayacucho");
let puno = document.getElementById("info-puno");
let loreto = document.getElementById("info-loreto");
let madreDeDios = document.getElementById("info-madre-de-dios");
let ucayali = document.getElementById("info-ucayali");

let ultimaUbicacion = document.getElementById("info-tumbes");
const region = (nombreRegionTexto, nombreRegion, objetoEvento) => {
  if (objetoEvento.target.id == nombreRegionTexto) {
    ultimaUbicacion.classList.replace(
      "conocenos-page__content__item--active",
      "conocenos-page__content__item"
    );
    nombreRegion.classList.replace(
      "conocenos-page__content__item",
      "conocenos-page__content__item--active"
    );
    ultimaUbicacion = document.getElementById("info-" + objetoEvento.target.id);
  }
};

let mapa = document.getElementById("mapa");
if (mapa) {
  mapa.addEventListener("mouseover", (e) => {
    region("amazonas", amazonas, e);
    region("ancash", ancash, e);
    region("apurimac", apurimac, e);
    region("arequipa", arequipa, e);
    region("ayacucho", ayacucho, e);
    region("cajamarca", cajamarca, e);
    region("callao", callao, e);
    region("cusco", cusco, e);
    region("huancavelica", huancavelica, e);
    region("huanuco", huanuco, e);
    region("ica", ica, e);
    region("junin", junin, e);
    region("la-libertad", laLibertad, e);
    region("lambayeque", lambayeque, e);
    region("lima", lima, e);
    region("loreto", loreto, e);
    region("madre-de-dios", madreDeDios, e);
    region("moquegua", moquegua, e);
    region("pasco", pasco, e);
    region("piura", piura, e);
    region("puno", puno, e);
    region("san-martin", sanMartin, e);
    region("tumbes", tumbes, e);
    region("ucayali", ucayali, e);
    region("tacna", tacna, e);
  });
}
