function NoteList(array = []) {
  this.noteList = array
}

NoteList.prototype.getNoteList = function() {
  return this.noteList
}

NoteList.prototype.addNote = function(content) {
  var newNote = new Note(document.getElementById('newNoteText').value)
  this.noteList.push(newNote)
  this.addNoteToPage(newNote)
  document.getElementById('newNoteText').value = '';
}

NoteList.prototype.saveNote = function() {
 tag = document.getElementById('note_' + clickedIndex)
 this.noteList.forEach(function(note, index) {
   if (index === clickedIndex) {
     note.content = tag.innerHTML
     note.title = tag.innerHTML.substr(0,20) + "..."
   }
 })
}
NoteList.prototype.addNoteToPage = function(note) {
 clickedIndex = 0
 var list = document.getElementById("notesList")
 var xy = randomCoordinate();
 var content = note.content
 var title = note.title
 var div = document.createElement('div');
 var br = document.createElement('br');
 div.innerHTML = note.title;
 var index = (this.getNoteList().length - 1)
 div.setAttribute("id", "note_" + index);
 div.setAttribute("class", "note_small");
 div.setAttribute("style", 'left: ' + xy[0] + 'px;' + "top: " + xy[1] + 'px;');
 div.onclick = function () {
   dragElement(document.getElementById("note_" + index));
   clickedIndex = index
   this.contentEditable = "true";
   if (this.innerHTML === content) {
     return this.innerHTML = title
   }
   else {
     return this.innerHTML = content
   }
 }
 // console.log(document.getElementById("note_0"))
 // dragElement(document.getElementById("note_" + index));
 div.contentEditable = "true";
 document.getElementById("notesList").appendChild(div);
 document.getElementById("notesList").appendChild(br);
}

//
// NoteList.prototype.updateNoteList = function(note) {
//  var list = document.getElementById("notesList")
//  if (list.childNodes.length > 0) {
//    while (list.firstChild) {
//    list.removeChild(list.firstChild);
//    }
//  }
//  this.noteList.forEach(function(note, index){
//    var xy = randomCoordinate();
//    console.log(xy)
//    var content = note.content
//    var title = note.title
//    var div = document.createElement('div');
//    var br = document.createElement('br');
//    div.innerHTML = note.title;
//    div.setAttribute("id", "note_" + index);
//    div.setAttribute("class", "note_small");
//    div.setAttribute("style", 'left: ' + xy[0] + 'px;' + "top: " + xy[1] + 'px;');
//    div.onclick = function () {
//      dragElement(document.getElementById("note_" + index));
//      if (this.innerHTML === content) {
//        return this.innerHTML = title
//      }
//      else if (this.innerHTML !== content && this.innerHTML !== title) {
//        note.content = this.innerHTML
//        note.title = this.innerHTML.substr(0,20) + "..."
//      }
//      else {
//        return this.innerHTML = content
//      }
//    }
//    div.contentEditable = "true";
//    document.getElementById("notesList").appendChild(div);
//    document.getElementById("notesList").appendChild(br);
//  })
// }

var randomCoordinate = function(){
  var r = [];
  var x = Math.floor( Math.random() * (window.innerWidth * 0.8) );
  var y = Math.floor( Math.random() * (window.innerHeight * 0.8));
  r = [x,y];
  return r;
};

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var newlist = new NoteList()
