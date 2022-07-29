/// analogue clock

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();


/// Adding a Note

var addNote = document.getElementById("addNote");
var editor = document.getElementById("editor");
var notes = document.getElementById("notes");
var closeEditor = document.getElementById("closeEditor");

addNote.addEventListener("click", function(){
    notes.style.transform = "translateY(10rem)";
    notes.style.opacity = "0";
    notes.style.transition = "all 0.3s ease-in-out";
    setTimeout(() => {
        editor.classList.add("showFlex");
        notes.classList.add("hide");
    }, 300);
    
})

closeEditor.addEventListener("click", function(){
    notes.style.transform = "none";
    notes.style.opacity = "1";
    notes.style.transition = "all 0.3s ease-in-out";
    setTimeout(() => {
        editor.classList.remove("showFlex");
        notes.classList.remove("hide");
    }, 300);
})

