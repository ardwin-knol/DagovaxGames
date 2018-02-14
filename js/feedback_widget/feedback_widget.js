function FeedbackWidget(wrapper_id) {
    this.wrapper_id = '#' + wrapper_id;
    this.isInit = false;
    this.open = open;
    this.close = close;
    this.init = init;

    function init(id) {
        this.isInit = true;
        var feedback_id = '#' + id;
        var isAnimated = false;

        $(this.wrapper_id).on('click', function (e) {
            e.stopPropagation();
            if (!isAnimated) {
                (feedback_id).open();
                isAnimated = true;
            }
            else if (isAnimated) {
                (feedback_id).close();
                isAnimated = false;
            }
        });
    }

    function open() {
            $(this.feedback_id).animate({
                'left': '75%',
            }, 1000);
    }

    function close() {
            $(this.feedback_id).animate({
                'left': '97.5%',
            }, 1000);
    }

    $(function () {
        var feedbackWidget = new FeedbackWidget('widget-content');
        feedbackWidget.init('widget-content');
    });
};









// function FeedbackWidget(wrapper_id) {
//     this.wrapper_id = '#' + wrapper_id;
//     this.isInit = false;
//     this.show = show;
//     this.hide = hide;
//     this.init = init;
//
//     function init(id) {
//         this.isInit = true;
//         var feedback_id = '#' + id;
//         var visible = false;
//
//         $(this.wrapper_id).append($('<img>',
//             {
//                 id: 'feedback-image',
//                 src: '../resources/feedback-image'
//             }));
//
//         $(this.wrapper_id).on('click', function (e) {
//             e.stopPropagation();
//             if(visible){
//                 $(feedback_id).hide();
//                 visible = false;
//             }else{
//                 $(feedback_id).show();
//                 visible = true;
//             }
//
//         });
//     };
//
//     function show() {
//         $(this.feedback_id).fadeIn();
//     }
//
//     function hide() {
//         $(this.feedback_id).hide();
//     }
// }
//
// $(function () {
//     var feedbackWidget = new FeedbackWidget('wrapper');
//     feedbackWidget.init('feedback-widget');
// });

// $(document).ready(function FeedbackWidget(){
//
//     $('#widget-content > #widget').on('click', function (){
//         var isClicked = false;
//         if (!isClicked) {
//             var col =$('#widget-content')
//             col
//                 .css({
//                     'left': '75%'
//                 })
//                 .animate({
//                     'left': '75%'
//                 });
//             isClicked = true;
//         }
//         else{
//             var col =$('#widget-content')
//             col
//                 .css({
//                     'left' : '97.5%'
//                 })
//                 .animate({
//                     'left' : '97.5%'
//                 });
//             isClicked = false;
//             }
//     });
// });
