var noteList = function(array) {
  var list = document.getElementById("notesList")
  if (list.childNodes.length > 0) {
    while (list.firstChild) {
    list.removeChild(list.firstChild);
    }
  }
  array.forEach(function(note, index){
    var div = document.createElement('div');
    var br = document.createElement('br');
    div.innerHTML = note;
    div.setAttribute("id", "note_" + index);
    div.setAttribute("class", "note_small");
    document.getElementById("notesList").appendChild(div);
    document.getElementById("notesList").appendChild(br);
  })
}
