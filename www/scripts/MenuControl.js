import { GenusList } from './models/genus.js';
import { TypeList } from './models/type.js';
import { LuminosityList } from './models/luminosity.js';
import { TemperatureList } from './models/temperature.js';
import { HumidityList } from './models/humidity.js';
import { SizeList } from './models/size.js';
import { OrchidList } from './models/orchid.js';

let genusList = new GenusList();
let typeList = new TypeList();
let luminosityList = new LuminosityList();
let temperatureList = new TemperatureList();
let humidityList = new HumidityList();
let sizeList = new SizeList();
let orchidList = new OrchidList();

const MENU_MAP = {
    "Genus": { list: genusList, class: MenuGenus },
    "Humidity": { list: humidityList, class: MenuHumidity },
    "Luminosity": { list: luminosityList, class: MenuLuminosity },
    "Orchid": { list: orchidList, class: MenuOrchid },
    "Size": { list: sizeList, class: MenuSize },
    "Temperature": { list: temperatureList, class: MenuTemperature },
    "Type": { list: typeList, class: MenuType },
};

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
import { MenuHumidity } from './ui/menus/MenuHumidity.js';
import { MenuLuminosity } from './ui/menus/MenuLuminosity.js';
import { MenuOrchid } from './ui/menus/MenuOrchid.js';
import { MenuSize } from './ui/menus/MenuSize.js';
import { MenuTemperature } from './ui/menus/MenuTemperature.js';
import { MenuType } from './ui/menus/MenuType.js';
import { DefaultMenu } from './ui/menus/DefaultMenu.js';

export class MenuControl {
    #currentMenu;
    #menuSection;

    constructor(menuSection) {
        this.#menuSection = menuSection
        this.#currentMenu = new DefaultMenu([], this);
    }

    set menuSection(newSection) {
        this.#menuSection = newSection;
    }

    menuOption(option) {
        const config = MENU_MAP[option];
        if (config) {
            this.#currentMenu = new config.class(config.list, this);
            this.#currentMenu.showMenu(this.#menuSection);
        } else {
            alert("Option not found");
        }
    }

    showMenuList() {
        this.#currentMenu = new Menu([], this);
        this.#currentMenu.showMenuList(this.#menuSection);
    }

    search() {
        this.#currentMenu.search(this.#menuSection);
    }

    editMenu(item){
        let list = [ genusList, typeList, luminosityList, orchidList, temperatureList, humidityList, sizeList]
        this.#currentMenu.showEditMenu(item, this.#menuSection, list);
    }

    applyChanges(item){
        let list = [ genusList, typeList, luminosityList, orchidList, temperatureList, humidityList, sizeList]
        this.#currentMenu.applyEdit(item, list);
    }

}