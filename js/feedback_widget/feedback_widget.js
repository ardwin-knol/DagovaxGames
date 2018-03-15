function FeedbackWidget(open_button, wrapper_id, close_button){

    //removes availabilty of the user to drag the images
    $('img').on('dragstart', function(event) { event.preventDefault(); });

    this.wrapper_id = wrapper_id;
    this.open_button = open_button;
    this.close_button = close_button;
    this.isInit = false;
    this.open = open;
    this.close = close;
    this.init = init;

    var isClicked = false;

    function init() {
        this.isInit = true;

        document.getElementById(this.open_button).onclick = function () {

            if(!isClicked) {
                open();
            }
        }

        document.getElementById(this.close_button).onclick = function () {

            if(isClicked) {
                close();
            }
        }
    };

    function open() {
        var wrap = '#'+wrapper_id;
        var transparent = '#'+open_button;
        $(wrap).animate({
            'right': '0px'
        }, 1000);
        $(transparent +' img').animate({
            opacity:0
        }, 1000);
        isClicked = true;
    }

    function close() {
        var wrap = '#'+wrapper_id;
        var transparent = '#'+open_button;
        $(wrap).animate({
            'right': '-435px'
        }, 1000);
        $(transparent +' img').animate({
            opacity:1
        }, 1000);
        isClicked = false;
    }

    function close_final() {
        var wrap = '#'+wrapper_id;
        var transparent = '#'+open_button;
        $(wrap).animate({
            'left': '97.5%'
        }, 1000);
        $(transparent +' img').animate({
            opacity:1
        }, 1000);
        isClicked = false;
        setTimeout(set_feedbackSubmitted, 1000);
    }

    function set_feedbackSubmitted(){
        show_text("<strong>You already submitted your feedback!</strong>");
        document.getElementById("widget-top").style.background = "orange";
    }

    function disable_button(){
        $('#submit-button').hide();
        $('#textbox-field').hide();
    }

    function show_text(html) {
        console.log(html);
        $('#input-text').html(html);
    }

    $('#submit-button').click(function(){
        var user_input = document.getElementById('textbox-field').value;
        if (user_input == ""){
            show_text("<strong>  Please enter something before you click 'submit'</strong>");
            document.getElementById("widget-top").style.background = "red";
        }
        else{
            show_text("<strong>  Thank you for your feedback!</strong>");
            disable_button();
            document.getElementById("widget-top").style.background = "green";
            setTimeout(close_final, 3000);
            $('#feedback-title').hide();
        }
        console.log(user_input);
    })
}