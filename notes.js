var noteList = function(array) {
  array.forEach(function(note){
    var linebreak = document.createElement("br");
    var textnode = document.createTextNode(note);
    document.getElementById("notesList").appendChild(textnode)
    document.getElementById("notesList").appendChild(linebreak)
  })
}
