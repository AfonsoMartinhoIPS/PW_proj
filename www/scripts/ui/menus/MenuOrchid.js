import { clearSection, toDom, dropDown } from '../../utils/toDom.js';
import { Menu } from './Menu.js';

export class MenuOrchid extends Menu {
    constructor(instanceList, menuControl) {
        super(instanceList, menuControl)
    }

    showResults(resultsList = [], section = document.getElementById("results-section")) {
        let listSize = resultsList.length;

        for (let i = 0; i < listSize; i++) {
            section.append(
                toDom(
                    "div",
                    { className: "entry" },

                    toDom("span",
                        { id: `${resultsList[i].id}` },
                        `${resultsList[i].description}`
                    ),

                    toDom(
                        "button",
                        {
                            onclick: (e) => {
                                e.preventDefault();
                                this._controller.editMenu(resultsList[i].id);
                            }
                        },
                        "Edit"
                    )
                )
            )
        }
    }

    showEditMenu(item, menuSection, fields) {
        clearSection(menuSection);
        let orchid = this._listInstance.getOrchid(item);

        let editMenuSection = toDom(
            "section",
            { className: "edit-section" },
            toDom(
                "h2",
                {},
                `Editing: ${orchid.description}`
            ));

        let form =
            toDom(
                "form",
                { id:"edit-menu",
                    onsubmit: (e) => {
                        e.preventDefault();
                        this._controller.applyChanges();
                    },
                },
                toDom("div",
                    { id: "Description" },
                    toDom(
                        "label",
                        { htmlFor: "description" },
                        "Description:"
                    ),
                    toDom(
                        "input",
                        { type: "text", name: "description", id: "description", value: orchid.description }
                    ),)
            );

        form.appendChild(dropDown(fields[0].getList, "Genus"));
        form.appendChild(dropDown(fields[1].getList, "Type"));
        form.appendChild(dropDown(fields[2].getList, "Luminosity"));
        form.appendChild(dropDown(fields[4].getList, "Temperature"));
        form.appendChild(dropDown(fields[5].getList, "Humidity"));
        form.appendChild(dropDown(fields[6].getList, "Size"));
        form.appendChild(toDom("button", { onclick: (e) => {
                                e.preventDefault();
                                this._controller.applyChanges(item);
                            }},"Apply Changes"));
        editMenuSection.append(form);
        menuSection.append(editMenuSection);
    }

    applyEdit(item, fields) {
        let formData = new FormData(document.getElementById("edit-menu"));

        let newDescription = formData.get("description");
        let newGenus = formData.get("genus");
        let newType = formData.get("type");
        let newLuminosity = formData.get("luminosity");
        let newTemperature = formData.get("temperature");
        let newHumidity = formData.get("humidity");
        let newSize = formData.get("size");
       // alert(`${newDescription},${newGenus}, ${newType}, ${newLuminosity}, ${newTemperature}, ${newHumidity}, ${newSize}`);
        
        let orchid = this._listInstance.getOrchid(item);
        orchid.genus.genus(fields[0].getGenus(newGenus));
        alert(orchid.genus.description);
    }
}