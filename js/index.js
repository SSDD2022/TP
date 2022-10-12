let header_str = 
   `<div class="header-marca">
       <img src="img/marca-pequeña.png" alt="Maviris">
    </div>
    <!-- <h1 class="animate_animated animate_backInLeft">Contacto</h1> -->
    <div class="header-nav">
        <a href="index.html"          class="link-nav">Inicio</a>
        <a href="hombre_v3.html"      class="link-nav">Hombres</a>
        <a href="prueba.html"         class="link-nav">Mujeres</a>
        <a href="formulario_v3.html"  class="link-nav">Contacto</a>
    </div>
    <div class="header-logo">
        <img src="img/logo-negro-intenso.png" alt="Logo_Maviris">
    </div>`
document.getElementById("header-id").innerHTML = header_str;
let footer_str =
   `<!-- Redes sociales -->
    <div>
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
    <!-- Copywrite -->
    <div>Derechos reservados Equipo ASV &copy;2022</div>`
document.getElementById("footer-id").innerHTML = footer_str;
