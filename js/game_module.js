function GameModule(){

    this.isInit = false;
    this.init = init;
    var gameRunning = false;
    var marioGame = new MarioGame();
    var timeReset =0;

    function init() {
        this.isInit = true;
        $('#reset-button').hide();

        $('#play-button').click(function () {
            if (!gameRunning) {
                $('#play-button').fadeOut(500);
                $('#reset-button').fadeIn(500);
                marioGame.init();
                gameRunning = true;
            }
        })

        $('#reset-button').click(function () {
            if (gameRunning && timeReset <=2){
                marioGame.reset();
                delete MarioGame[marioGame];
                marioGame = new MarioGame();
                marioGame.init();
                timeReset ++;
            }
            if (timeReset >2){
                $('#reset-button').fadeOut(500);
            }
        })
    }
}