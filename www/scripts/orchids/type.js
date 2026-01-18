"use strict";

import { data } from './data.js';

export class TypeList {
    #list;
    constructor() {
        this.#list = [];
        this.#populate();
    }

    add(newType) {
        this.#list.push(new Type(newType));
    }

    remove(type) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].type === type) {
                return this.#list.splice(i, 1);
            }
        }
    }

    get getList() {
        return this.#list.slice();
    }

    getType(id) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].id === id) {
                return this.#list[i];
            }
        }
    }

    #populate() {
        for (let i = 0; i < 2; i++) {
            this.add(data.type[i].description);
        }
    }
}

export class Type {
    static _currentId = 1;
    #id;
    #description;
    constructor(description) {
        this.#id = Type._currentId++;
        this.#description = description;
    }

    get type() {
        return this.#description;
    }

    set type(newDescription) {
        this.#description = newDescription;
    }

    get id() {
        return this.#id;
    }
}