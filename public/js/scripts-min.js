"use strict";var banner=document.querySelector(".glide");banner&&new Glide(".glide").mount();var empresas=document.getElementById("intro");if(empresas){var glide=new Glide(empresas,{type:"carousel",perView:6});glide.mount()}var catalogo=document.getElementById("catalogo");if(catalogo){var glideCatalogo=new Glide(catalogo,{type:"carousel",perView:3});glideCatalogo.mount()}$("#btn-animales").click((function(){$.ajax({url:"pag-animales.html",data:"data",success:function(e){setTimeout((function(){$("#contenido-ajax").html(e)}))}})}));var clase=document.querySelector(".card-title__video");clase&&$(".card-title__video").modalVideo();