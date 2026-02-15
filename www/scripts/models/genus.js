"use strict"

import { data } from '../utils/data.js';

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

    getOrderedList(text, order) {
        let filteredList = this.#list.filter(item =>
            item.genus.toLowerCase().includes(text.toLowerCase())
        );

        filteredList.sort((a, b) => {
            const nameA = a.genus.toLowerCase();
            const nameB = b.genus.toLowerCase();

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

    get description(){
        return this.#description;
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

    set src(newSrc) {
        this.#src = newSrc;
    }
}