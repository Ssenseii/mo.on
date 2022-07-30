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


/// page refresh stop

var form = document.getElementById("editor");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


/// Adding a Note

var addNote = document.getElementById("addNote");
var editor = document.getElementById("editor");
var notes = document.getElementById("notes");

var closeEditor = document.getElementById("closeEditor");
var addEditor = document.getElementById("addEditor");

var titleGrab = document.getElementById("titleGrab");
var textGrab = document.getElementById("textGrab"); 

addNote.addEventListener("click", function(){
    notes.classList.add("dropNotes");
    notes.classList.remove("riseNotes");

    editor.classList.add("dropEditor");
    editor.classList.remove("riseEditor");
    setTimeout(() => {
        notes.style.display = "none";
        editor.style.display = "flex";
    }, 500);

})

closeEditor.addEventListener("click", function(){
    notes.classList.add("riseNotes");
    notes.classList.remove("dropNotes");

    editor.classList.add("riseEditor");
    editor.classList.remove("dropEditor")
    setTimeout(() => {
        notes.style.display = "flex";
        editor.style.display = "none";
    }, 500);
})

addEditor.addEventListener("click", e =>{
    e.preventDefault();
    let noteTitle = titleGrab.value;
    let noteText = textGrab.value;
    console.log(noteTitle, noteText)
})

