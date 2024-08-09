window.onload = function(){
    var a = Math.round(Math.random()*237);
    console.warn(a);
    document.querySelector("#progressbar").setAttribute("style","position:absolute; width: "+a+"px;height: 6px;");
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }