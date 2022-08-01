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


// /// page refresh stop

var form = document.getElementById("editor");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


/// Adding a Note

var addNote = document.getElementById("addNote");
var editor = document.getElementById("editor");
var notes = document.getElementById("notes");
var notesExample = document.getElementById("notesExample");

var closeEditor = document.getElementById("closeEditor");
var addEditor = document.getElementById("addEditor");

var titleGrab = document.getElementById("titleGrab");
var textGrab = document.getElementById("textGrab");

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const notesJS = JSON.parse(localStorage.getItem("notesJS") || "[]");
let isUpdate = false, updateId;


/// blue add button

addNote.addEventListener("click", function () {
    notes.classList.add("dropNotes");
    notes.classList.remove("riseNotes");

    editor.classList.add("dropEditor");
    editor.classList.remove("riseEditor");
    setTimeout(() => {
        notes.style.display = "none";
        editor.style.display = "flex";
    }, 500);

})

/// peach close button

closeEditor.addEventListener("click", function () {
    notes.classList.add("riseNotes");
    notes.classList.remove("dropNotes");

    editor.classList.add("riseEditor");
    editor.classList.remove("dropEditor");
    setTimeout(() => {
        notes.style.display = "flex";
        editor.style.display = "none";
    }, 500);

    titleGrab.value = "";
    textGrab.value = "";
})


/// showing notes

function showNotes() {
    notesJS.forEach((note, index) => {
        let liTag = '<li onclick="updateNote(' + (index) + ',` ' + (note.title) + '`,`' + (note.text) + '`)" class="note"><div class="note__detail"><h3 class="note__detail-title">'+ (note.title) + '</h3><span class="note__detail-snippet">' + (note.text) + '</span></div ><div class="note__extra"><button onclick= deleteNote('+ (index) +') class="note__extra-settings"><ul class="menu"><li class="menu__item">Delete</li></ul></button><span class="note__extra-date">' + (note.date) + '</span></div></li > ';

        notesExample.insertAdjacentHTML("afterend", liTag);
    })}

showNotes();

/// add button in editor
addEditor.addEventListener("click", e => {
    e.preventDefault();
    let noteTitle = titleGrab.value;
    let noteText = textGrab.value;

    if (noteTitle || noteText) {
        let dateObj = new Date();
        let day = dateObj.getDate();
        let month = months[dateObj.getMonth()];
        let year = dateObj.getFullYear();

        let noteInfo = {
            title: noteTitle,
            text: noteText,
            date: month + " " + day + ", " + year
        }

        if(!isUpdate){
            notesJS.push(noteInfo);
        } else{
            notesJS[updateId] = noteInfo;
        }

        localStorage.setItem("notesJS", JSON.stringify(notesJS));
        closeEditor.click();

        setTimeout(() => {
            location.reload();
        }, 1000);
    }
})


/// delete note

function deleteNote(noteId) {
    notesJS.splice(noteId, 1);
    localStorage.setItem("notesJS", JSON.stringify(notesJS));

    setTimeout(() => {
        location.reload();
    }, 200);
}

/// update note

function updateNote(noteId, title, text) {
    isUpdate = true;
    updateId = noteId;
    addNote.click();
    titleGrab.value = title;
    textGrab.value = text;
}

