import { toDom } from '../../utils/toDom.js';
import { Menu } from './Menu.js';

export class MenuSize extends Menu {
    constructor(instanceList) {
        super(instanceList)
    }

    showResults(resultsList = [], section = document.getElementById("results-section")) {
        let listSize = resultsList.length;


        for (let i = 0; i < listSize; i++) {
            section.append(
                toDom(
                    "span",
                    { id: `${resultsList[i].id}` },
                    `${resultsList[i].size}`
                )
            )
        }
    }
}