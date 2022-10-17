// Validacion del formulario

var v_form = document.getElementById("f_form")

function validarRequeridos (e) {
   const Cons=0, Comp=1, News=2, Recl=3    // Consultar, Comprar, Newsletter, Reclamar
   let msg=[]
   let texto="Por favor informanos "

   // Indispensable completar al menos un check box
   let contMotivo=0;
   for (let i= 0 ; i < v_form.f_motivo.length ; i++) {
      if ( v_form.f_motivo[i].checked ) {
        contMotivo++
      }
   }
   if (contMotivo == 0) {
      msg.push("el motivo del contacto")
   } else {

      // Si se quiere suscribir al newsletter, es necesario el correo
      // Necesario mail o celular
      if (v_form.f_motivo[News].checked && v_form.f_email.value.length == 0) {
         msg.push ("el mail para poder suscribirte")
      } else if (v_form.f_email.value.length == 0 && v_form.f_celular.value.length == 0) {
         msg.push("tu mail o celular")
      }

      // Necesaria la dirección si compra
      if (v_form.f_motivo[Comp].checked &&
          (v_form.f_direccion.value.length == 0 || v_form.f_estado.value == "No Venezuela")) {
         msg.push("tu dirección en Venzuela para avanzar con la compra")
      }

      // Necesario un mensaje por consulta, compra o reclamo
      if ((v_form.f_motivo[Cons].checked ||
           v_form.f_motivo[Comp].checked ||
           v_form.f_motivo[Recl].checked) &&
           v_form.f_mensaje.value.length == 0) {
         msg.push("el mensaje")
      }
   }

   if (msg.length > 0) {
      if (msg.length == 1) {
         texto += msg[0]
      } else {
         texto += ": "
         for (let i=0 ; i < msg.length ; i++) {
            texto += "\n  " + msg[i] 
         }
      }
      alert (texto)
      e.preventDefault()
   }
}
document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("f_form").addEventListener('submit', validarRequeridos);
      })


//---------------------------------------------------------------------
// API Rest

function getIP(json) {
   document.getElementById('ip_client').innerHTML = json.ip
}

