/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
    let newObj = {};

    for (key in obj) {
        newObj[key] = obj[key];
    }

    return newObj;
}