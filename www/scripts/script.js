"use strict"

import { GenusList } from './orchids/genus.js';
import { TypeList } from './orchids/type.js';
import { LuminosityList } from './orchids/luminosity.js';
import { TemperatureList } from './orchids/temperature.js';
import { HumidityList } from './orchids/humidity.js';
import { SizeList } from './orchids/size.js';
import { OrchidList } from './orchids/orchid.js';

let genusList = new GenusList();
let typeList = new TypeList();
let luminosityList = new LuminosityList();
let temperatureList = new TemperatureList();
let humidityList = new HumidityList();
let sizeList = new SizeList();
let orchidList = new OrchidList();

orchidList.populate(
    genusList,
    typeList,
    luminosityList,
    temperatureList,
    humidityList,
    sizeList
);


/**
 * @author Professor Rui Neves.
 * Creates, using the Node and HTMLElement interface, an HTML element
 * @param {string|Array} tag - HTML tag or an array to be converted to DOM
 * @param {Object|string} [attributes] - attributes of the element, if it is a string it will be "styles"
 * @param {Array.<HTMLElement|string>} children - children of the element
 * @returns {HTMLElement} HTML element created
 */
function toDom(tag, attributes = {}, ...children) {
    let result;
    if (Array.isArray(tag)) {
        result = toDom(...tag);
    } else {
        result = document.createElement(tag);
        if (typeof attributes === "string") {
            result.style.cssText = attributes;
        } else {
            let style = attributes.style || {};
            delete attributes.style;
            Object.assign(result, attributes);
            if (typeof style === "string") {
                result.style.cssText = style;
            } else {
                Object.assign(result.style, style);
            }
        }
        children.forEach((child) => child && result.append(Array.isArray(child) ? toDom(...child) : child));
    }
    return result;
}

/**
 * Creates the entire <header> element structure.
 * @returns {HTMLElement} The created <header> element.
 */
function createHeader() {
    return toDom(
        "header",
        {},
        toDom(
            "ul",
            {},
            toDom("li", {}, toDom("a", { href: "index.html" }, "Home")),
            toDom("li", {}, toDom("a", { href: "#", id: "menu" }, "Menu")),
            toDom("li", {}, toDom("a", {}, "Share")),
            toDom("li"),
            toDom("li")
        )
    );
}

function createFooter() {
    return toDom(
        "footer",
        {},
        toDom(
            "section",
            {},
            toDom("h3", {}, "Contactos:"),
            toDom(
                "ul",
                {},
                toDom("li", {}, "Tel: 111 111 111"),
                toDom("li", {}, "Email: mail@mail.com"),
                toDom("li", {}, toDom("address", {}, "Rua de lisboa 201-22")),
                toDom("li", {}, "Facebook")
            )
        ),
        toDom(
            "section",
            {},
            toDom("h3", {}, "Suporte:"),
            toDom(
                "ul",
                {},
                toDom("li", {}, "Tel: 999 999 999"),
                toDom("li", {}, "Email: suport@mail.com"),
                toDom("li", {}, "Mapa do site"),
                toDom("li", {}, "Status do servidor")
            )
        ),
        toDom(
            "section",
            {},
            toDom("h3", {}, "Outros:"),
            toDom(
                "ul",
                {},
                toDom("li", {}, "Bla bla bla"),
                toDom("li", {}, "Coisas e etc"),
                toDom("li", {}, "Bla Bla Bla"),
                toDom("li", {}, "HHkhshsfiehwbvtfewbv")
            )
        )
    );
}

function createMain() {
    // 1. Get the list of genus objects
    let allGenus = genusList.getList;
    let listLength = allGenus.length;
    let toDomList = [];

    for (let i = 0; i < listLength; i++) {
        toDomList[i] = toDom(
            "li",
            {},
            toDom(
                "a",
                { href: "index.html" },
                toDom(
                    "img",
                    { src: `${allGenus[i].src}`, alt: allGenus[i].genus}
                )
            )
        )
    }

    return toDom(
        "main",
        {},
        toDom(
            "section",
            { className: "flowers" },
            toDom(
                "ul",
                {},
                ...toDomList
            )
        )
    );
}

window.onload = () => {
    document.body.append(createHeader(), createMain(), createFooter());


};
