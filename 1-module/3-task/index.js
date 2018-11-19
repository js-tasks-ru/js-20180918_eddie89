'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

    function isString(value) {
        return typeof value === "string";
    }

    if (!isString(str)) {
        return;
    }

    let val = parseFloat(str);
    let min;
    let max;

    while (!isNan(val)) {

    }

}