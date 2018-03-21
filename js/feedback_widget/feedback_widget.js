spa.feedbackWidget = function(open_button, wrapper_id, close_button){

    this.open_button = open_button;
    this.close_button = close_button;
    this.isInit = false;
    this.close = close;
    this.init = init;

    const OPEN = 'configWidget';
    var isClicked = false;
    var localStorageCounter = 0;

    function init() {
        this.isInit = true;

        document.getElementById(this.open_button).onclick = function () {

            if(!isClicked) {
                open();
            }
        };

        document.getElementById(this.close_button).onclick = function () {

            if (isClicked) {
                close();
            }
        };
        window.addEventListener(OPEN, configWidget);
    }

    // function config (input, color, button, html){
    //     openWidget(input, color, button, html);
    // };


    function openWidget(textInput, color, button, htmlCode) {

        if (button){
            $('#input-text').html(htmlCode);
        }
        else{
            $('#input-text').html('');
        }

        document.getElementById("widget-top").style.background = color;
        document.getElementById("widget-top").style.borderBottomColor = color;
        $('#feedback-title').html('<p>'+textInput+'</p>'
        );

        updateLocalStorage(textInput);

        var wrap = '#'+wrapper_id;
        var transparent = '#'+open_button;
        $(wrap).animate({
            'right': '0px'
        }, 1000);
        $(transparent +' img').animate({
            opacity:0
        }, 1000);
        setTimeout(function() {
           close();
        }, 8000);
        isClicked = true;
    }

    function open(){
        var html = document.getElementById('feedback-title').innerText;

        if (html === 'Title'){
            console.log(html);
            return;
        }
        var wrap = '#'+wrapper_id;
        var transparent = '#'+open_button;
        $(wrap).animate({
            'right': '0px'
        }, 1000);
        $(transparent +' img').animate({
            opacity:0
        }, 1000);
        isClicked = true;

        setTimeout(function(){ close()}, 10000);
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

    function updateLocalStorage(text){
        if (typeof(Storage) !== "undefined") {
            if (localStorageCounter <=9){
                localStorageCounter ++;
                localStorage.setItem(JSON.stringify(localStorageCounter), text);
            }
            else if (localStorageCounter >9 ){
                for (var i = 9; i > 0; i--){
                    var currentItem = localStorage.getItem(i);
                    localStorage.setItem(JSON.stringify(i+1), currentItem);
                }
                localStorage.setItem(JSON.stringify(1), text);
            }
        } else {
            // Sorry! No Web Storage support..
        }
    }

    //export const createOpenWidgetEvent = (detail) => new CustomEvent(OPEN, { detail });

    const configWidget = ({
                              detail: {
                                  text,
                                  color,
                                  button,
                                  htmlCode,
                              },
                          }) => {
        openWidget(text, color, button, htmlCode);
    };
}
