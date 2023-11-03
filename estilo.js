
var imagene = ['Imagenes/rep01.jpeg', 'Imagenes/rep2.jpg', 'Imagenes/rep20.jpg', 'Imagenes/rep4.jpg', 'Imagenes/rep5.jpg',
    'Imagenes/rep6.jpg', 'Imagenes/rep7.jpg', 'Imagenes/rep8.jpg', 'Imagenes/rep9.jpg', 'Imagenes/rep19.jpg'];
cont = 0;

function girar(carrusel) {
    carrusel.addEventListener('click', evt => {
        let atras = carrusel.querySelector('.atras');
        let adelante = carrusel.querySelector('.adelante');
        let img = carrusel.querySelector('Img');
        let tgt = evt.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagene[cont - 1];
                cont--;
            } else {
                img.src = imagene[imagene.length - 1];
                cont = imagene.length - 1;
            }
        } else if (tgt == adelante) {
            if (cont < imagene.length - 1) {
                img.src = imagene[cont + 1];
                cont++;
            } else {
                img.src = imagene[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.carrusel');
    girar(contenedor);

});


