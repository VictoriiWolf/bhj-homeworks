const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const time = 1000;
let place = 1;

const replaceMole = () => {
    let newPlace = Math.floor( Math.random() * 8) + 1;
    if(newPlace == place) {
        replaceMole();
        return;
    }

    document.getElementById(`hole${place}`).classList.remove('hole_has-mole');
    document.getElementById(`hole${newPlace}`).classList.add('hole_has-mole');
    place = newPlace;
    setTimeout(function() {
        replaceMole();}, time);
}

let deadCounter = 0;
let lostCounter = 0;
getHole = index => document.getElementById(`hole${index}`);

for(holeIndex = 1; holeIndex <= 9; holeIndex++) {
    let hole = getHole(holeIndex);
    hole.addEventListener( 'click', function() {
        if(hole.classList.contains('hole_has-mole')) {
            deadCounter++;
            dead.textContent = deadCounter;
        } else {
            lostCounter++;
            lost.textContent = lostCounter;
        }

        if(deadCounter == 10) {
            alert ('Выиграш!');
            deadCounter = 0;
            lostCounter = 0;
            dead.textContent = deadCounter;
            lost.textContent = lostCounter;
        }

        if(lostCounter == 5) {
            alert('Проигрыш :(');
            deadCounter = 0;
            lostCounter = 0;
            dead.textContent = deadCounter;
            lost.textContent = lostCounter;
        }
    })
}

replaceMole();