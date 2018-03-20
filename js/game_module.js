function GameModule(){

    this.isInit = false;
    this.init = init;
    this.stopGameMusic = stopGameMusic;
    var gameRunning = false;
    var marioGame = new MarioGame();
    var timeReset =0;

    function init() {
        this.isInit = true;
        this.start = start;
        $('#reset-button').hide();

        $('#play-button').click(function () {
            feedback.close();
            marioGame.disableSound();
            marioGame.resetFirst();
            if (!gameRunning) {
                $('#play-button').fadeOut(500);
                $('#reset-button').fadeIn(500);
                start();
                gameRunning = true;
            }
        })

        $('#reset-button').click(function () {
            feedback.close();
            if (gameRunning && timeReset <=2){
                marioGame.reset();
                marioGame.disableSound();
                delete MarioGame[marioGame];
                marioGame = new MarioGame();
                marioGame.init();
                timeReset ++;
            }
            if (timeReset >2){
                $('#reset-button').fadeOut(500);
            }
        })

        function start(){
            marioGame.init();
        }
    }

    function stopGameMusic(){
        marioGame.disableSound();
    }
}