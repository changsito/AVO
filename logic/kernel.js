function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function excuse(cause){
  var info = document.body.innerHTML;
  sleep(300).then(()=>{
    if(!document.getElementById(cause)){
      var message = document.createElement("span");
      message.id = cause;
      message.innerHTML = "<div class=\"frame\"><error class=\"title\">Disculpa</error>Este recurso aun no está disponible :(</div>";
      document.body.appendChild(message);
      sleep(3000).then(()=>{
        document.body.removeChild(message);
      });
    }
  });
}
