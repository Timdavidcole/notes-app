var noteList = function(array) {
  array.forEach(function(note){
    var div = document.createElement('div')
    div.innerHTML = note + "<br>"
    document.body.appendChild(div);
  })
}
