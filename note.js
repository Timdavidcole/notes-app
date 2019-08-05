function Note(content){
  this.content = content;
  this.title = content.length < 20 ? content : content.substr(0,20) + "...";
}
