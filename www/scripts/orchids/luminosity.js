"use strict"

import { data } from './data.js';

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