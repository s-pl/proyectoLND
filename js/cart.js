function showCart() {
    CART_MODAL.style.display = "flex";
    CART_CONTENT.innerHTML = "";


    if (Object.keys(CART).length === 0) {
        CART_CONTENT.innerHTML = "<p>No hay casas en la cesta.</p>";
    } else {
        for (const HOUSE_ID in CART) {
            const HOUSE_DETAILS = CART[HOUSE_ID].split(',');
            const HOUSE_INDEX = parseInt(HOUSE_DETAILS[0]) - 1;
            const HOUSE = HOUSES[HOUSE_INDEX];
            const TRIP_START = HOUSE_DETAILS[1];
            const TRIP_END = HOUSE_DETAILS[2]; 
            const TOTAL_PRICE = (parseInt(TRIP_END.split("-")[2]) - parseInt(TRIP_START.split("-")[2])) * Number(HOUSE.price.replace('€', '').replace(' por noche', ''));
           
            const HOUSE_ITEM = document.createElement('div');
            HOUSE_ITEM.classList.add('cart-item');
            HOUSE_ITEM.innerHTML = `
  <div class="house-list-item">
    <img src="${HOUSE.image}" alt="${HOUSE.title}">
    <div>
      <h4>${HOUSE.title}</h4>
      <p>Desde: ${TRIP_START} hasta: ${TRIP_END}</p>
      <p>Precio: ${TOTAL_PRICE} E. Total</p>
    </div>
    <button onclick="removeFromCart('${HOUSE_ID}')">Eliminar</button>
  </div>
`;
            CART_CONTENT.appendChild(HOUSE_ITEM);
        }
    }
}



function removeFromCart(HOUSE_ID) {
    delete CART[HOUSE_ID];
    showCart();
}