CLOSE_MODAL.addEventListener('click', () => {
    MODAL_HOUSE_INFO.style.display = 'none';
    
});
CLOSE_CART.addEventListener('click', () => {
    CART_MODAL.style.display = 'none';
    MOBILE_CART.style.display = 'flex';
   
});
MOBILE_CART.addEventListener('click', () => {
    MOBILE_CART.style.display = 'none';
});
FIRST_ICON.addEventListener('click', () => {
    window.location = "#welcome"
});
SECOND_ICON.addEventListener('click', () => {
    window.location = "#house-renting"
});
THIRD_ICON.addEventListener('click', () => {
    window.location = "#client-reviews"
});



window.addEventListener('click', (EVENT) => {
    switch (EVENT.target) {
        case GITHUB_ICON:
            window.open("https://github.com/s-pl");
            break;
        case YT_ICON:
            window.open("https://www.youtube.com/YOUTUBE");
            break;
        case X_ICON:
            window.open("https://x.com/YouTube");
            break;
        case FB_ICON:
            window.open("https://www.facebook.com/youtubes");
            break;
        case CART_ICON:
            showCart();
            break;
    }
});