 var wf1=player1.getElementsByTagName('*');
 var wf2=player2.getElementsByTagName('*');
 var wf3=player3.getElementsByTagName('*');
 var wf4=player4.getElementsByTagName('*');
 var wf5=player5.getElementsByTagName('*');
 var wf6=player6.getElementsByTagName('*');
 var wf7=player7.getElementsByTagName('*');
 var wf8=player8.getElementsByTagName('*');
 var wf9=player9.getElementsByTagName('*');
 var wbf1=playerscore.getElementsByTagName('*');
 var wsf1=opponent1.getElementsByTagName('*');
 var wsf2=opponent2.getElementsByTagName('*');
 var wsf3=opponent3.getElementsByTagName('*');
 var wsf4=opponent4.getElementsByTagName('*');
 var wsf5=opponent5.getElementsByTagName('*');
 var wsf6=opponent6.getElementsByTagName('*');
 var wsf7=opponent7.getElementsByTagName('*');
 var wsf8=opponent8.getElementsByTagName('*');
 var wsf9=opponent9.getElementsByTagName('*');
 var wbf2=opponentscore.getElementsByTagName('*');
 var warray = [wf1,wf2,wf3,wf4,wf5,wf6,wf7,wf8,wf9,wsf1,wsf2,wsf3,wsf4,wsf5,wsf6,wsf7,wsf8,wsf9];
 var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
 var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;


 var f1=player1.getElementsByTagName('*').length;
 var f2=player2.getElementsByTagName('*').length;
 var f3=player3.getElementsByTagName('*').length;
 var f4=player4.getElementsByTagName('*').length;
 var f5=player5.getElementsByTagName('*').length;
 var f6=player6.getElementsByTagName('*').length;
 var f7=player7.getElementsByTagName('*').length;
 var f8=player8.getElementsByTagName('*').length;
 var f9=player9.getElementsByTagName('*').length;
 var bf1=playerscore.getElementsByTagName('*').length;
 var sf1=opponent1.getElementsByTagName('*').length;
 var sf2=opponent2.getElementsByTagName('*').length;
 var sf3=opponent3.getElementsByTagName('*').length;
 var sf4=opponent4.getElementsByTagName('*').length;
 var sf5=opponent5.getElementsByTagName('*').length;
 var sf6=opponent6.getElementsByTagName('*').length;
 var sf7=opponent7.getElementsByTagName('*').length;
 var sf8=opponent8.getElementsByTagName('*').length;
 var sf9=opponent9.getElementsByTagName('*').length;
 var bf2=opponentscore.getElementsByTagName('*').length;
 var array = [f1,f2,f3,f4,f5,f6,f7,f8,f9,sf1,sf2,sf3,sf4,sf5,sf6,sf7,sf8,sf9];

 var qf1='player1';
 var qf2='player2';
 var qf3='player3';
 var qf4='player4';
 var qf5='player5';
 var qf6='player6';
 var qf7='player7';
 var qf8='player8';
 var qf9='player9';
 var qbf1='playerscore';
 var qsf1='opponent1';
 var qsf2='opponent2';
 var qsf3='opponent3';
 var qsf4='opponent4';
 var qsf5='opponent5';
 var qsf6='opponent6';
 var qsf7='opponent7';
 var qsf8='opponent8';
 var qsf9='opponent9';
 var qbf2='opponentscore';
 var qarray = [qf1,qf2,qf3,qf4,qf5,qf6,qf7,qf8,qf9,qsf1,qsf2,qsf3,qsf4,qsf5,qsf6,qsf7,qsf8,qsf9];
 var counter =0;
 var score;
 var ima;
 var side = 0;
 var table = document.getElementById("tablo");

 if (table != null) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++)
    {
      table.rows[3].cells[0].onclick = function () {
        move1(this);
      }
      table.rows[3].cells[1].onclick = function () {
        move2(this);
      }
      table.rows[3].cells[2].onclick = function () {
        move3(this);
      }
      table.rows[3].cells[3].onclick = function () {
        move4(this);
      }
      table.rows[3].cells[4].onclick = function () {
        move5(this);
      }
      table.rows[3].cells[5].onclick = function () {
        move6(this);
      }
      table.rows[3].cells[6].onclick = function () {
        move7(this);
      }
      table.rows[3].cells[7].onclick = function () {
        move8(this);
      }
      table.rows[3].cells[8].onclick = function () {
        move9(this);
      }
      table.rows[0].cells[8].onclick = function () {
        move10(this);
      }
      table.rows[0].cells[7].onclick = function () {
        move11(this);
      }
      table.rows[0].cells[6].onclick = function () {
        move12(this);
      }
      table.rows[0].cells[5].onclick = function () {
        move13(this);
      }
      table.rows[0].cells[4].onclick = function () {
        move14(this);
      }
      table.rows[0].cells[3].onclick = function () {
        move15(this);
      }
      table.rows[0].cells[2].onclick = function () {
        move16(this);
      }
      table.rows[0].cells[1].onclick = function () {
        move17(this);
      }
      table.rows[0].cells[0].onclick = function () {
        move18(this);
      }
    };
  }
}
function doyou() {
document.getElementById('quit').style.display = 'block';
}
function hide() {
document.getElementById('quit').style.display = 'none';
}
function move1(tableCell) {
  document.getElementById('invisible').style.display='block';
  document.getElementById('player').style.border = '10px solid green';
  document.getElementById('opponent').style.border = '10px solid red';
  side=2;
  counter=1
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+1]);
    destination.append(wf1[0]);
    counter=2;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+1<18){
     var destination = document.getElementById(qarray[i+1]);
     destination.append(wf1[0]);
   }else {
    var destination = document.getElementById(qarray[i-17]);
    destination.append(wf1[0]);
  }
  if(counter>18){
    counter-=18;
  }
}
}
if(counter>9 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    playerscore.append(score[0]);
  }
  
}
kobylandy();
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==2 && opponentempty ==0){

  finish1();

}

}





function move2(tableCell) {
  document.getElementById('invisible').style.display='block';
   document.getElementById('player').style.border = '10px solid green';
  document.getElementById('opponent').style.border = '10px solid red';
  side=2;
  counter=2;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+2]);
    destination.append(wf2[0]);
    counter=3;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+2<18){
     var destination = document.getElementById(qarray[i+2]);
     destination.append(wf2[0]);
   }else {
    var destination = document.getElementById(qarray[i-16]);
    destination.append(wf2[0]);
  }
  if(counter>18){
    counter-=18;
  }
}
}
if(counter>9 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    playerscore.append(score[0]);
  }
  
}
kobylandy();
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==2 && opponentempty ==0){

  finish1();

}
}


function move3(tableCell) {
  document.getElementById('invisible').style.display='block';
   document.getElementById('player').style.border = '10px solid green';
  document.getElementById('opponent').style.border = '10px solid red';
  side=2;
  counter=3;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+3]);
    destination.append(wf3[0]);
    counter=4;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+3<18){
     var destination = document.getElementById(qarray[i+3]);
     destination.append(wf3[0]);
   }else {
     var destination = document.getElementById(qarray[i-15]);
     destination.append(wf3[0]);
   }
   if(counter>18){
    counter-=18;
  }
}
}
if(counter>9 && warray[counter-1].length%2==0){

  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    playerscore.append(score[0]);
  }
  
}
kobylandy();
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==2 && opponentempty ==0){

  finish1();

}
}


function move4(tableCell) {
  document.getElementById('invisible').style.display='block';
   document.getElementById('player').style.border = '10px solid green';
  document.getElementById('opponent').style.border = '10px solid red';
  side=2;
  counter=4;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+4]);
    destination.append(wf4[0]);
    counter=5;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+4<18){
      var destination = document.getElementById(qarray[i+4]);
      destination.append(wf4[0]);
    }else {
      var destination = document.getElementById(qarray[i-14]);
      destination.append(wf4[0]);
    }
    if(counter>18){
      counter-=18;
    }
  }
}
if(counter>9 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    playerscore.append(score[0]);
  }
  
}
kobylandy();
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==2 && opponentempty ==0){

  finish1();

}
}
function move5(tableCell) {
  document.getElementById('invisible').style.display='block';
   document.getElementById('player').style.border = '10px solid green';
  document.getElementById('opponent').style.border = '10px solid red';
  side=2;
  counter=5;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+5]);
    destination.append(wf5[0]);
    counter=6;
  } 
} else{
  for(var i=0; i< dlina-1;i++){

    counter+=1;
    if(i+5<18){
     var destination = document.getElementById(qarray[i+5]);
     destination.append(wf5[0]);
   }else {
     var destination = document.getElementById(qarray[i-13]);
     destination.append(wf5[0]);
   }
   if(counter>18){
    counter-=18;
  }
}
}
if(counter>9 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    playerscore.append(score[0]);
  }
  
}
kobylandy();
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==2 && opponentempty ==0){

  finish1();

}
}
function move6(tableCell) {
  document.getElementById('invisible').style.display='block';
   document.getElementById('player').style.border = '10px solid green';
  document.getElementById('opponent').style.border = '10px solid red';
  side=2;
  counter=6;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+6]);
    destination.append(wf6[0]);
    counter=7;
  } 
} else{
  for(var i=0; i< dlina-1;i++){

    counter+=1;
    if(i+6<18){
     var destination = document.getElementById(qarray[i+6]);
     destination.append(wf6[0]);
   }else {
     var destination = document.getElementById(qarray[i-12]);
     destination.append(wf6[0]);
   }
   if(counter>18){
    counter-=18;
  }
}
}
if(counter>9 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    playerscore.append(score[0]);
  }
  
}
kobylandy();
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==2 && opponentempty ==0){

  finish1();

}
}
function move7(tableCell) {
  document.getElementById('invisible').style.display='block';
   document.getElementById('player').style.border = '10px solid green';
  document.getElementById('opponent').style.border = '10px solid red';
  side=2;
  counter=7;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+7]);
    destination.append(wf7[0]);
    counter=8;
  } 
} else{
  for(var i=0; i< dlina-1;i++){

    counter+=1;
    if(i+7<18){
     var destination = document.getElementById(qarray[i+7]);
     destination.append(wf7[0]);
   }else {
     var destination = document.getElementById(qarray[i-11]);
     destination.append(wf7[0]);
   }
   if(counter>18){
    counter-=18;
  }
}
}
if(counter>9 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    playerscore.append(score[0]);
  }
  
}
kobylandy();
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==2 && opponentempty ==0){

  finish1();

}
}
function move8(tableCell) {
  document.getElementById('invisible').style.display='block';
   document.getElementById('player').style.border = '10px solid green';
  document.getElementById('opponent').style.border = '10px solid red';
  side=2;
  counter=8;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+8]);
    destination.append(wf8[0]);
    counter=9;
  } 
} else{
  for(var i=0; i< dlina-1;i++){

    counter+=1;
    if(i+8<18){
     var destination = document.getElementById(qarray[i+8]);
     destination.append(wf8[0]);
   }else {
     var destination = document.getElementById(qarray[i-10]);
     destination.append(wf8[0]);
   }
   if(counter>18){
    counter-=18;
  }
}
}
if(counter>9 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    playerscore.append(score[0]);
  }
  
}
kobylandy();
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==2 && opponentempty ==0){

  finish1();

}
}
function move9(tableCell) {
  document.getElementById('invisible').style.display='block';
   document.getElementById('player').style.border = '10px solid green';
  document.getElementById('opponent').style.border = '10px solid red';
  side=2;
  counter=9;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+9]);
    destination.append(wf9[0]);
    counter=10;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+9<18){
      var destination = document.getElementById(qarray[i+9]);
      destination.append(wf9[0]);
    }else {
     var destination = document.getElementById(qarray[i-9]);
     destination.append(wf9[0]);

   }
   if(counter>18){
    counter-=18;
  }
  

}
}
if(counter>9 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    playerscore.append(score[0]);
  }
  

}
kobylandy();
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==2 && opponentempty ==0){

  finish1();

}
}





function move10(tableCell) {
  document.getElementById('invisible').style.display='none';
   document.getElementById('player').style.border = '10px solid red';
  document.getElementById('opponent').style.border = '10px solid green';
  side=1;
  counter=10;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+10]);
    destination.append(wsf1[0]);
    counter=11;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+10<18){
      var destination = document.getElementById(qarray[i+10]);
      destination.append(wsf1[0]);
    }else {
     var destination = document.getElementById(qarray[i-8]);
     destination.append(wsf1[0]);

   }
   if(counter>18){
    counter-=18;
  }
  

}
}
if(counter<10 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    opponentscore.append(score[0]);
  }
  
}
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==1 && playerempty ==0){

  finish2();

}

}





function move11(tableCell) {
  document.getElementById('invisible').style.display='none';
   document.getElementById('player').style.border = '10px solid red';
  document.getElementById('opponent').style.border = '10px solid green';
  side=1;
  counter=11;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+11]);
    destination.append(wsf2[0]);
    counter=12;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+11<18){
      var destination = document.getElementById(qarray[i+11]);
      destination.append(wsf2[0]);
    }else {
     var destination = document.getElementById(qarray[i-7]);
     destination.append(wsf2[0]);

   }
   if(counter>18){
    counter-=18;
  }
  

}
}
if(counter<10 && warray[counter-1].length%2==0){

  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    opponentscore.append(score[0]);
  }
  
}
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==1 && playerempty ==0){

  finish2();

}

}


function move12(tableCell) {
  document.getElementById('invisible').style.display='none';
   document.getElementById('player').style.border = '10px solid red';
  document.getElementById('opponent').style.border = '10px solid green';
  side=1;
  counter=12;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+12]);
    destination.append(wsf3[0]);
    counter=13;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+12<18){
      var destination = document.getElementById(qarray[i+12]);
      destination.append(wsf3[0]);
    }else {
     var destination = document.getElementById(qarray[i-6]);
     destination.append(wsf3[0]);

   }
   if(counter>18){
    counter-=18;
  }
  

}
}
if(counter<10 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka; i++){
    opponentscore.append(score[0]);
  }
  
}
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==1 && playerempty ==0){

  finish2();

}

}
function move13(tableCell) {
  document.getElementById('invisible').style.display='none';
   document.getElementById('player').style.border = '10px solid red';
  document.getElementById('opponent').style.border = '10px solid green';
  side=1;
  counter=13;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+13]);
    destination.append(wsf4[0]);
    counter=14;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+13<18){
      var destination = document.getElementById(qarray[i+13]);
      destination.append(wsf4[0]);
    }else {
     var destination = document.getElementById(qarray[i-5]);
     destination.append(wsf4[0]);

   }
   if(counter>18){
    counter-=18;
  }
  

}
}
if(counter<10 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    opponentscore.append(score[0]);
  }
  
}
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==1 && playerempty ==0){

  finish2();

}
}
function move14(tableCell) {
  document.getElementById('invisible').style.display='none';
   document.getElementById('player').style.border = '10px solid red';
  document.getElementById('opponent').style.border = '10px solid green';
  side=1;
  counter=14;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+14]);
    destination.append(wsf5[0]);
    counter=15;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+14<18){
      var destination = document.getElementById(qarray[i+14]);
      destination.append(wsf5[0]);
    }else {
     var destination = document.getElementById(qarray[i-4]);
     destination.append(wsf5[0]);

   }
   if(counter>18){
    counter-=18;
  }
  

}
}
if(counter<10 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    opponentscore.append(score[0]);
  }
  
}
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==1 && playerempty ==0){

  finish2();

}
}
function move15(tableCell) {
  document.getElementById('invisible').style.display='none';
   document.getElementById('player').style.border = '10px solid red';
  document.getElementById('opponent').style.border = '10px solid green';
  side=1;
  counter=15;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+15]);
    destination.append(wsf6[0]);
    counter=16;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+15<18){
      var destination = document.getElementById(qarray[i+15]);
      destination.append(wsf6[0]);
    }else {
     var destination = document.getElementById(qarray[i-3]);
     destination.append(wsf6[0]);

   }
   if(counter>18){
    counter-=18;
  }
  

}
}
if(counter<10 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    opponentscore.append(score[0]);
  }
  
}
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==1 && playerempty ==0){

  finish2();

}
}
function move16(tableCell) {
  document.getElementById('invisible').style.display='none';
   document.getElementById('player').style.border = '10px solid red';
  document.getElementById('opponent').style.border = '10px solid green';
  side=1;
  counter=16;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+16]);
    destination.append(wsf7[0]);
    counter=17;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+16<18){
      var destination = document.getElementById(qarray[i+16]);
      destination.append(wsf7[0]);
    }else {
     var destination = document.getElementById(qarray[i-2]);
     destination.append(wsf7[0]);

   }
   if(counter>18){
    counter-=18;
  }
  

}
}
if(counter<10 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    opponentscore.append(score[0]);
  }
  
}
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==1 && playerempty ==0){

  finish2();

}
}
function move17(tableCell) {
  document.getElementById('invisible').style.display='none';
   document.getElementById('player').style.border = '10px solid red';
  document.getElementById('opponent').style.border = '10px solid green';
  side=1;
  counter=17;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i+17]);
    destination.append(wsf8[0]);
    counter=18;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+17<18){
      var destination = document.getElementById(qarray[i+17]);
      destination.append(wsf8[0]);
    }else {
     var destination = document.getElementById(qarray[i-1]);
     destination.append(wsf8[0]);

   }
   if(counter>18){
    counter-=18;
  }
  

}
}
if(counter<10 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 550);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    opponentscore.append(score[0]);
  }
  
}
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==1 && playerempty ==0){

  finish2();

}
}

function move18(tableCell) {
  document.getElementById('invisible').style.display='none';
   document.getElementById('player').style.border = '10px solid red';
  document.getElementById('opponent').style.border = '10px solid green';
  side=1;
  counter=18;
  var dlina = warray[counter-1].length;
  if(dlina==1){
   for(var i=0; i< dlina;i++){
    var destination = document.getElementById(qarray[i]);
    destination.append(wsf9[0]);
    counter=1;
  } 
} else{
  for(var i=0; i< dlina-1;i++){
    counter+=1;
    if(i+18<18){
      var destination = document.getElementById(qarray[i+18]);
      destination.append(wsf9[0]);
    }else {
     var destination = document.getElementById(qarray[i]);
     destination.append(wsf9[0]);

   }
   if(counter>18){
    counter-=18;
  }
  

}
}
if(counter<10 && warray[counter-1].length%2==0){


  document.getElementById(qarray[counter-1]).style.backgroundColor = 'green';
  setTimeout(function() {
   document.getElementById(qarray[counter-1]).style.backgroundColor = "#BA7A3A";
 }, 600);

  
  var suka = warray[counter-1].length;
  var ima = document.getElementById(qarray[counter-1]);
  var score = ima.getElementsByTagName('*');
  for(var i=0; i< suka;i++){
    opponentscore.append(score[0]);
  }
  
}
var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
if(side==1 && playerempty ==0){

  finish2();

}
}

function finish2(){

  var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
  var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;
  while(wsf1.length!=0){
    opponentscore.append(wsf1[0]);
  }
  while(wsf2.length!=0){
    opponentscore.append(wsf2[0]);
  }
  while(wsf3.length!=0){
    opponentscore.append(wsf3[0]);
  }
  while(wsf4.length!=0){
    opponentscore.append(wsf4[0]);
  }
  while(wsf5.length!=0){
    opponentscore.append(wsf5[0]);
  }
  while(wsf6.length!=0){
    opponentscore.append(wsf6[0]);
  }
  while(wsf7.length!=0){
    opponentscore.append(wsf7[0]);
  }
  while(wsf8.length!=0){
    opponentscore.append(wsf8[0]);
  }
  while(wsf9.length!=0){
    opponentscore.append(wsf9[0]);
  }

  
  if(wbf1.length>wbf2.length){
    document.getElementById('playerwon').style.display = 'block';

  }
  if(wbf2.length>wbf1.length){
    document.getElementById('opponentwon').style.display = 'block';

  }
}
function finish1(){
 var playerempty = wf1.length+wf2.length+wf3.length+wf4.length+wf5.length+wf6.length+wf7.length+wf8.length+wf9.length;
 var opponentempty = wsf1.length+wsf2.length+wsf3.length+wsf4.length+wsf5.length+wsf6.length+wsf7.length+wsf8.length+wsf9.length;

 while(wf1.length!=0){
  opponentscore.append(wf1[0]);
}
while(wf2.length!=0){
  opponentscore.append(wf2[0]);
}
while(wf3.length!=0){
  opponentscore.append(wf3[0]);
}
while(wf4.length!=0){
  opponentscore.append(wf4[0]);
}
while(wf5.length!=0){
  opponentscore.append(wf5[0]);
}
while(wf6.length!=0){
  opponentscore.append(wf6[0]);
}
while(wf7.length!=0){
  opponentscore.append(wf7[0]);
}
while(wf8.length!=0){
  opponentscore.append(wf8[0]);
}
while(wf9.length!=0){
  opponentscore.append(wf9[0]);
}

if(wbf1.length>wbf2.length){
  document.getElementById('playerwon').style.display = 'block';

}
if(wbf2.length>wbf1.length){
  document.getElementById('opponentwon').style.display = 'block';

}
}

function kobylandy(){
  var point1 =0;
  var point2 =0;
  var point3 =0;
  var point4 =0;
  var point5 =0;
  var point6 =0;
  var point7 =0;
  var point8 =0;
  var point9 =0;

var karray = [wsf1,wsf2,wsf3,wsf4,wsf5,wsf6,wsf7,wsf8,wsf9,wf1,wf2,wf3,wf4,wf5,wf6,wf7,wf8,wf9];

for(var i=0; i<wsf1.length-1;i++){
 if(i+1<9){
   if(karray[i+1].length%2!=0){
        point1+=karray[i+1].length;
      }
      if(karray[i+1].length%2==0){
        point1-=karray[i+1].length;
      }
 } else if(i+1>8 && i+1<18 && i!=wsf1.length-2){
   if(karray[i+1].length%2!=0){
        point1-=karray[i+1].length;
      }
      if(karray[i+1].length%2==0){
        point1+=karray[i+1].length;
      }
 } else if(i+1>8 && i+1<18 && i==wsf1.length-2){
  if(karray[i+1].length%2!=0){
        point1+=karray[i+1].length*2;
      }
      if(karray[i+1].length%2==0){
        point1-=karray[i+1].length*2;
      }
 }
  if(i+1>17 && i+1<27){
   if(karray[i-17].length%2!=0){
        point1+=karray[i-17].length;
      }
      if(karray[i-17].length%2==0){
        point1-=karray[i-17].length;
      }
}
else if(i+1>26 && i+1<36 && i!=wsf1.length-2){
   if(karray[i-17].length%2!=0){
        point1-=karray[i-17].length;
      }
      if(karray[i-17].length%2==0){
        point1+=karray[i-17].length;
      }
 } else if(i+1>26 && i+1<36 && i==wsf1.length-2){
  if(karray[i-17].length%2!=0){
        point1+=karray[i-17].length*2;
      }
      if(karray[i-17].length%2==0){
        point1-=karray[i-17].length*2;
      }
 }
}

for(var i=0; i<wsf2.length-1;i++){
 if(i+2<9){
   if(karray[i+2].length%2!=0){
        point2+=karray[i+2].length;
      }
      if(karray[i+2].length%2==0){
        point2-=karray[i+2].length;
      }
 } else if(i+2>8 && i+2<18 && i!=wsf2.length-2){
   if(karray[i+2].length%2!=0){
        point2-=karray[i+2].length;
      }
      if(karray[i+2].length%2==0){
        point2+=karray[i+2].length;
      }
 } else if(i+2>8 && i+2<18 && i==wsf2.length-2){
  if(karray[i+2].length%2!=0){
        point2+=karray[i+2].length*2;
      }
      if(karray[i+2].length%2==0){
        point2-=karray[i+2].length*2;
      }
 }
 if(i+2>17 && i+2<27){
   if(karray[i-16].length%2!=0){
        point2+=karray[i-16].length;
      }
      if(karray[i-16].length%2==0){
        point2-=karray[i-16].length;
      }
}
else if(i+2>26 && i+2<36 && i!=wsf2.length-2){
   if(karray[i-16].length%2!=0){
        point2-=karray[i-16].length;
      }
      if(karray[i-16].length%2==0){
        point2+=karray[i-16].length;
      }
 } else if(i+2>26 && i+2<36 && i==wsf2.length-2){
  if(karray[i-16].length%2!=0){
        point2+=karray[i-16].length*2;
      }
      if(karray[i-16].length%2==0){
        point2-=karray[i-16].length*2;
      }
 }
}

for(var i=0; i<wsf3.length-1;i++){
 if(i+3<9){
   if(karray[i+3].length%2!=0){
        point3+=karray[i+3].length;
      }
      if(karray[i+3].length%2==0){
        point3-=karray[i+3].length;
      }
 } else if(i+3>8 && i+3<18 && i!=wsf3.length-2){
   if(karray[i+3].length%2!=0){
        point3-=karray[i+3].length;
      }
      if(karray[i+3].length%2==0){
        point3+=karray[i+3].length;
      }
 } else if(i+3>8 && i+3<18 && i==wsf3.length-2){
  if(karray[i+3].length%2!=0){
        point3+=karray[i+3].length*2;
      }
      if(karray[i+3].length%2==0){
        point3-=karray[i+3].length*2;
      }
 }
 if(i+3>17 && i+3<27){
   if(karray[i-15].length%2!=0){
        point3+=karray[i-15].length;
      }
      if(karray[i-15].length%2==0){
        point3-=karray[i-15].length;
      }
}
else if(i+3>26 && i+3<36 && i!=wsf3.length-2){
   if(karray[i-15].length%2!=0){
        point3-=karray[i-15].length;
      }
      if(karray[i-15].length%2==0){
        point3+=karray[i-15].length;
      }
 } else if(i+3>26 && i+3<36 && i==wsf3.length-2){
  if(karray[i-15].length%2!=0){
        point3+=karray[i-15].length*2;
      }
      if(karray[i-15].length%2==0){
        point3-=karray[i-15].length*2;
      }
 }
}

for(var i=0; i<wsf4.length-1;i++){
 if(i+4<9){
   if(karray[i+4].length%2!=0){
        point4+=karray[i+4].length;
      }
      if(karray[i+4].length%2==0){
        point4-=karray[i+4].length;
      }
 } else if(i+4>8 && i+4<18 && i!=wsf4.length-2){
   if(karray[i+4].length%2!=0){
        point4-=karray[i+4].length;
      }
      if(karray[i+4].length%2==0){
        point4+=karray[i+4].length;
      }
 } else if(i+4>8 && i+4<18 && i==wsf4.length-2){
  if(karray[i+4].length%2!=0){
        point4+=karray[i+4].length*2;
      }
      if(karray[i+4].length%2==0){
        point4-=karray[i+4].length*2;
      }
 }
 if(i+4>17 && i+4<27){
   if(karray[i-14].length%2!=0){
        point4+=karray[i-14].length;
      }
      if(karray[i-14].length%2==0){
        point4-=karray[i-14].length;
      }
}
else if(i+4>26 && i+4<36 && i!=wsf4.length-2){
   if(karray[i-14].length%2!=0){
        point4-=karray[i-14].length;
      }
      if(karray[i-14].length%2==0){
        point4+=karray[i-14].length;
      }
 } else if(i+4>26 && i+4<36 && i==wsf4.length-2){
  if(karray[i-14].length%2!=0){
        point4+=karray[i-14].length*2;
      }
      if(karray[i-14].length%2==0){
        point4-=karray[i-14].length*2;
      }
 }
}
for(var i=0; i<wsf5.length-1;i++){
 if(i+5<9){
   if(karray[i+5].length%2!=0){
        point5+=karray[i+5].length;
      }
      if(karray[i+5].length%2==0){
        point5-=karray[i+5].length;
      }
 } else if(i+5>8 && i+5<18 && i!=wsf5.length-2){
   if(karray[i+5].length%2!=0){
        point5-=karray[i+5].length;
      }
      if(karray[i+5].length%2==0){
        point5+=karray[i+5].length;
      }
 } else if(i+5>8 && i+5<18 && i==wsf5.length-2){
  if(karray[i+5].length%2!=0){
        point5+=karray[i+5].length*2;
      }
      if(karray[i+5].length%2==0){
        point5-=karray[i+5].length*2;
      }
 }
 if(i+5>17 && i+5<27){
   if(karray[i-13].length%2!=0){
        point5+=karray[i-13].length;
      }
      if(karray[i-13].length%2==0){
        point5-=karray[i-13].length;
      }
}
else if(i+5>26 && i+5<36 && i!=wsf5.length-2){
   if(karray[i-13].length%2!=0){
        point5-=karray[i-13].length;
      }
      if(karray[i-13].length%2==0){
        point5+=karray[i-13].length;
      }
 } else if(i+5>26 && i+5<36 && i==wsf5.length-2){
  if(karray[i-13].length%2!=0){
        point5+=karray[i-13].length*2;
      }
      if(karray[i-13].length%2==0){
        point5-=karray[i-13].length*2;
      }
 }
}

for(var i=0; i<wsf6.length-1;i++){
 if(i+6<9){
   if(karray[i+6].length%2!=0){
        point6+=karray[i+6].length;
      }
      if(karray[i+6].length%2==0){
        point6-=karray[i+6].length;
      }
 } else if(i+6>8 && i+6<18 && i!=wsf6.length-2){
   if(karray[i+6].length%2!=0){
        point6-=karray[i+6].length;
      }
      if(karray[i+6].length%2==0){
        point6+=karray[i+6].length;
      }
 } else if(i+6>8 && i+6<18 && i==wsf6.length-2){
  if(karray[i+6].length%2!=0){
        point6+=karray[i+6].length*2;
      }
      if(karray[i+6].length%2==0){
        point6-=karray[i+6].length*2;
      }
 }
 if(i+6>17 && i+6<27){
   if(karray[i-12].length%2!=0){
        point6+=karray[i-12].length;
      }
      if(karray[i-12].length%2==0){
        point6-=karray[i-12].length;
      }
}
else if(i+6>26 && i+6<36 && i!=wsf6.length-2){
   if(karray[i-12].length%2!=0){
        point6-=karray[i-12].length;
      }
      if(karray[i-12].length%2==0){
        point6+=karray[i-12].length;
      }
 } else if(i+6>26 && i+6<36 && i==wsf6.length-2){
  if(karray[i-12].length%2!=0){
        point6+=karray[i-12].length*2;
      }
      if(karray[i-12].length%2==0){
        point6-=karray[i-12].length*2;
      }
 }
}

for(var i=0; i<wsf7.length-1;i++){
 if(i+7<9){
   if(karray[i+7].length%2!=0){
        point7+=karray[i+7].length;
      }
      if(karray[i+7].length%2==0){
        point7-=karray[i+7].length;
      }
 } else if(i+7>8 && i+7<18 && i!=wsf7.length-2){
   if(karray[i+7].length%2!=0){
        point7-=karray[i+7].length;
      }
      if(karray[i+7].length%2==0){
        point7+=karray[i+7].length;
      }
 } else if(i+7>8 && i+7<18 && i==wsf7.length-2){
  if(karray[i+7].length%2!=0){
        point7+=karray[i+7].length*2;
      }
      if(karray[i+7].length%2==0){
        point7-=karray[i+7].length*2;
      }
 }
 if(i+7>17 && i+7<27){
   if(karray[i-11].length%2!=0){
        point7+=karray[i-11].length;
      }
      if(karray[i-11].length%2==0){
        point7-=karray[i-11].length;
      }
}
else if(i+7>26 && i+7<36 && i!=wsf7.length-2){
   if(karray[i-11].length%2!=0){
        point7-=karray[i-11].length;
      }
      if(karray[i-11].length%2==0){
        point7+=karray[i-11].length;
      }
 } else if(i+7>26 && i+7<36 && i==wsf7.length-2){
  if(karray[i-11].length%2!=0){
        point7+=karray[i-11].length*2;
      }
      if(karray[i-11].length%2==0){
        point7-=karray[i-11].length*2;
      }
 }
}

for(var i=0; i<wsf8.length-1;i++){
 if(i+8<9){
   if(karray[i+8].length%2!=0){
        point8+=karray[i+8].length;
      }
      if(karray[i+8].length%2==0){
        point8-=karray[i+8].length;
      }
 } else if(i+8>8 && i+8<18 && i!=wsf8.length-2){
   if(karray[i+8].length%2!=0){
        point8-=karray[i+8].length;
      }
      if(karray[i+8].length%2==0){
        point8+=karray[i+8].length;
      }
 } else if(i+8>8 && i+8<18 && i==wsf8.length-2){
  if(karray[i+8].length%2!=0){
        point8+=karray[i+8].length*2;
      }
      if(karray[i+8].length%2==0){
        point8-=karray[i+8].length*2;
      }
 }
 if(i+8>17 && i+8<27){
   if(karray[i-10].length%2!=0){
        point8+=karray[i-10].length;
      }
      if(karray[i-10].length%2==0){
        point8-=karray[i-10].length;
      }
}
else if(i+8>26 && i+8<36 && i!=wsf8.length-2){
   if(karray[i-10].length%2!=0){
        point8-=karray[i-10].length;
      }
      if(karray[i-10].length%2==0){
        point8+=karray[i-10].length;
      }
 } else if(i+8>26 && i+8<36 && i==wsf8.length-2){
  if(karray[i-10].length%2!=0){
        point8+=karray[i-10].length*2;
      }
      if(karray[i-10].length%2==0){
        point8-=karray[i-10].length*2;
      }
 }
}


for(var i=0; i<wsf9.length-1;i++){
 if(i+9<9){
   if(karray[i+9].length%2!=0){
        point9+=karray[i+9].length;
      }
      if(karray[i+9].length%2==0){
        point9-=karray[i+9].length;
      }
 } else if(i+9>8 && i+9<18 && i!=wsf9.length-2){
   if(karray[i+9].length%2!=0){
        point9-=karray[i+9].length;
      }
      if(karray[i+9].length%2==0){
        point9+=karray[i+9].length;
      }
 } else if(i+9>8 && i+9<18 && i==wsf9.length-2){
  if(karray[i+9].length%2!=0){
        point9+=karray[i+9].length*2;
      }
      if(karray[i+9].length%2==0){
        point9-=karray[i+9].length*2;
      }
 }
 if(i+9>17 && i+9<27){
   if(karray[i-9].length%2!=0){
        point9+=karray[i-9].length;
      }
      if(karray[i-9].length%2==0){
        point9-=karray[i-9].length;
      }
}
else if(i+9>26 && i+9<36 && i!=wsf9.length-2){
   if(karray[i-9].length%2!=0){
        point9-=karray[i-9].length;
      }
      if(karray[i-9].length%2==0){
        point9+=karray[i-9].length;
      }
 } else if(i+9>26 && i+9<36 && i==wsf9.length-2){
  if(karray[i-9].length%2!=0){
        point9+=karray[i-9].length*2;
      }
      if(karray[i-9].length%2==0){
        point9-=karray[i-9].length*2;
      }
 }
}


let marray = [point1,point2,point3,point4,point5,point6,point7,point8,point9];
var max = Math.max.apply(null, marray);
var reorder = marray.sort(function(a, b){return a-b});
var order = reorder.reverse();
setTimeout(function () {
        if(point1==order[0] && wsf1.length!=0 && side==2){move10();}
        else if(point2==order[0] && wsf2.length!=0 && side==2){move11();}
        else if(point3==order[0] && wsf3.length!=0 && side==2){move12();}
        else if(point4==order[0] && wsf4.length!=0 && side==2){move13();}
        else if(point5==order[0] && wsf5.length!=0 && side==2){move14();}
        else if(point6==order[0] && wsf6.length!=0 && side==2){move15();}
        else if(point7==order[0] && wsf7.length!=0 && side==2){move16();}
        else if(point8==order[0] && wsf8.length!=0 && side==2){move17();}
        else if(point9==order[0] && wsf9.length!=0 && side==2){move18();}
         else if(point1==order[1] && wsf1.length!=0 && side==2){move10();}
        else if(point2==order[1] && wsf2.length!=0 && side==2){move11();}
        else if(point3==order[1] && wsf3.length!=0 && side==2){move12();}
        else if(point4==order[1] && wsf4.length!=0 && side==2){move13();}
        else if(point5==order[1] && wsf5.length!=0 && side==2){move14();}
        else if(point6==order[1] && wsf6.length!=0 && side==2){move15();}
        else if(point7==order[1] && wsf7.length!=0 && side==2){move16();}
        else if(point8==order[1] && wsf8.length!=0 && side==2){move17();}
        else if(point9==order[1] && wsf9.length!=0 && side==2){move18();}
         else if(point1==order[2] && wsf1.length!=0 && side==2){move10();}
        else if(point2==order[2] && wsf2.length!=0 && side==2){move11();}
        else if(point3==order[2] && wsf3.length!=0 && side==2){move12();}
        else if(point4==order[2] && wsf4.length!=0 && side==2){move13();}
        else if(point5==order[2] && wsf5.length!=0 && side==2){move14();}
        else if(point6==order[2] && wsf6.length!=0 && side==2){move15();}
        else if(point7==order[2] && wsf7.length!=0 && side==2){move16();}
        else if(point8==order[2] && wsf8.length!=0 && side==2){move17();}
        else if(point9==order[2] && wsf9.length!=0 && side==2){move18();}
         else if(point1==order[3] && wsf1.length!=0 && side==2){move10();}
        else if(point2==order[3] && wsf2.length!=0 && side==2){move11();}
        else if(point3==order[3] && wsf3.length!=0 && side==2){move12();}
        else if(point4==order[3] && wsf4.length!=0 && side==2){move13();}
        else if(point5==order[3] && wsf5.length!=0 && side==2){move14();}
        else if(point6==order[3] && wsf6.length!=0 && side==2){move15();}
        else if(point7==order[3] && wsf7.length!=0 && side==2){move16();}
        else if(point8==order[3] && wsf8.length!=0 && side==2){move17();}
        else if(point9==order[3] && wsf9.length!=0 && side==2){move18();}
         else if(point1==order[4] && wsf1.length!=0 && side==2){move10();}
        else if(point2==order[4] && wsf2.length!=0 && side==2){move11();}
        else if(point3==order[4] && wsf3.length!=0 && side==2){move12();}
        else if(point4==order[4] && wsf4.length!=0 && side==2){move13();}
        else if(point5==order[4] && wsf5.length!=0 && side==2){move14();}
        else if(point6==order[4] && wsf6.length!=0 && side==2){move15();}
        else if(point7==order[4] && wsf7.length!=0 && side==2){move16();}
        else if(point8==order[4] && wsf8.length!=0 && side==2){move17();}
        else if(point9==order[4] && wsf9.length!=0 && side==2){move18();}
         else if(point1==order[5] && wsf1.length!=0 && side==2){move10();}
        else if(point2==order[5] && wsf2.length!=0 && side==2){move11();}
        else if(point3==order[5] && wsf3.length!=0 && side==2){move12();}
        else if(point4==order[5] && wsf4.length!=0 && side==2){move13();}
        else if(point5==order[5] && wsf5.length!=0 && side==2){move14();}
        else if(point6==order[5] && wsf6.length!=0 && side==2){move15();}
        else if(point7==order[5] && wsf7.length!=0 && side==2){move16();}
        else if(point8==order[5] && wsf8.length!=0 && side==2){move17();}
        else if(point9==order[5] && wsf9.length!=0 && side==2){move18();}
         else if(point1==order[6] && wsf1.length!=0 && side==2){move10();}
        else if(point2==order[6] && wsf2.length!=0 && side==2){move11();}
        else if(point3==order[6] && wsf3.length!=0 && side==2){move12();}
        else if(point4==order[6] && wsf4.length!=0 && side==2){move13();}
        else if(point5==order[6] && wsf5.length!=0 && side==2){move14();}
        else if(point6==order[6] && wsf6.length!=0 && side==2){move15();}
        else if(point7==order[6] && wsf7.length!=0 && side==2){move16();}
        else if(point8==order[6] && wsf8.length!=0 && side==2){move17();}
        else if(point9==order[6] && wsf9.length!=0 && side==2){move18();}
         else if(point1==order[7] && wsf1.length!=0 && side==2){move10();}
        else if(point2==order[7] && wsf2.length!=0 && side==2){move11();}
        else if(point3==order[7] && wsf3.length!=0 && side==2){move12();}
        else if(point4==order[7] && wsf4.length!=0 && side==2){move13();}
        else if(point5==order[7] && wsf5.length!=0 && side==2){move14();}
        else if(point6==order[7] && wsf6.length!=0 && side==2){move15();}
        else if(point7==order[7] && wsf7.length!=0 && side==2){move16();}
        else if(point8==order[7] && wsf8.length!=0 && side==2){move17();}
        else if(point9==order[7] && wsf9.length!=0 && side==2){move18();}
         else if(point1==order[8] && wsf1.length!=0 && side==2){move10();}
        else if(point2==order[8] && wsf2.length!=0 && side==2){move11();}
        else if(point3==order[8] && wsf3.length!=0 && side==2){move12();}
        else if(point4==order[8] && wsf4.length!=0 && side==2){move13();}
        else if(point5==order[8] && wsf5.length!=0 && side==2){move14();}
        else if(point6==order[8] && wsf6.length!=0 && side==2){move15();}
        else if(point7==order[8] && wsf7.length!=0 && side==2){move16();}
        else if(point8==order[8] && wsf8.length!=0 && side==2){move17();}
        else if(point9==order[8] && wsf9.length!=0 && side==2){move18();}
         else if(point1==order[9] && wsf1.length!=0 && side==2){move10();}
        else if(point2==order[9] && wsf2.length!=0 && side==2){move11();}
        else if(point3==order[9] && wsf3.length!=0 && side==2){move12();}
        else if(point4==order[9] && wsf4.length!=0 && side==2){move13();}
        else if(point5==order[9] && wsf5.length!=0 && side==2){move14();}
        else if(point6==order[9] && wsf6.length!=0 && side==2){move15();}
        else if(point7==order[9] && wsf7.length!=0 && side==2){move16();}
        else if(point8==order[9] && wsf8.length!=0 && side==2){move17();}
        else if(point9==order[9] && wsf9.length!=0 && side==2){move18();}
    }, 1500);

  }


