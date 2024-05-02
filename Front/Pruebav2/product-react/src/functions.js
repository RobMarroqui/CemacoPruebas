import Swal from 'sweetalert2';

export function show_alerta(mensaje, icono, foco) {
    onfocus(foco);
    Swal.fire({
        title: mensaje,
        icon: icono,
        timer: 2000 
    });
}

function onfocus(foco) {
    const element = document.getElementById(foco);
    if (element) {
        element.focus();
    } else {
        console.error(`Elemento con ID ${foco} no encontrado.`);
    }
}
