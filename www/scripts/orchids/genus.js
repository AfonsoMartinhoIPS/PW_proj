"use strict"

import { data } from './data.js';

export class GenusList {
    #list;
    constructor() {
        this.#list = [];
        this.#populate();
    }

    add(newGenus, src = "") {
        this.#list.push(new Genus(newGenus, src));
    }

    remove(genus) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].genus === genus) {
                return this.#list.splice(i, 1);
            }
        }
    }

    get getList() {
        return this.#list.slice();
    }

    getGenus(id) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].id === id) {
                return this.#list[i];
            }
        }
        return void 0;
    }

    #populate() {
        for (let i = 0; i < 5; i++) {
            this.add(data.genus[i].description, `/www/images/genus/${data.genus[i].description}.png`);
        }
    }
}

export class Genus {

    static _currentId = 1;

    #id;
    #description;
    #src;

    constructor(description, src = "") {
        this.#id = Genus._currentId++;
        this.#description = description;
        this.#src = src;
    }

    get id() {
        return this.#id;
    }

    get genus() {
        return this.#description;
    }

    get src() {
        return this.#src;
    }

    set genus(newDescription) {
        this.#description = newDescription;
    }

    set src(src) {
        this.#src = path;
    }
}