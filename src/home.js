import { addChildElement } from "./functions";

const loadHome = () => {
    const div = addChildElement(content, 'div');
    div.textContent = 'home';
    const div2 = addChildElement(content, 'div');
    div2.textContent = 'home';
}

export {loadHome};