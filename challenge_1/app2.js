
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
              // +1 to the score
              var playerScore = document.getElementById('score' + change[count%2]).innerText;
              document.getElementById('score' + change[count%2]).innerText = (Number(playerScore)+1).toString();
              resetTable();
            }
            ,50);
          }
        }

        var curTable = document.getElementsByClassName('mybutton');
        var tie = true;
        var cou = 0;
        while (cou < 9) {
          if(curTable[cou].innerText === ""){
            tie = false;
          }
          cou++;
        }
        if(tie) {
          var tieScore = document.getElementById('scoreTie').innerText;
          document.getElementById('scoreTie').innerText = (Number(tieScore)+1).toString();
          setTimeout(()=>{
            alert('Tie!');
            resetTable();
          }, 100);
        }
      }
    }
})()

function resetTable() {
  var buttons = document.getElementsByClassName('mybutton');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerText = "";
    }
}

function reset() {
  resetTable();
    document.getElementById('scoreX').innerText = '0';
    document.getElementById('scoreO').innerText = '0';
    document.getElementById('scoreTie').innerText = '0';
}