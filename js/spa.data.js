spa.data = (function () {
    'use strict';
    var
        configMap = {
            url: spa.model.praetorianCohort.getData()

        },
        ajax;

    ajax = {
        get: function (route) {

            var soldierData = configMap.url,
                _ajaxConfig = {
                    dataType: 'json',
                    contentType: 'application/json',
                    type: 'get',
                    complete: function (data) {
                        //TODO na success dan ....
                    }
                };

            return $.ajax(soldierData, _ajaxConfig)
                .catch(function (err) {
                    //TODO err implementatie.... spa.feedbackWidget
                    // .showError('Het is niet gelukt om de gegevens op te halen.');
                })
        }
    };

    return {
        ajax: ajax
    };

}());