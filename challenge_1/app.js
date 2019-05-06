
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
          var change = ['X', 'O'];
          this.innerText = change[count%2];
        }
        
        for(var i = 0; i<winCases.length; i++) {
          var win=winCases[i];
          var val1=document.getElementsByName(win[0])[0].innerText;
          var val2=document.getElementsByName(win[1])[0].innerText;
          var val3=document.getElementsByName(win[2])[0].innerText;
          if(val1 !== "" && val1 === val2 && val2 === val3) {
            setTimeout(() => {
              alert('Winner is '+ change[count%2]);
              reset();
            }
            ,50);
          }
        }

        var curTable = document.getElementsByClassName('mybutton');
        var tie = true;
        var count = 0;
        while (count < 9) {
          if(curTable[count].innerText === ""){
            tie = false;
          }
          count++;
        }
        if(tie) {
          setTimeout(()=>{
            alert('Tie!');
            reset();
          }, 100);
        }
      
      
      
      
      }
    }
})()

function reset() {
  var buttons = document.getElementsByClassName('mybutton');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerText = "";
    }
}