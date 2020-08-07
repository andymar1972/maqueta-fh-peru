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
$("#btn-educacion").click(function () {
  $.ajax({
    url: "pag-educacion.html",
    data: "data",
    success: function (data) {
      setTimeout(function () {
        $("#contenido-ajax").html(data);
      });
    },
  });
});
$("#btn-salud").click(function () {
  $.ajax({
    url: "pag-salud.html",
    data: "data",
    success: function (data) {
      setTimeout(function () {
        $("#contenido-ajax").html(data);
      });
    },
  });
});
