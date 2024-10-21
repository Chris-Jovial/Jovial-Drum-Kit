// detecting button press
var jovy = document.querySelectorAll(".drum").length;

for (var i = 0; i < jovy; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); 
        buttonAnnimation(buttonInnerHTML)

// detecting keyboard press 
    document.addEventListener("keypress", function(){
            makeSound(event.key);
            buttonAnnimation(event.key);
        })

    });
    function makeSound(key){
        switch (key) {
            case "J":
                    var audio = new Audio ("sound/cool.mp3");
                    audio.play();
                    
                    break;
            case "O" :
                    var audio = new Audio ("sound/hard.mp3");
                    audio.play();
                    break;
            case "V" :
                    var audio = new Audio("sound/main.mp3");
                    audio.play();
                    break;
            case "I" :
                    var audio = new Audio("sound/nice.mp3");
                    audio.play();
                    break;
            case "A" :
                    var original = new Audio ("sound/original.mp3");
                    original.play();
                    break;
            case "L" :
                    var soft = new Audio ("sound/soft.mp3");
                    soft.play();
                    break;
                    default:
                    break;
            }

    }
    function buttonAnnimation(currentkey){

    }

} 





