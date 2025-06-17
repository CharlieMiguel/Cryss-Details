//icono whatssap
function openWhatsApp() {
  const phoneNumber = "18097179875"; 
  const message = "¡Hola! vengo de tu pagina web: https://charliemiguel.github.io/Cryss-Details/ \n\nquiero saber mas informacion acerca de tus productos y servicios😁"; 
  const encodedMessage = encodeURIComponent(message);

  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

  const url = isMobile
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 

  window.open(url, '_blank');
}

//cartas
const telefono = '18097179875'; 
    const botones = document.querySelectorAll('.card .btn');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const card = boton.closest('.card');
            const producto = card.id;


            const mensaje = `¡Hola! 👋 vengo de tu pagina web: https://charliemiguel.github.io/Cryss-Details/ %0AEstoy interesado en  *${producto}*.%0A¿Podrías darme más información?`;


            const enlace = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
                ? `https://wa.me/${telefono}?text=${mensaje}`
                : `https://web.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;

            window.open(enlace, '_blank');
        });
    });



    //email
   function redirigirCorreo() {
    const email = "crystal.mendez2019@gmail.com";
    const asunto = encodeURIComponent("Consulta sobre productos");
    const cuerpo = encodeURIComponent("¡Hola Crystal! vengo de tu pagina web: https://charliemiguel.github.io/Cryss-Details/ me podrias dar mas informacion acerca de tus productos y servicios");

    const mailtoLink = `mailto:${email}?subject=${asunto}&body=${cuerpo}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${asunto}&body=${cuerpo}`;


    const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);


    const linkFinal = esMovil ? mailtoLink : gmailLink;

    window.open(linkFinal, "_blank");
}