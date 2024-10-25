const IMG_1 = document.getElementById('img1');
const IMG_2 = document.getElementById('img2');
const IMG_3 = document.getElementById('img3');
const IMG_4 = document.getElementById('img4');
const IMG_5 = document.getElementById('img5');
const IMG_6 = document.getElementById('img6');
const IMG_7 = document.getElementById('img7');
const IMG_8 = document.getElementById('img8');
const IMG_9 = document.getElementById('img9');
const IMG_10 = document.getElementById('img10');
const MODAL_HOUSE_INFO = document.getElementById('houseModal');
const MODAL_IMAGE = document.getElementById('modalImage');
const MODAL_TITLE = document.getElementById('modalTitle');
const MODAL_DESCRIPTION = document.getElementById('modalDescription');
const MODAL_PRICE = document.getElementById('modalPrice');
const RENT_BUTTON = document.getElementById('rentButton');

MODAL_HOUSE_INFO.style.visibility = 'hidden';

const houses = [
    {
        "title": "Casa en Las Palmas, España",
        "description": "Disfruta de una casa en la soleada isla de Gran Canaria, perfecta para unas vacaciones en la playa.",
        "image": "img/img1.webp",
        "price": "150€ por noche",
        "location": "Las Palmas, España"
    },
    {
        "title": "Casa en Texas, EEUU",
        "description": "Una propiedad increíble en el corazón de Texas, ideal para los amantes de la naturaleza y los espacios abiertos.",
        "image": "img/img2.webp",
        "price": "200€ por noche",
        "location": "Texas, EEUU"
    },
    {
        "title": "Casa en Rio de Janeiro, Brasil",
        "description": "Vista espectacular a las playas de Rio, perfecta para disfrutar de la cultura brasileña.",
        "image": "img/img3.webp",
        "price": "180€ por noche",
        "location": "Rio de Janeiro, Brasil"
    },
    {
        "title": "Casa en Kyoto, Japón",
        "description": "Casa tradicional japonesa, rodeada de jardines zen y templos antiguos.",
        "image": "img/img4.webp",
        "price": "220€ por noche",
        "location": "Kyoto, Japón"
    },
    {
        "title": "Casa en Santorini, Grecia",
        "description": "Hermosa casa con vistas a las aguas cristalinas del mar Egeo, ideal para una escapada romántica.",
        "image": "img/img5.webp",
        "price": "300€ por noche",
        "location": "Santorini, Grecia"
    },
    {
        "title": "Casa en París, Francia",
        "description": "Alojamiento en el corazón de París, cerca de la Torre Eiffel y los principales monumentos de la ciudad.",
        "image": "img/img6.webp",
        "price": "250€ por noche",
        "location": "París, Francia"
    },
    {
        "title": "Casa en Ciudad del Cabo, Sudáfrica",
        "description": "Vistas impresionantes de Table Mountain y la costa sudafricana.",
        "image": "img/img7.webp",
        "price": "180€ por noche",
        "location": "Ciudad del Cabo, Sudáfrica"
    },
    {
        "title": "Casa en Sídney, Australia",
        "description": "Casa moderna con vistas a la Ópera de Sídney y la Bahía de Sídney.",
        "image": "img/img8.webp",
        "price": "275€ por noche",
        "location": "Sídney, Australia"
    },
    {
        "title": "Casa en Venecia, Italia",
        "description": "Encantadora casa frente a los canales de Venecia, ideal para disfrutar de un ambiente histórico.",
        "image": "img/img9.webp",
        "price": "230€ por noche",
        "location": "Venecia, Italia"
    },
    {
        "title": "Casa en Hollywood, EEUU",
        "description": "Espectacular casa, cerca de los principales puntos de interés de la ciudad.",
        "image": "img/img10.webp",
        "price": "350€ por noche",
        "location": "Nueva York, EEUU"
    }
];

function modal(modalNumber) {
    if (modalNumber <= houses.length) {
        const house = houses[modalNumber - 1];
        MODAL_IMAGE.src = house.image;
        MODAL_TITLE.textContent = house.title;
        MODAL_DESCRIPTION.textContent = house.description;
        MODAL_PRICE.textContent = house.price;
        MODAL_HOUSE_INFO.style.visibility = 'visible'; 
    }
}

const CLOSE_MODAL = document.querySelector('.close');
CLOSE_MODAL.addEventListener('click', () => {
    MODAL_HOUSE_INFO.style.visibility = 'hidden';
});

window.addEventListener('click', (event) => {
    if (event.target === MODAL_HOUSE_INFO) {
        MODAL_HOUSE_INFO.style.visibility = 'hidden';
    }
});
