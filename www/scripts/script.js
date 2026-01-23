"use strict"

import {MenuGenus} from './ui/menus/MenuGenus.js'

import {toDom} from './utils/toDom.js'
import { MenuControl } from './MenuControl.js';
let header, main, footer;

let menu = null;

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
            toDom(
                "li",
                {},
                toDom(
                    "a",
                    {
                        href: "#",
                        id: "menu",
                        onclick: (e) => {
                            e.preventDefault();
                            clearMain();
                            menu.showMenuList();
                        }
                    },
                    "Menu")),
            toDom("li", {}, toDom("a", {}, "Share")),
            toDom("li"),
            toDom("li")
        )
    );
}

function createMain() {


    return toDom(
        "main",
        {}
    );
}

/**
 * Remove todo o conteúdo de dentro do elemento <main>.
 */
function clearMain() {
    if (main) {
        main.innerHTML = "";
    }
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

/*to do
function search(){}
function create(){}
function delete(){}
function edit(){}
*/

window.onload = () => {
    document.body.append(header = createHeader(), main = createMain(), footer = createFooter());

    menu = new MenuControl(main);
};
