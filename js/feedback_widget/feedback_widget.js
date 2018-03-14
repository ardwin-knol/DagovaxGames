// $(document).ready(function FeedbackWidget(){
//     //removes availabilty of the user to drag the images
//     $('img').on('dragstart', function(event) { event.preventDefault(); });
//
//     var isClicked = false;
//
//     $('#top-image').click(function (){
//         open();
//     });
//
//     $('#widget-top img').click(function (){
//         close();
//     });
//
//     function close() {
//             $('#widget-content').animate({
//                 'left': '97.5%'
//             }, 1000);
//             $('#top-image img').animate({
//                 opacity:1
//             }, 1000);
//             isClicked = false;
//     }
//
//     function open() {
//             $('#widget-content').animate({
//                 'left': '75%'
//             }, 1000);
//             $('#top-image img').animate({
//                 opacity:0
//             }, 1000);
//             isClicked = true;
//     }
// });

function FeedbackWidget(wrapper_id){

    //removes availabilty of the user to drag the images
    $('img').on('dragstart', function(event) { event.preventDefault(); });

    this.wrapper_id = '#' + wrapper_id;
    this.isInit = false;
    this.open = open;
    this.close = close;
    this.init = init;

    var isClicked = false;
    var close_button;

    function init(open_id, wrapper_id, close_id) {
        this.isInit = true;
        this = '#' + close_id;
        var open_button = '#' + open_id;
        var wrap_id = '#' + wrapper_id;

        $(open_button).on('click', function () {
            console.log(isClicked);
            console.log(wrap_id);

            this.close_button = close_button + ' img';
            console.log(close);

            if(!isClicked) {
                open(open_button, wrap_id);
                isClicked = true;
            }
        });
    };

    //
    // $('#widget-top img').click(function (){
    //     close();
    // });

    $(this.close_button).click (function () {
        console.log(isClicked);

        close(open_button, wrap_id);
        isClicked = false;
    });

    function open(open_button, wrap_id) {
        $(wrap_id).animate({
            'left': '75%'
        }, 1000);
        $(open_button +' img').animate({
            opacity:0
        }, 1000);
    }

    function close(open_button, wrap_id) {
        $(wrap_id).animate({
            'left': '97.5%'
        }, 1000);
        $(open_button +' img').animate({
            opacity:1
        }, 1000);
    }
}

$(function () {
    var feedbackWidget = new FeedbackWidget('widget-content');
    feedbackWidget.init('top-image', 'widget-content', 'widget_top');
});
