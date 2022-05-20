import { addChildElement } from "./functions";
import './style.css';
import { loadHome, module2 } from "./home";
import { loadMenu } from "./menu";

const body = document.querySelector('body');
const content = document.querySelector('#content');
const header = addChildElement(body, 'header');
body.insertBefore(header, content);

const nav = addChildElement(header, 'nav');
const home = addChildElement(nav, 'button', '#home');
home.textContent = 'Home';
home.addEventListener('click', removeContents);
home.addEventListener('click', loadHome);

const menu = addChildElement(nav, 'button', '#menu');
menu.textContent = 'Menu';
menu.addEventListener('click', removeContents);
menu.addEventListener('click', loadMenu);

const about = addChildElement(nav, 'button', '#about');
about.textContent = 'About';

loadHome();


function removeContents() {
    for (let i = content.childNodes.length-1; i>=0; i--){
        content.childNodes[i].remove();
    }
}




