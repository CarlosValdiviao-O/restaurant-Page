import { addChildElement } from "./functions";

const loadHome = () => {
    content.className = 'home';
    createInfoBox();
    let img = addChildElement(content, 'div', '.image')
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