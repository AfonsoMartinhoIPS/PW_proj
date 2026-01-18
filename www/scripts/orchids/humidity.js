"use strict"

import { data } from './data.js';

export class HumidityList {
    #list;
    constructor() {
        this.#list = [];
        this.#populate();
    }

    add(newHumidity) {
        this.#list.push(new Humity(newHumidity));
    }

    remove(humidity) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].humidity === humidity) {
                return this.#list.splice(i, 1);
            }
        }
    }

    get getList() {
        return this.#list.slice();
    }

    getHumidity(id) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].id === id) {
                return this.#list.id;
            }
        }
    }

    #populate() {
        for (let i = 0; i < 4; i++) {
            this.add(data.humidity[i].description);
        }
    }


}

export class Humity {
    static _currentId = 1;
    #id;
    #description;
    constructor(description) {
        this.#id = Humity._currentId++;
        this.#description = description;
    }

    get humidity() {
        return this.#description;
    }

    set humidity(newDescription) {
        this.#description = newDescription;
    }

    get id() {
        return this.#id;
    }
}