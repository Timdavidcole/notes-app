function NoteList(array = []) {
  this.noteList = array
}

NoteList.prototype.getNoteList = function() {
  return this.noteList
}

NoteList.prototype.addNote = function(content) {
  var newNote = new Note(document.getElementById('newNoteText').value)
  this.noteList.push(newNote)
  this.updateNoteList()
  document.getElementById('newNoteText').value = '';
}

NoteList.prototype.updateNoteList = function() {
  var list = document.getElementById("notesList")
  if (list.childNodes.length > 0) {
    while (list.firstChild) {
    list.removeChild(list.firstChild);
    }
  }
  this.noteList.forEach(function(note, index){
    var div = document.createElement('div');
    var br = document.createElement('br');
    div.innerHTML = note.title;
    div.setAttribute("id", "note_" + index);
    div.setAttribute("class", "note_small");
    document.getElementById("notesList").appendChild(div);
    document.getElementById("notesList").appendChild(br);
  })
}

var newlist = new NoteList()
