import { addChildElement } from "./functions";
import Krabbs from "./mr-krabbs.png";

const loadContact = () => {
    content.className = 'contact';
    let leftDiv = addChildElement(content, 'div', '.left');
    createInfoBox(leftDiv);
    createSchedule(leftDiv);
    let imgDiv = addChildElement(content, 'div', '.image');
    let img = addChildElement(imgDiv, 'img');
    img.src = Krabbs;
    contact.disabled = true;
}

function createInfoBox (left) {
    let div = addChildElement(left, 'div');
    let h3 = addChildElement(div, 'h3');
    h3.textContent = 'Contact Us!';
    let num = addChildElement(div, 'p');
    num.textContent = '777-555-332';
    let mail = addChildElement(div, 'p');
    mail.textContent = 'krustykrab@bikinibottom.com';
}

function createSchedule(left) {
    let div = addChildElement(left, 'div');
    let h3 = addChildElement(div, 'h3');
    h3.textContent = 'Hours';
    let weekdays = addChildElement(div, 'p');
    weekdays.textContent = 'Weekdays: 8:00 AM ~ 8:00 PM';
    let weekend = addChildElement(div, 'p');
    weekend.textContent = 'Weekend: 10:00 AM ~ 10:00 PM';
}

export {loadContact};