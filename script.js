let guessCount = null;
let difficultyLevel = null;
let gameOver = null;
let selectedDuck;
import duckLibrary from './ducks.js';

window.onload = function () {
    gridSize();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

window.reset = function () {
    gameOver = false;   
    document.getElementById("statusMessage").innerText = "";

    gridSize();
}

window.gridSize = function () {

    const duckRandID = getRandomInt(duckLibrary.length - 1);

    for (let i = 0; i < duckLibrary.length; i++) {
        if (duckLibrary[i].id === duckRandID) {
            selectedDuck = duckLibrary[i];
            break;
        }
    }
    console.log("selectedDuck is: ", selectedDuck.id);
    console.log("duckRandID is: ", duckRandID);

    const width = document.getElementById("widthInput").value;
    const area = width**2;

    // Creates grid tiles
    const parent = document.querySelector('.parent');
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    parent.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

    const duckTile = getRandomInt(area);
    console.log("Duck tile is: ", duckTile);

    // Adds classes and styles to the grid tiles
    for (let i=1; i <= area; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.classList.add('tile' + i);
        tile.onclick = () => tileSelect(duckTile,i,width);
        grid.appendChild(tile);
        let tileStyle = getRandomInt(4);

        if (tileStyle == 1) {
            tile.style.backgroundImage = 'url("https://raw.githubusercontent.com/nickbournias/images/main/Tile-1.png")';
        } else if (tileStyle == 2) {
            tile.style.backgroundImage = 'url("https://raw.githubusercontent.com/nickbournias/images/main/Tile-2.png")';
        } else if (tileStyle == 3) {
            tile.style.backgroundImage = 'url("https://raw.githubusercontent.com/nickbournias/images/main/Tile-3.png")';
        } else if (tileStyle == 4) {
            tile.style.backgroundImage = 'url("https://raw.githubusercontent.com/nickbournias/images/main/Tile-4.png")';
        }
    }

    if (width == 4 ) {
        document.getElementById('difficultyCard').innerText = "Easy";
        document.getElementById('difficultyCard').style.backgroundColor = "#72b043";
        difficultyLevel = "Easy";
        guessCount = 4;
    } else if (width == 5) {
        document.getElementById('difficultyCard').innerText = "Medium";
        document.getElementById('difficultyCard').style.backgroundColor = '#f37324';
        difficultyLevel = "Medium";
        guessCount = 6;
    } else if (width == 6) {
        document.getElementById('difficultyCard').innerText = "Hard";
        document.getElementById('difficultyCard').style.backgroundColor = '#e12729';
        difficultyLevel = "Hard";
        guessCount = 8;
    }
    console.log("difficulty level is: ", difficultyLevel);

    // Displays label in left card 
    document.getElementById('widthLabel').innerText = width + " x " + width;

    // Displays # of guesses left in right column 
    document.getElementById("guessesLeft").innerText = guessCount;

    return {
        difficultyLevel,
        guessCount,
        width
    }
}

function tileSelect(duckTile, userTile, width) {
    if (gameOver) return;

    let distance = getDistance(userTile, duckTile, width);

    if (distance == 0) {
        guessCount -= 1;
        document.getElementById("guessesLeft").innerText = guessCount;
        console.log("guessCount is: ", guessCount);
        console.log("You win");
        document.getElementById("statusMessage").innerText = "You win";
        document.getElementById('statusMessage').style.backgroundColor = '#33cc33';
        document.getElementById('statusMessage').style.color = '#ebfaeb';
        showPopup(selectedDuck);
        gameOver = true;
        return;
    } else {
        guessCount -= 1;
        document.getElementById("guessesLeft").innerText = guessCount;
        console.log("guessCount is: ", guessCount);
        console.log("userTile: ", userTile);
        console.log("Distance is: ", distance);

        if (distance <= 2) {
            document.getElementById("statusMessage").innerText = "You're Hot!";
            document.getElementById('statusMessage').style.backgroundColor = '#ff0000';
            document.getElementById('statusMessage').style.color = '#ffe6e6';
        } else if (distance <= 4) {
            document.getElementById("statusMessage").innerText = "You're warm!";
            document.getElementById('statusMessage').style.backgroundColor = '#ff6600';
            document.getElementById('statusMessage').style.color = '#fff0e6';
        } else if (distance > 4) {
            document.getElementById("statusMessage").innerText = "You're cold!";
            document.getElementById('statusMessage').style.backgroundColor = '#00ccff';
            document.getElementById('statusMessage').style.color = '#000000';
        }
    }

    if (guessCount <= 0) {
        console.log("You lose");
        document.getElementById("statusMessage").innerText = "You lose"
        document.getElementById('statusMessage').style.backgroundColor = '#989898';
        document.getElementById('statusMessage').style.color = '#ebfaeb';
        gameOver = true;
    }
}

function getCoords(index,width) {
    let row = Math.floor((index - 1)/width) + 1;
    let col = ((index-1) % width) + 1;

    return {
        row,
        col
    };
}

function getDistance(userTile,duckTile,width) {
    const user = getCoords(userTile,width);
    const win = getCoords(duckTile,width);

    let distance = (Math.abs(user.row - win.row) + Math.abs(user.col - win.col));
    return distance;
}

function showPopup(selectedDuck) {
    let featureNum = Math.floor(Math.random() * selectedDuck.features.length);
    let randomFeature = selectedDuck.features[featureNum];
    document.getElementById("winPopup").style.display = "flex";
    document.getElementById("selectedDuck").src = selectedDuck.image;
    document.getElementById("duckTextHeader").innerHTML = selectedDuck.name;
    document.getElementById("duckText1").innerHTML = "<strong>Scientific Name:</strong>\u00A0\u00A0\u00A0" + selectedDuck.scientificName;
    document.getElementById("duckText2").innerHTML = "<strong>Native to:</strong>\u00A0\u00A0\u00A0" + selectedDuck.nativeTo;
    document.getElementById("duckText3").innerHTML = "<strong>Domesticated?</strong> \u00A0\u00A0" + selectedDuck.domesticated;
    document.getElementById("duckText4").innerHTML = "<strong>Features: </strong>" + randomFeature;
    document.getElementById("duckFoundMsg").innerText = "🎉 Congratulations, you found the " + selectedDuck.name + "!";

    document.getElementById("lastDuckImg").src = selectedDuck.image;
    document.getElementById("lastDuckName").innerText = selectedDuck.name;
    document.getElementById("lastDuckName").innerHTML = `<a href="https://www.google.com/search?q=${encodeURIComponent(selectedDuck.name)}" target="_blank">${selectedDuck.name}</a>`;
}


window.closePopup = function () {
  document.getElementById("winPopup").style.display = "none";
};


//    https://codepen.io/SwissWebMiss/pen/LZvGBm