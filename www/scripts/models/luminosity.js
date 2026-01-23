"use strict"

import { data } from '../utils/data.js';

export class LuminosityList {
    #list;
    constructor() {
        this.#list = [];
        this.#populate();
    }

    add(newLuminosity) {
        this.#list.push(new Luminosity(newLuminosity));
    }

    remove(luminosity) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].luminosity === luminosity) {
                return this.#list.splice(i, 1);
            }
        }
    }

    get getList() {
        return this.#list.slice();
    }

    getLuminosity(id) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].id === id) {
                return this.#list.id;
            }
        }
    }

    #populate() {
        for (let i = 0; i < 4; i++) {
            this.add(data.luminosity[i].description);
        }
    }

    getOrderedList(text, order) {
        let filteredList = this.#list.filter(item =>
            item.luminosity.toLowerCase().includes(text.toLowerCase())
        );

        filteredList.sort((a, b) => {
            const nameA = a.luminosity.toLowerCase();
            const nameB = b.luminosity.toLowerCase();

            if (order === "asc") {
                return nameA.localeCompare(nameB);
            } else if (order === "desc") {
                return nameB.localeCompare(nameA);
            }
            return 0;
        });

        return filteredList;
    }

}

export class Luminosity {
    static _currentId = 1;
    #id;
    #description;
    constructor(description) {
        this.#id = Luminosity._currentId++;
        this.#description = description;
    }

    get luminosity() {
        return this.#description;
    }

    set luminosity(newDescription) {
        this.#description = newDescription;
    }

    get id() {
        return this.#id;
    }
}