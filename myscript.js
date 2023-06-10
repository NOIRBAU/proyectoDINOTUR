// NAVBAR //

const iconoMenu = document.querySelector('.icono__menu')
const iconoMenuB = document.querySelector('.icono__menu i')
const menuLateral = document.querySelector('.menu__lateral')

iconoMenu.onclick = function () {
    menuLateral.classList.toggle('abierto')
    const isOpen = menuLateral.classList.contains('abierto')
}

// POPUP IMAGE GALLERY //

document.querySelectorAll('.gallery__figure img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.modal__gallery').style.display = 'block';
        document.querySelector('.modal__gallery img').src = image.getAttribute('src');
    }
});

document.querySelector('.modal__gallery span').onclick = () =>{
    document.querySelector('.modal__gallery').style.display = 'none';
}

// FORMULARIO //

const fullName =document.getElementById('fullName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById("form");
const readyInputs = document.querySelectorAll(".input-box");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion == true) {
        sendForm();
    }
});

function validacionForm () {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    readyInputs.forEach(element => {
    element.lastElementChild.innerHTML ="";
    });

    if (fullName.value.length < 1 || fullName.value.trim() == "") {
        showErrorMessage("fullName", "Invalid name*");
        condicion = false;
    }
    if (email.value.length < 1 || email.value.trim() == "") {
        showErrorMessage("email", "Invalid mail*");
        condicion = false;
    }
    if (
        phoneNumber.value.length != 9 ||
        phoneNumber.value.trim() == "" ||
        isNaN(phoneNumber.value)
    ) {
        showErrorMessage("phoneNumber", "Invalid phone number*");
        condicion = false;
    }
    if (subject.value.length < 1 || subject.value.trim() == "") {
        showErrorMessage("subject", "Invalid subject");
        condicion = false;
    }
    if (message.value.length < 1 || message.value.trim() == "") {
        showErrorMessage("message", "Invalid message");
        condicion = false;
    }
    return condicion;
}

function showErrorMessage(claseInput, message) {
    let element = document.querySelector(`.${claseInput}`);
    element.lastElementChild.innerHTML = message;
}

function sendForm () {
    form.reset();
    form.lastElementChild.innerHTML = "Checked !!";
}

// SCROLL UP //

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.goTop__container')
        .classList.add('show');
    }else{
        document.querySelector('.goTop__container')
        .classList.remove('show');
    }   
}

document.querySelector('.goTop__container')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});