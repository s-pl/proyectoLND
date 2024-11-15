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
const MODAL_HOUSE_INFO = document.getElementById('house-modal');
MOBILE_CART = document.getElementsByClassName('floating')[0]
const CLOSE_MODAL = document.querySelector('.close-house');
const CLOSE_CART = document.querySelector('.close-cart');
const MODAL_IMAGE = document.getElementById('modal-image');
const MODAL_TITLE = document.getElementById('modal-title');
const MODAL_DESCRIPTION = document.getElementById('modal-description');
const MODAL_PRICE = document.getElementById('modal-price');
const RENT_BUTTON = document.getElementById('rent-button');
const REVIEW_CONTAINER = document.getElementById('reviews-container');
const GITHUB_ICON = document.getElementsByClassName('bi bi-github')[0];
const YT_ICON = document.getElementsByClassName('bi bi-youtube')[0];
const X_ICON = document.getElementsByClassName('bi bi-twitter-x')[0];
const FB_ICON = document.getElementsByClassName('bi bi-facebook')[0];
const CART_ICON = document.getElementsByClassName('bi bi-cart')[0];
const TRIP_START = document.getElementById("trip-start");
const TRIP_END = document.getElementById("trip-end");
const CART_MODAL = document.getElementById("cart-modal");
const CART_CONTENT = document.getElementsByClassName("cart-modal-content")[0];
const WEB_HEADER = document.getElementById("web-header");
const FIRST_ICON = document.getElementById("first-icon");
const SECOND_ICON = document.getElementById("second-icon");
const THIRD_ICON = document.getElementById("third-icon");

MODAL_HOUSE_INFO.style.visibility = 'hidden';


const HOUSES = [
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
    }
];

const REVIEWS = [
    {
        name: "Emily Johnson",
        stars: "⭐⭐⭐⭐⭐",
        review: "La casa es espectacular, la vista es increíble y la piscina privada fue un lujo. ¡Sin duda volveré!",
        imgSrc: "img/faces/img02.png"
    },
    {
        name: "Michael Brown",
        stars: "⭐⭐⭐⭐",
        review: "Un lugar increíblemente elegante y bien decorado. Perfecto para unas vacaciones de lujo. La ubicación también es excelente.",
        imgSrc: "img/faces/img01.png"
    },
    {
        name: "Sofia Martínez",
        stars: "⭐⭐⭐⭐⭐",
        review: "La casa superó todas nuestras expectativas. Todo estaba impecable, y el servicio fue de primera. Totalmente recomendable.",
        imgSrc: "img/faces/img02.png"
    },
    {
        name: "David Wilson",
        stars: "⭐⭐⭐⭐",
        review: "Excelente experiencia. La propiedad es hermosa, aunque me gustaría que tuvieran más opciones de entretenimiento en el área.",
        imgSrc: "img/faces/img01.png"
    },
    {
        name: "Olivia Garcia",
        stars: "⭐⭐⭐⭐⭐",
        review: "Un paraíso. La atención al detalle en esta casa es increíble. Pasamos una estancia maravillosa, muy relajante.",
        imgSrc: "img/faces/img02.png"
    }
];

const CART = {};

function reviewsFn() {
    REVIEWS.forEach(REVIEW => {
        REVIEW_CONTAINER.innerHTML += `
            <div class="review-card">
                <img src="${REVIEW.imgSrc}" alt="Avatar">
                <div class="card-container">
                    <h4 id="review-name"><b>${REVIEW.name}</b></h4>
                    <p id="stars">${REVIEW.stars}</p>
                    <p id="review">${REVIEW.review}</p>
                </div>
            </div>
        `;
    });
}

reviewsFn();

function modal(MODAL_NUMBER) {
    
    MODAL_HOUSE_INFO.style.display = "flex";
    if (MODAL_NUMBER <= HOUSES.length) {
        const HOUSE = HOUSES[MODAL_NUMBER - 1];
        MODAL_IMAGE.src = HOUSE.image;
        MODAL_TITLE.textContent = HOUSE.title;
        MODAL_DESCRIPTION.textContent = HOUSE.description;
        MODAL_PRICE.textContent = HOUSE.price;
        MODAL_HOUSE_INFO.style.visibility = 'visible';
        RENT_BUTTON.setAttribute("onclick", `rentHouse(${MODAL_NUMBER})`);
    }
}

function rentHouse(NUMBER) {
    const ID = Date.now();
    CART[ID] = `${NUMBER},${TRIP_START.value},${TRIP_END.value}`;
    MODAL_PRICE.innerHTML = "Añadido a la cesta."

}



