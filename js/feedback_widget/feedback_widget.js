function FeedbackWidget(wrapper_id) {
    this.wrapper_id = '#' + wrapper_id;
    this.isInit = false;
    this.show = show;
    this.hide = hide;
    this.init = init;

    function init(id) {
        this.isInit = true;
        var feedback_id = '#' + id;
        var visible = false;

        $(this.wrapper_id).append($('<img>',
            {
                id: 'feedback-image',
                src: '../resources/feedback-image'
            }));

        $(this.wrapper_id).on('click', function (e) {
            e.stopPropagation();
            if(visible){
                $(feedback_id).hide();
                visible = false;
            }else{
                $(feedback_id).show();
                visible = true;
            }

        });
    };

    function show() {
        $(this.feedback_id).fadeIn();
    }

    function hide() {
        $(this.feedback_id).hide();
    }
}

$(function () {
    var feedbackWidget = new FeedbackWidget('wrapper');
    feedbackWidget.init('feedback-widget');
});
