// function FeedbackWidget(image_id) {
//     this.image_id = '#' + image_id;
//     this.isInit = false;
//     this.open = open;
//     this.close = close;
//     this.init = init;
//
//     function init(id) {
//         this.isInit = true;
//         var feedback_id = '#' + id;
//         var isAnimated = false;
//
//         $(this.image_id).on('click', function () {
//             if (!isAnimated) {
//                 $feedback_id.open();
//                 isAnimated = true;
//                 console.log(isAnimated);
//                 console.log('showing widget...');
//             }
//             else if (isAnimated) {
//                 $feedback_id.close();
//                 isAnimated = false;
//                 console.log(isAnimated);
//                 console.log('hiding widget...');
//             }
//         });
//     }
//
//     function open() {
//             $(this.feedback_id).animate({
//                 'left': '75%'
//             }, 1000);
//     }
//
//     function close() {
//             $(this.feedback_id).animate({
//                 'left': '97.5%'
//             }, 1000);
//     }
//
//     $(function () {
//         var feedbackWidget = new FeedbackWidget('widget-content');
//         feedbackWidget.init('top-image');
//     });
// };



$(document).ready(function FeedbackWidget(){
    //removes availabilty of the user to drag the images
    $('img').on('dragstart', function(event) { event.preventDefault(); });

    var isClicked = false;

    $('#top-image').click(function (){
        open();
    });

    $('#widget-top img').click(function (){
        close();
    });

    function close() {
            $('#widget-content').animate({
                'left': '97.5%'
            }, 1000);
            $('#top-image img').animate({
                opacity:1
            }, 1000);
            isClicked = false;
    }

    function open() {
            $('#widget-content').animate({
                'left': '75%'
            }, 1000);
            $('#top-image img').animate({
                opacity:0
            }, 1000);
            isClicked = true;
    }
});
