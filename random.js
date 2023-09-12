let dice_ar = ["dice1.jpg", "dice2.jpg", "dice3.jpg", "dice4.jpg", "dice5.jpg", "dice6.jpg"]

window.onload = function () {
    resetGame();
    declareEvent();
}

function resetGame() {
    coint = 5;
    document.querySelector("#id_winLose").innerHTML = ""
    updateUi()
}

function declareEvent() {
    let roll_btn = document.querySelector("#roll_btn");
    let winLose = document.querySelector("#id_winLose");
    let reset_btn = document.querySelector("#reset_btn");
    reset_btn.addEventListener("click",resetGame);
    roll_btn.addEventListener("click", function () {
        coint--;

        if (coint > 0) {
            let rnd = Math.random() * 6;
            rnd = Math.ceil(rnd)
            document.querySelector("#id_img").src = dice_ar[rnd - 1];
            if (rnd >= 5) {
                coint += 2;
                winLose.innerHTML = "Win!";
                winLose.style.background = "greenyellow";
            } else {
                winLose.innerHTML = "Lose!";
                winLose.style.background = "orange";
            }
            updateUi();
        }
        else {
            alert("Bring More Coints!");
        }
    })
}

function updateUi() {
    document.querySelector("#id_coins").innerHTML = coint;
}