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

// Cerrar el menú si se hace clic fuera de él
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