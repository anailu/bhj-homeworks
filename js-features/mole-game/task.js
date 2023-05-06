const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let clickCount = 0;
let lostCount = 0;
let lastClickedPosition = null;

const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);

    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            clickCount++;
            dead.innerHTML = clickCount;
            if (lastClickedPosition === i) { // если кликнули на ту же ячейку, где уже был крот
                clickCount++; // увеличиваем счетчик еще на 1
                dead.innerHTML = clickCount;
            }
            lastClickedPosition = i;
        } else {
            lostCount++;
            lost.innerHTML = lostCount;
        }

        if (clickCount === 10) {
            alert("Победа!");
            clickCount = 0;
            lostCount = 0;
            lost.innerHTML = 0;
            dead.innerHTML = 0; 
            lastClickedPosition = null;
        }
        
        if (lostCount === 5) {
            alert("Вы проиграли");
            clickCount = 0;
            lostCount = 0;
            lost.innerHTML = 0;
            dead.innerHTML = 0; 
            lastClickedPosition = null;
        }
        //hole.onclick = null;
    }
}