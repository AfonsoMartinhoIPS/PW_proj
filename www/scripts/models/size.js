"use strict"

import { data } from '../utils/data.js';

export class SizeList {
    #list;
    constructor() {
        this.#list = [];
        this.#populate();
    }

    add(newSize) {
        this.#list.push(new Size(newSize));
    }

    remove(size) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].size === size) {
                return this.#list.splice(i, 1);
            }
        }
    }

    get getList() {
        return this.#list.slice();
    }

    getSize(id) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].id === id) {
                return this.#list[i].id;
            }
        }
    }

    #populate() {
        for (let i = 0; i < 4; i++) {
            this.add(data.size[i].description);
        }
    }

    getOrderedList(text, order) {
        let filteredList = this.#list.filter(item =>
            item.size.toLowerCase().includes(text.toLowerCase())
        );

        filteredList.sort((a, b) => {
            const nameA = a.size.toLowerCase();
            const nameB = b.size.toLowerCase();

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

class Size {
    static _currentId = 1;
    #id;
    #description;
    constructor(description) {
        this.#id = Size._currentId++;
        this.#description = description;
    }

    get size() {
        return this.#description;
    }

    set size(newDescription) {
        this.#description = newDescription;
    }

    get id() {
        return this.#id;
    }
}