"use strict";
/* -------------------------------------------------------
   * EXPRESS - FLIGHT API
------------------------------------------------------- */

// dateToLocalString(date: Date()):

module.exports = function(dataData) {
    return dataData.toLocalString('tr-tr', {dateStyle :'full',timesStyle: 'medium' })
}