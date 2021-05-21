var player1 = document.getElementById('name');

//function rooll
function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");
        
        score =0 ;
        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = (score=score+1);
        }

        else  {
            document.querySelector("h1").innerHTML
                            = (player1 + " WINS!");
        }
    }, 2500);
}

