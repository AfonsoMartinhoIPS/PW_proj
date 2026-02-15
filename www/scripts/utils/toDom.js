/**
 * @author Professor Rui Neves.
 * Creates, using the Node and HTMLElement interface, an HTML element
 * @param {string|Array} tag - HTML tag or an array to be converted to DOM
 * @param {Object|string} [attributes] - attributes of the element, if it is a string it will be "styles"
 * @param {Array.<HTMLElement|string>} children - children of the element
 * @returns {HTMLElement} HTML element created
 */
export function toDom(tag, attributes = {}, ...children) {
    let result;
    if (Array.isArray(tag)) {
        result = toDom(...tag);
    } else {
        result = document.createElement(tag);
        if (typeof attributes === "string") {
            result.style.cssText = attributes;
        } else {
            let style = attributes.style || {};
            delete attributes.style;
            Object.assign(result, attributes);
            if (typeof style === "string") {
                result.style.cssText = style;
            } else {
                Object.assign(result.style, style);
            }
        }
        children.forEach((child) => child && result.append(Array.isArray(child) ? toDom(...child) : child));
    }
    return result;
}

export function clearSection(section) {
    if (section) {
        section.innerHTML = "";
    }
}

export function dropDown(list, listName) {
    let listSize = list.length;

    let id = listName.toLowerCase();

    let container = toDom("div", { id: `${listName}` });

    let dropDownList = toDom("select", { id: id, name: id });

    for (let i = 0; i < listSize; i++) {
        dropDownList.appendChild(
            toDom("option", { value: `${list[i].id}` }, `${list[i].description}`)
        );
    }

    container.appendChild(toDom("label", {htmlFor: id , name: `${listName}`}, `${listName}:`));
    container.appendChild(dropDownList);

    return container;
}
