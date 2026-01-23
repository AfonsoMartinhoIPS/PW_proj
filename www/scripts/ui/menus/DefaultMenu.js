import { toDom } from '../../utils/toDom.js';
import { Menu } from './Menu.js';

export class DefaultMenu extends Menu {
    constructor(instanceList) {
        super(instanceList)
    }

    showResults(resultsList = [], section = document.getElementById("results-section")) {
        let listSize = resultsList.length;
        let item;

        for (let i = 0; i < listSize; i++) {
            item = resultsList[i];


            let publicProprities = Object.getOwnPropertyNames(Object.getPrototypeOf(item));


            let getterName = publicProprities.find(prop => prop !== 'constructor' && prop !== 'id');

            section.append(toDom(
                "span",
                { id: `${item.id}` },
                `${item[getterName]}`
            ));
        }
    }
}