function baso() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan los vasos, me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function llavero() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, quisiera saber mas acerca de los llaveros personalizados"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function taza() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan las tazas personalizadas, me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function colacam() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan los colacam personalizados, me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function caja() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan las cajas , me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function bandeja() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan las bandejas, me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function wha() {
    const phoneNumber = "18097179875"; 
    const message = "Hola,vengo desde tu pagina web quiero saber mas acerca de los productos que ofreces"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}



document.getElementById('botonMenuCelular').addEventListener('click', function() {
    document.getElementById('menuCelular').classList.toggle('mostrar-menu');
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('.boton-menu-celular') && !event.target.matches('.icono-menu-celular')) {
        var menus = document.getElementsByClassName("menu-celular");
        for (var i = 0; i < menus.length; i++) {
            var menuAbierto = menus[i];
            if (menuAbierto.classList.contains('mostrar-menu')) {
                menuAbierto.classList.remove('mostrar-menu');
            }
        }
    }
});

function eternas() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan los ramos de flores eternas, me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function abrigos() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan los los abrigos personalizados, me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}
function bolas() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan las bolas de navidad personalizadas, me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}
function cajas() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan las cajas de regalo de cumpleaños personalizadas, me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function pijama() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan las pijamas personalizadas, me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function perfume() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan las cajas con perfumes, me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function bebe() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesan las ropas de bebe personalizadas al gusto, me podrias dar mas informacion acerca del precio y diseños"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}


function oferta() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesa la oferta del mes de mayo de la taza personalizada + llavero con fotos de 500$RD"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function oferta2() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesa la oferta del mes de mayo del vaso termico + llavero con fotos"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}

function oferta3() {
    const phoneNumber = "18097179875"; 
    const message = "Hola, me interesa la oferta del mes de mayo del vaso termico + llavero con fotos de 1200$RD"; 
    const encodedMessage = encodeURIComponent(message);
    

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
        ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`; 
    
    window.open(whatsappUrl, "_blank");
}