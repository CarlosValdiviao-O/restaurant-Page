import { addChildElement } from "./functions";

const loadMenu = () => {
    content.className = 'menu';
    let shoes = option('Shoes', 'yuuum');
    let socks = option('Socks', 'iaosmias');
    menu.disabled = true;
}

const option =  (title, para) => {
    let container = addChildElement(content, 'div', '.option');
    let img = addChildElement(container, 'div', '.img');
    let h3 = addChildElement(container, 'h3');
    h3.textContent = title;
    let p = addChildElement(container, 'p');
    p.textContent = para;
    return {h3, p, img};
}

export {loadMenu};