/*!
 * Start Bootstrap - SB Admin 2 v4.0.7 (https://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin-2/blob/master/LICENSE)
 */

!function (t) { "use strict"; t("#sidebarToggle, #sidebarToggleTop").on("click", function (o) { t("body").toggleClass("sidebar-toggled"), t(".sidebar").toggleClass("toggled"), t(".sidebar").hasClass("toggled") && t(".sidebar .collapse").collapse("hide") }), t(window).resize(function () { t(window).width() < 768 && t(".sidebar .collapse").collapse("hide") }), t("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function (o) { if (768 < t(window).width()) { var e = o.originalEvent, l = e.wheelDelta || -e.detail; this.scrollTop += 30 * (l < 0 ? 1 : -1), o.preventDefault() } }), t(document).on("scroll", function () { 100 < t(this).scrollTop() ? t(".scroll-to-top").fadeIn() : t(".scroll-to-top").fadeOut() }), t(document).on("click", "a.scroll-to-top", function (o) { var e = t(this); t("html, body").stop().animate({ scrollTop: t(e.attr("href")).offset().top }, 1e3, "easeInOutExpo"), o.preventDefault() }) }(jQuery);


var Correo = document.getElementById('Correo');
var Contrasena = document.getElementById('Contrasena');

function inicio() {
    if (Correo.value.length == 0 || Contrasena.value.length == 0) {
        alert("Incompleto")
    } else {
        if (Correo.value == "admin" && Contrasena.value == "admin") {
            window.location = "inicioadministrador.html";
            alert("correcto");
            console.log("Usuario: " + user.value);
            console.log("Contraseña: " + pass.value);
            console.log("Credenciales validas");

        } else {
            if (Correo.value == "usuario" && Contrasena.value == "usuario") {
                window.location = "index.html";
                alert("correcto");
                console.log("Usuario: " + user.value);
                console.log("Contraseña: " + pass.value);
                console.log("Credenciales validas");

            } else {
                alert("usuario y/o contraseña incorrectos");
            }
        }
    }
}