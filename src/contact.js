import { addChildElement } from "./functions";

const loadContact = () => {
    content.className = 'contact';
    createInfoBox();
    createSchedule();
    contact.disabled = true;
}

function createInfoBox () {
    let div = addChildElement(content, 'div');
    let h3 = addChildElement(div, 'h3');
    h3.textContent = 'Contact Us!';
    let num = addChildElement(div, 'p');
    num.textContent = '777-555-332';
    let mail = addChildElement(div, 'p');
    mail.textContent = 'krustykrab@bikinibottom.com';
}

function createSchedule() {
    let div = addChildElement(content, 'div');
    let h3 = addChildElement(div, 'h3');
    h3.textContent = 'Hours';
    let weekdays = addChildElement(div, 'p');
    weekdays.textContent = 'Weekdays: 8:00 AM ~ 8:00 PM';
    let weekend = addChildElement(div, 'p');
    weekend.textContent = 'Weekend: 10:00 AM ~ 10:00 PM';
}

export {loadContact};