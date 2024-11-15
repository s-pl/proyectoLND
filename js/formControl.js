const FORM = document.getElementById('form');
const NAME_ERROR = document.getElementById('name-error');
const EMAIL_ERROR = document.getElementById('email-error');
const PHONE_ERROR = document.getElementById('phone-error');
const MSG_ERROR = document.getElementById('msg-error');
const MESSAGE_MODAL = document.getElementById('messageModal');
const CLOSE_MESSAGE_MODAL = document.querySelector('.close-message-modal');
const MODAL_MESSAGE = document.getElementById('modal-message');

FORM.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = FORM.name.value;
    const email = FORM.email.value;
    const phone = FORM.phone.value;
    const msg = FORM.msg.value;

   
    NAME_ERROR.style.display = 'none';
    EMAIL_ERROR.style.display = 'none';
    PHONE_ERROR.style.display = 'none';
    MSG_ERROR.style.display = 'none';

    if (!name) NAME_ERROR.style.display = 'block';
    if (!email) EMAIL_ERROR.style.display = 'block';
    if (!phone) PHONE_ERROR.style.display = 'block';
    if (!msg) MSG_ERROR.style.display = 'block';
   
    if (name && email && phone && msg) {
        localStorage.setItem(Date.now(), JSON.stringify({name, email, phone, msg}));

        
        MODAL_MESSAGE.innerHTML = `Gracias, <strong>${name}</strong>. Hemos recibido tu mensaje: <em>"${msg}"</em>.`;

        // Show the modal
        MESSAGE_MODAL.style.display = 'block';
    }
});


CLOSE_MESSAGE_MODAL.addEventListener('click', () => {
    MESSAGE_MODAL.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target == MESSAGE_MODAL) {
        MESSAGE_MODAL.style.display = 'none';
    }
});
