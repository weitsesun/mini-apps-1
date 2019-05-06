

console.log("loaded app.js");

console.log(document.getElementsByClassName('mybutton'));


(function handleClick() {
  //change e.target.innerText
  
  var buttons = document.getElementsByClassName('mybutton');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function(e) {
        
        var winCases = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

        if(!e.target.innerText) {
          var count = 0;
          var curTic = document.getElementsByClassName('mybutton');
          for (var i = 0; i < curTic.length; i++){
            count+=curTic[i].innerText.length;
          }
          var change = ['x', 'o'];
          this.innerText = change[count%2];
        }
      
      //check win cases:
        //iterator through the table
      
      
      }
    }
})()

function reset() {
  var buttons = document.getElementsByClassName('mybutton');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerText = "";
    }
}