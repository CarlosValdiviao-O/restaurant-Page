import { addChildElement } from "./functions";
import Burguer from "./krabby-patty.jpg";
import Pizza from "./krusty-krab-pizza.png";
import Fries from "./kelp-fries.png";
import Combo from "./combo.png"


const loadMenu = () => {
    content.className = 'menu';
    let krabbyPatty = option('Krabby Patty', '5$', Burguer);
    let krustyKrabPizza = option('Krusty Krab Pizza', '8$', Pizza);
    let kelpFries = option('Kelp Fries', '3$', Fries);
    let combo = option('Krabby Combo', '8$', Combo)
    menu.disabled = true;
}

const option =  (title, para, image) => {
    let container = addChildElement(content, 'div', '.option');
    let imgDiv = addChildElement(container, 'div');
    let img = addChildElement(imgDiv, 'img');
    img.src = image;
    let info = addChildElement(container, 'div', '.info');
    let h3 = addChildElement(info, 'h3');
    h3.textContent = title;
    let p = addChildElement(info, 'p');
    p.textContent = para;
    return {h3, p, imgDiv, img};
}

export {loadMenu};