import { addChildElement } from "./functions";

const loadMenu = () => {
    const div = addChildElement(content, 'div');
    div.textContent = 'menu';
    const div2 = addChildElement(content, 'div');
    div2.textContent = 'menu';
}

export {loadMenu};