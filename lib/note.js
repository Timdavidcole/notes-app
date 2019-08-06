console.log("it loaded")
function Note(content){
      this.content = content;
      //this.title = content.length<20 ? content : content.substr(0,20);
    }

var notearr = [];

function CreateNote() {
  notearr.push(document.getElementById('form2'));
  console.log(notearr)
}
