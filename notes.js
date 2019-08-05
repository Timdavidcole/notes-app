var noteList = function(array) {
  var list = document.getElementById("notesList")
  console.log(list.childNodes)
  // list.removeChild(list.childNodes)
  array.forEach(function(note, index){
    var div = document.createElement('div');
    var br = document.createElement('br');
    div.innerHTML = note;
    div.setAttribute("id", "note_" + index);
    div.setAttribute("class", "note_small");
    document.getElementById("notesList").appendChild(div);
    document.getElementById("notesList").appendChild(br);
  })
  console.log(list)
}
