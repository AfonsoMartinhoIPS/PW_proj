"use strict"

import { data } from './data.js';

import { GenusList } from './genus.js';
import { TypeList } from './type.js';
import { LuminosityList } from './luminosity.js';
import { TemperatureList } from './temperature.js';
import { HumidityList } from './humidity.js';
import { SizeList } from './size.js';

export class OrchidList {
    #list;
    constructor() {
        this.#list = [];
    }

    add(
        newOrchid,
        genusList,
        typeList,
        luminosityList,
        temperatureList,
        humidityList,
        sizeList
    ) {
        this.#list.push(new Orchid(
            newOrchid.description,
            genusList.getGenus(newOrchid.genus),
            typeList.getType(newOrchid.type),
            luminosityList.getLuminosity(newOrchid.luminosity),
            temperatureList.getTemperature(newOrchid.temperature),
            humidityList.getHumidity(newOrchid.humidity),
            sizeList.getSize(newOrchid.size),
            newOrchid.src
        ));
    }

    remove(orchid) {
        let listLength = this.#list.length;
        for (let i = 0; i < listLength; i++) {
            if (this.#list[i].orchid === orchid) {
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

    populate(
        genusList,
        typeList,
        luminosityList,
        temperatureList,
        humidityList,
        sizeList
    ) {
        for (let i = 0; i < 25; i++) {
            this.add(
                data.orchid[i],
                genusList,
                typeList,
                luminosityList,
                temperatureList,
                humidityList,
                sizeList,
            );
        }
    }

}

export class Orchid {
    static _currentId = 1;
    #id;
    #description;
    #genus;
    #type;
    #luminosity;
    #temperature;
    #humidity;
    #size;
    #src;

    constructor(
        description,
        genus,
        type,
        luminosity,
        temperature,
        humidity,
        size,
        src
    ) {
        this.#id = Orchid._currentId++;
        this.#description = description;
        this.#genus = genus;
        this.#type = type;
        this.#luminosity = luminosity;
        this.#temperature = temperature;
        this.#humidity = humidity;
        this.#size = size;
        this.#src = src;
    }

    get id() {
        return this.#id;
    }

    get description() {
        return this.#description;
    }

    get genus() {
        return this.#genus;
    }

    get type() {
        return this.#type;
    }

    get luminosity() {
        return this.#luminosity;
    }

    get temperature() {
        return this.#temperature;
    }

    get humidity() {
        return this.#humidity;
    }

    get size() {
        return this.#size;
    }

    get src() {
        return this.#src;
    }

    set description(Description) {
        this.#description = Description;
    }

    set genus(Genus) {
        this.#genus = Genus;
    }

    set type(Type) {
        this.#type = Type;
    }

    set luminosity(Luminosity) {
        this.#luminosity = Luminosity;
    }

    set temperature(Temperature) {
        this.#temperature = Temperature;
    }

    set humidity(Humidity) {
        this.#humidity = Humidity;
    }

    set size(Size) {
        this.#size = Size;
    }

    set src(Src) {
        this.#src = Src;
    }
}