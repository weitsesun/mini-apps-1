

console.log("loaded app.js");

console.log(document.getElementsByClassName('mybutton'));


(function handleClick(e) {
  //change e.target.innerText
  
  var buttons = document.getElementsByClassName('mybutton');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function(e) {
        if(!e.target.innerText) {
          var count = 0;
          var curTic = document.getElementsByClassName('mybutton');
          for (var i = 0; i < curTic.length; i++){
            count+=curTic[i].innerText.length;
          }
          var change = ['x', 'o'];
          this.innerText = change[count%2];
        }
      }
    }
})()