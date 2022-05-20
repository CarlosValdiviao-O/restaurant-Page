import { addChildElement } from "./functions";
import './style.css';
import { loadHome, module2 } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

const body = document.querySelector('body');
const content = document.querySelector('#content');

function init () {
    createNav();
    addEvents();
    loadHome();
}

function createNav() {
    const header = addChildElement(body, 'header');
    body.insertBefore(header, content);

    const nav = addChildElement(header, 'nav');
    const home = addChildElement(nav, 'button', '#home');
    home.textContent = 'Home';

    const menu = addChildElement(nav, 'button', '#menu');
    menu.textContent = 'Menu';

    const contact = addChildElement(nav, 'button', '#contact');
    contact.textContent = 'Contact';
}

function addEvents() {
    home.addEventListener('click', removeContents);
    home.addEventListener('click', loadHome);

    menu.addEventListener('click', removeContents);
    menu.addEventListener('click', loadMenu);

    contact.addEventListener('click', removeContents);
    contact.addEventListener('click', loadContact);
}

function removeContents() {
    enableButtons();
    for (let i = content.childNodes.length-1; i>=0; i--){
        content.childNodes[i].remove();
    }
}

function enableButtons() {
    home.disabled = false;
    menu.disabled = false;
    contact.disabled = false;
}

init();





