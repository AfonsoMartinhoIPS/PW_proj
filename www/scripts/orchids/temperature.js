"use strict"

import { data } from './data.js';

export class TemperatureList {
    #list;
    constructor() {
        this.#list = [];
        this.#populate();
    }

    add(newTemperature) {
        this.#list.push(new Temperature(newTemperature));
    }

    remove(temperature) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].temperature === temperature) {
                return this.#list.splice(i, 1);
            }
        }
    }

    get getList() {
        return this.#list.slice();
    }

    getTemperature(id) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].id === id) {
                return this.#list.id;
            }
        }
    }

    #populate() {
        for (let i = 0; i < 4; i++) {
            this.add(data.temperature[i].description);
        }
    }

}

export class Temperature {
    static _currentId = 1;
    #id;
    #description;
    constructor(description) {
        this.#id = Temperature._currentId++;
        this.#description = description;
    }

    get temperature() {
        return this.#description;
    }

    set temperature(newDescription) {
        this.#description = newDescription;
    }

    get id() {
        return this.#id;
    }
}