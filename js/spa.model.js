/*
 * module_template.js
 * Template for browser feature modules
 */
/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : true
 */
/*global $, spa */
spa.model = (function () {
//---------------- BEGIN MODULE SCOPE VARIABLES --------------
    var
        gameName,
        unitSize,
        weapon,
        armor,
        faction, initModule, stateMap,
        //praetorianCohort = { gameName, unitSize, weapon, armor, faction };

    // The cart object API
    // -------------------
    // The cart object is available at spa.model.cart.
    // The cart object provides methods and events to manage

    praetorianCohort = (function () {
        var getData;

        getData = function () {
            return {
                gameName: 'Rome - Total War',
                unitSize: 80,
                weapon: 'Sword',
                armor: 'Steel plate',
                faction: 'Romans'
            };
        };

        return {
            getData: getData
        };
    }());
//----------------- END MODULE SCOPE VARIABLES ---------------

//------------------- BEGIN PUBLIC METHODS -------------------

    initModule = function ($container) {
        stateMap.$container = $container;

        return true;
    };


    return {
        initModule: initModule,
        praetorianCohort: praetorianCohort
    };
//------------------- END PUBLIC METHODS ---------------------
}());

