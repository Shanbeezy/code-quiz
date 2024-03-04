function printHighscores() {
    var highscores = JSON.parse(window.logalStorage.getItem('highscores')) || [];

    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    for (var x = 0; x < highscores.lenth; x += 1) {
        var liTag = document.createElement('li');
        liTag.textContent = highscores [x].initials + ' - ' + highscores[x].score;

        var olE1 = document.getElementById('highscores');
        olE1.appendChild(liTag);
    }
}

function clearHighscores() {
    window.logalStorage.removeItem ('highscores');
    window.location.reload();
}

document.getElementById('clear').onclick = clearHighscores;

printHighscores();