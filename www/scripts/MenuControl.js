import { GenusList } from './models/genus.js';
import { TypeList } from './models/type.js';
import { LuminosityList } from './models/luminosity.js';
import { TemperatureList } from './models/temperature.js';
import { HumidityList } from './models/humidity.js';
import { SizeList } from './models/size.js';
import { OrchidList } from './models/orchid.js';

import { clearSection } from './utils/toDom.js';

let genusList = new GenusList();
let typeList = new TypeList();
let luminosityList = new LuminosityList();
let temperatureList = new TemperatureList();
let humidityList = new HumidityList();
let sizeList = new SizeList();
let orchidList = new OrchidList();

orchidList.populate(
    genusList,
    typeList,
    luminosityList,
    temperatureList,
    humidityList,
    sizeList
);

import { Menu } from './ui/menus/Menu.js';
import { MenuGenus } from './ui/menus/MenuGenus.js';
import { DefaultMenu } from './ui/menus/DefaultMenu.js';

export class MenuControl {
    #currentMenu;
    #menuSection;

    constructor(menuSection) {
        this.#menuSection = menuSection
        this.#currentMenu = new DefaultMenu([], this);
    }

    set menuSection(newSection){
        this.#menuSection = newSection;
    }

    menuOption(option) {
        switch (option) {
            case "Genus":
                this.#currentMenu = new DefaultMenu(genusList, this);
                this.#currentMenu.showMenu(this.#menuSection);
                break;
            case "Humidity":
                 this.#currentMenu = new DefaultMenu(humidityList, this);
                this.#currentMenu.showMenu(this.#menuSection);
                break;
            case "Luminosity":
               this.#currentMenu = new DefaultMenu(luminosityList, this);
                this.#currentMenu.showMenu(this.#menuSection);
                break;
            case "Orchid":
                this.#currentMenu = new DefaultMenu(orchidList, this);
                this.#currentMenu.showMenu(this.#menuSection);
                break;
            case "Size":
                this.#currentMenu = new DefaultMenu(sizeList, this);
                this.#currentMenu.showMenu(this.#menuSection);
                break;
            case "Temperature":
                this.#currentMenu = new DefaultMenu(temperatureList, this);
                this.#currentMenu.showMenu(this.#menuSection);
                break;
            case "Type":
                this.#currentMenu = new DefaultMenu(typeList, this);
                this.#currentMenu.showMenu(this.#menuSection);
                break;
            default: alert("That is not an option!");
        }
    }
    
    showMenuList(){
        clearSection(this.#menuSection);
        this.#currentMenu = new Menu([], this);
        this.#currentMenu.showMenuList(this.#menuSection);
    }

    search(){
        this.#currentMenu.search(this.#menuSection);
    }

}