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

var homeButton = document.getElementById("homeButton");

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

homeButton.addEventListener("click", function () {
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

        anchorElement.insertAdjacentHTML("afterend", liTag);
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



/// sort note

function sortNotes(){
    window.alert("clicked")
    console.log(typeof(notesJS))
    console.log(notesJS)
    notesJS.sort(function (a, b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0; });;
}


///switch colors;


const themes = document.getElementById("themes")
const themeOptions = document.getElementById("themeOptions");
const closeThemeOptions = document.getElementById("closeThemeOptions");
const header = document.getElementById("header");

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const bg3 = document.getElementById("bg3");
const bg4 = document.getElementById("bg4");
const bg5 = document.getElementById("bg5");
const bg6 = document.getElementById("bg6");
const bg7 = document.getElementById("bg7");
const bg8 = document.getElementById("bg8");
const bg9 = document.getElementById("bg9");
const bg10 = document.getElementById("bg10");
const bg11 = document.getElementById("bg11");
const bg12 = document.getElementById("bg12");
const bg13 = document.getElementById("bg13");
const bg14 = document.getElementById("bg14");
const bg15 = document.getElementById("bg15");

themes.addEventListener("click", function(){
    themeOptions.style.display= "grid";
    
})

closeThemeOptions.addEventListener("click", function(){
    themeOptions.style.display= "none";
})

bg1.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(222, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '222');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg2.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(175, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '175');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg3.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(110, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '110');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg4.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(67, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '67');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg5.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(42, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '42');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg6.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(17, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '17');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg7.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(0, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '0');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg8.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(337, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '337');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg9.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(310, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '310');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg10.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(290, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '290');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg11.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(273, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '273');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg12.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(253, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '253');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg13.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(242, 67%, 89%)');
    document.documentElement.style.setProperty('--base-h', '242');
    document.documentElement.style.setProperty('--base-s', '67%');
    document.documentElement.style.setProperty('--base-l', '89%');
    document.documentElement.style.color = "#000";
})

bg14.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(240, 100%, 98%)');
    document.documentElement.style.setProperty('--base-h', '240');
    document.documentElement.style.setProperty('--base-s', '100%');
    document.documentElement.style.setProperty('--base-l', '98%');
    document.documentElement.style.color = "#000";
})

bg15.addEventListener("click", function(){
    document.documentElement.style.setProperty('--base', 'hsl(0, 0%, 19%)');
    document.documentElement.style.setProperty('--base-h', '0');
    document.documentElement.style.setProperty('--base-s', '0%');
    document.documentElement.style.setProperty('--base-l', '19%');
    document.documentElement.style.color = "#aaa";

})

