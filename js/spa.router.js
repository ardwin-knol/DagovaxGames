/*
 * router.js
 * Router module for interfacing between spa and page.js library.
 *
 * Requires pagejs. Pagejs fires the related callback when a route has been activated.
 * If no callback has been provided the router takes the default callback.
 *
 *
 */
/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : true
 */
/*global $, spa, page */
spa.router = (function () {
//---------------- BEGIN MODULE SCOPE VARIABLES --------------
    var
        configMap = {
            settable_map: {}
        },
        stateMap = {$container: null},
        jqueryMap = {},
        setJqueryMap,
        showHomepage,
        showHollandTotalWarPage,
        showIsraelModPage,
        showPraetorianCohortPage,
        showContactPage,
        showGamePage,
        configModule, initModule;
//----------------- END MODULE SCOPE VARIABLES ---------------


//------------------- BEGIN UTILITY METHODS ------------------
// example : getTrimmedString
//-------------------- END UTILITY METHODS -------------------


//--------------------- BEGIN DOM METHODS --------------------
// Begin DOM method /setJqueryMap/
    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap = {
            $page_container: $container.find('.spa-shell-main-content')
        };
    };

    showHomepage = function () {
        var html = spa.template
            .parseTemplate('features.home.home', {});
        jqueryMap.$page_container.html(html);
    };

    showHollandTotalWarPage = function () {
        var html = spa.template
            .parseTemplate('features.hollandtw.hollandtw', {});
        jqueryMap.$page_container.html(html);
    };

    showIsraelModPage = function () {
        var html = spa.template
            .parseTemplate('features.israelmod.israelmod', {});
        jqueryMap.$page_container.html(html);
    };

    showPraetorianCohortPage = function () {
        var html = spa.template
            .parseTemplate('features.praetorian_cohort.praetorian_cohort', {});
        jqueryMap.$page_container.html(html);
    };

    showGamePage = function () {
        var html = spa.template
            .parseTemplate('features.game.game', {});
        jqueryMap.$page_container.html(html);
    };

    showContactPage = function () {
        var html = spa.template
            .parseTemplate('features.contact.contact', {});
        jqueryMap.$page_container.html(html);
    };

// End DOM method /setJqueryMap/
//---------------------- END DOM METHODS ---------------------


//------------------- BEGIN EVENT HANDLERS -------------------
// example: onClickButton = ...
//-------------------- END EVENT HANDLERS --------------------


//------------------- BEGIN PUBLIC METHODS -------------------
// Begin public method /configModule/
// Purpose : Adjust configuration of allowed keys
// Arguments : A map of settable keys and values
// * color_name - color to use
// Settings :
// * configMap.settable_map declares allowed keys
// Returns : true
// Throws : none
//
    configModule = function (input_map) {
        spa.butil.setConfigMap({
            input_map: input_map,
            settable_map: configMap.settable_map,
            config_map: configMap
        });
        return true;
    };
// End public method /configModule/
// Begin public method /initModule/
// Purpose : Initializes module
// Arguments :
// * $container the jquery element used by this feature
// Returns : true
// Throws : nonaccidental
//
    initModule = function ($container) {
        stateMap.$container = $container;
        setJqueryMap();

        page.base('');
        page('/', showHomepage);
        page('/home', showHomepage);
        page('/holland-total-war', showHollandTotalWarPage);
        page('/israel-mod', showIsraelModPage);
        page('/praetorian-cohorts', showPraetorianCohortPage);
        page('/game', showGamePage);
        page('/contact', showContactPage);
        page();

        return true;
    };


// End public method /initModule/
// return public methods
    return {
        configModule: configModule,
        initModule: initModule
    };
//------------------- END PUBLIC METHODS ---------------------
}());