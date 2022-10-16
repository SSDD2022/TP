// Header
const header_str =
   `<div class="header-marca">
       <img src="img/marca.png" alt="Maviris">
    </div>
    <div class="header-nav">
        <a href="index.html"          class="link-nav">Inicio</a>
        <a href="mujer.html"          class="link-nav">Mujeres</a>
        <a href="hombre.html"         class="link-nav">Hombres</a>
        <a href="formulario.html"     class="link-nav">Contacto</a>
    </div>
    <div class="header-logo">
        <img src="img/logo.png" alt="Logo_Maviris" class="img_responsive">
    </div>`
document.getElementById("header-id").innerHTML = header_str;

// Footer
const footer_str =
   ` <div> <!-- Redes sociales -->
       <p class="en_linea"> Seguinos en </p>
       <a href="https://www.instagram.com/" class="red_social" target="_blank"><i
               class="fa-brands fa-instagram"></i></a>
       <a href="https://www.facebook.com/" class="red_social" target="_blank"><i
               class="fa-brands fa-facebook-f"></i></a>
       <a href="https://www.twitter.com/" class="red_social" target="_blank"><i
               class="fa-brands fa-twitter"></i></a>
       <a href="https://www.pinterest.com/" class="red_social" target="_blank"><i
               class="fa-brands fa-pinterest-p"></i></a>
       <a href="https://www.youtube.com/" class="red_social" target="_blank"><i
               class="fa-brands fa-square-youtube"></i></a>
     </div>
     <div>Derechos reservados Equipo ASV &copy;2022</div>  <!-- Copywrite --> `
document.getElementById("footer-id").innerHTML = footer_str;

//-------------------------------------------------------------------------------------------//
