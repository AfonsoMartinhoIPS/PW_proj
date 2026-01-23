import { clearSection, toDom } from '../../utils/toDom.js';

export class Menu {
    #listInstance;
    #controller;

    constructor(listInstance = [], controller = null) {
        this.#listInstance = listInstance;
        this.#controller = controller;
    }

    showMenuList(section) {
        let menu = ["Genus", "Humidity", "Luminosity", "Orchid", "Size", "Temperature", "Type"];
        let menuSize = menu.length;
        let toDomList = [];

        for (let i = 0; i < menuSize; i++) {
            toDomList[i] = toDom(
                "li",
                {},
                toDom(
                    "a",
                    {
                        href: "#",
                        onclick: (e) => {
                            e.preventDefault();
                            this.#controller.menuOption(e.currentTarget.innerText);
                        }
                    },
                    menu[i]
                )
            );
        }

        menu = null;
        menu = toDom(
            "section",
            { className: "flowers" },
            toDom(
                "ul",
                {},
                ...toDomList
            )
        )
        section.append(menu);
    }

    menuLayout() {
        return toDom(
            "section",
            { id: `menu-${this.#listInstance.constructor.name}` },
            toDom(
                "section",
                { id: "search-section" }
            ),
            toDom(
                "section",
                { id: "results-section" }
            ));
    }

    searchForm() {
        return toDom(
            "form",
            {
                onsubmit: (e) => {
                    e.preventDefault();
                    this.search();
                }
            },

            toDom(
                "span",
                { className: "radioOrder" },
                toDom(
                    "label",
                    {},
                    "A-Z",
                    toDom(
                        "input",
                        { type: "radio", name: "radio", value: "asc", checked: "true" },
                    )
                ),

                toDom(
                    "label",
                    {},
                    "Z-A",
                    toDom(
                        "input",
                        { type: "radio", name: "radio", value: "desc" },
                    )
                )
            ),

            toDom(
                "input",
                {
                    type: "text",
                    //placeholder: `Pesquisar por ${this.#listInstance[0].constructor.name}...`,
                    id: "search-input"
                }),

            toDom(
                "input",
                { type: "submit", value: "Search" }
            )
        )
    }

    searchResults() {
        let results = document.getElementById("results-section");

        if (results) {
            results.innerHTML = "";
        }

        let orderList = document.getElementsByName("radio");

        if (orderList[0].checked) {
            return this.#listInstance.getOrderedList(document.getElementById("search-input").value, orderList[0].value);
        } else {
            return this.#listInstance.getOrderedList(document.getElementById("search-input").value, orderList[1].value);
        }
    }

    search(){
        this.showResults(this.searchResults());
    }

    showMenu(section) {
        clearSection(section);
        section.append(this.menuLayout());
        document.getElementById("search-section").append(this.searchForm());
    }
}