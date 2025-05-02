'use strict'; //El código a continuación DEBE seguir la ley de JavaScript al pie de la letra

var moment = require('moment'); //import moment from 'moment'; (también funcionaría)
/**
* Returns a string element with a footer and updating year
* @param {string) name (La función va a esperar un parámetro de string. El nombre del argumento es "name")
* @return {string}
*/
exports.footer = function (name) {
return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};
