import { addChildElement } from "./functions";
import Image from "./krusty-krab.png"

const loadHome = () => {
    content.className = 'home';
    createInfoBox();
    let div = addChildElement(content, 'div', '.image-div');
    let img = addChildElement(div, 'img');
    img.src = Image;
    home.disabled = true;
}

function createInfoBox () {
    let div = addChildElement(content, 'div');
    let h1 = addChildElement(div, 'h1');
    h1.textContent = 'Krusy Krab';
    let p = addChildElement(div, 'p');
    p.textContent = 'Welcome to the Krusty Krab! We are waiting for your money!.... and you obviously.';
}

export {loadHome};