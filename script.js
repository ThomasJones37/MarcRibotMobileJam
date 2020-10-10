

const audio = document.getElementById('main_song');
const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
const note3 = document.getElementById('note3');
const note4 = document.getElementById('note4');
const note5 = document.getElementById('note5');
const note6 = document.getElementById('note6');
const note7 = document.getElementById('note7');
const songTitle = document.getElementsByClassName("song_title")[0];
const menu = document.getElementsByClassName("sub-menu")[0];
const burger = document.getElementsByClassName("burger_img")[0];

const key1 = document.getElementsByClassName("key")[0];
const key2 = document.getElementsByClassName("key")[1];
const key3 = document.getElementsByClassName("key")[2];
const key4 = document.getElementsByClassName("key")[3];
const key5 = document.getElementsByClassName("key")[4];
const key6 = document.getElementsByClassName("key")[5];
const key7 = document.getElementsByClassName("key")[6];



note1.volume = 0.35;
note2.volume = 0.35;
note3.volume = 0.35;
note4.volume = 0.35;
note5.volume = 0.35;
note6.volume = 0.25;
note7.volume = 0.25;

audio.src = './sounds/I.mp3'; // C 
note1.src = './sounds/A.wav';
note2.src = './sounds/B.wav';
note3.src = './sounds/C.wav';
note4.src = './sounds/D.wav';
note5.src = './sounds/E.wav';
note6.src = './sounds/F.wav';
note7.src = './sounds/G.wav';

let a = 1;
let b = 1;



                        // KEYS //
                        
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransitionKeys));

function removeTransitionKeys() {  
  this.classList.remove('playing');
}

const songTit = document.querySelectorAll('.song_title');
songTit.forEach(song_title => song_title.addEventListener('transitionend', removeTransitiontits));

function removeTransitiontits() {  
  this.classList.remove('show');
}


const reload = document.querySelectorAll('.reload');
reload.forEach(reload => reload.addEventListener('transitionend', removeTransitionReload));

 function removeTransitionReload () {
    this.classList.remove('r')
 }

 const prev = document.querySelectorAll('.previous');
 prev.forEach(prev => prev.addEventListener('transitionend', removeTransitionPreviousNext));
 
  function removeTransitionPreviousNext () {
     this.classList.remove('n')
  }

  const nex = document.querySelectorAll('.next');
  nex.forEach(nex => nex.addEventListener('transitionend', removeTransitionPreviousNext));

  const pp = document.querySelectorAll('.pp');
  pp.forEach(pp => pp.addEventListener('transitionend', removeTransitionPreviousNext));
  







window.addEventListener('keydown', controls);
    
function controls(e) {

  
  if (e.keyCode == 82) { //reload
    
    audio.currentTime = 0;
    const reload = document.getElementsByClassName("reload")[0];
    reload.classList.add('r');  
    if(audio.paused) {
      
      return;
    }
    else {
      songTitle.classList.add('show');
      audio.play();

    }
  }
  else if (e.keyCode == 32) { // play pause

    audio.muted = false;
    const pp = document.getElementsByClassName("pp")[0];
    pp.classList.add('n');  

    if(audio.paused) {
      audio.play();
      songTitle.classList.add('show');
      
    }
    else {
      audio.pause();
      songTitle.classList.remove('show');
      
    }
  }
  else if (e.keyCode == 37) { // previous song
    
    const prev = document.getElementsByClassName("previous")[0];
    prev.classList.add('n');  

    if (b == 1) {
      
    audio.src = './sounds/III.mp3'; // D- harm

    document.getElementsByClassName('song_title')[0].innerHTML = "Aurora en Pekin";
    songTitle.classList.add('show');
      

    document.getElementsByClassName("kbd")[0].innerHTML = "A";
    document.getElementsByClassName("kbd")[1].innerHTML = "Bb";
    document.getElementsByClassName("kbd")[2].innerHTML = "C#";
    document.getElementsByClassName("kbd")[3].innerHTML = "D";
    document.getElementsByClassName("kbd")[4].innerHTML = "E";
    document.getElementsByClassName("kbd")[5].innerHTML = "F";
    document.getElementsByClassName("kbd")[6].innerHTML = "G";
    
    note1.src = './sounds/A.wav';
    note2.src = './sounds/Bb.wav';
    note3.src = './sounds/Db.wav';
    note4.src = './sounds/D.wav';
    note5.src = './sounds/E.wav';
    note6.src = './sounds/F.wav';
    note7.src = './sounds/G.wav';
    b++;
    a = 3;

    }
    else if (b==2) {
    audio.src = './sounds/II.mp3'; // E

    document.getElementsByClassName('song_title')[0].innerHTML = "Jaguey";
    songTitle.classList.add('show');
      

    document.getElementsByClassName("kbd")[0].innerHTML = "G#";
    document.getElementsByClassName("kbd")[1].innerHTML = "A";
    document.getElementsByClassName("kbd")[2].innerHTML = "B";
    document.getElementsByClassName("kbd")[3].innerHTML = "C#";
    document.getElementsByClassName("kbd")[4].innerHTML = "D#";
    document.getElementsByClassName("kbd")[5].innerHTML = "E";
    document.getElementsByClassName("kbd")[6].innerHTML = "F#";

    note1.src = './sounds/Ab.wav';
    note2.src = './sounds/A.wav';
    note3.src = './sounds/B.wav';
    note4.src = './sounds/Db.wav';
    note5.src = './sounds/Eb.wav';
    note6.src = './sounds/E.wav';
    note7.src = './sounds/Gb.wav';
    b++;
    a = 2;
    }
    else if (b==3) {
      audio.src = './sounds/I.mp3'; // C 

      document.getElementsByClassName('song_title')[0].innerHTML = "Dame un cachito pa'huele";
    songTitle.classList.add('show');
      

    document.getElementsByClassName("kbd")[0].innerHTML = "A";
    document.getElementsByClassName("kbd")[1].innerHTML = "B";
    document.getElementsByClassName("kbd")[2].innerHTML = "C";
    document.getElementsByClassName("kbd")[3].innerHTML = "D";
    document.getElementsByClassName("kbd")[4].innerHTML = "E";
    document.getElementsByClassName("kbd")[5].innerHTML = "F";
    document.getElementsByClassName("kbd")[6].innerHTML = "G";

      note1.src = './sounds/A.wav';
      note2.src = './sounds/B.wav';
      note3.src = './sounds/C.wav';
      note4.src = './sounds/D.wav';
      note5.src = './sounds/E.wav';
      note6.src = './sounds/F.wav';
      note7.src = './sounds/G.wav';
      b=1;
      a = 1;
    }
    document.getElementById('main_song').load();
    document.getElementById('note1').load();
    document.getElementById('note2').load();
    document.getElementById('note3').load();
    document.getElementById('note4').load();
    document.getElementById('note5').load();
    document.getElementById('note6').load();
    document.getElementById('note7').load();
    audio.play();
    audio.muted = false;

  } 

  else if (e.keyCode == 39) { // next song
    
    const nextt = document.getElementsByClassName("next")[0];
    nextt.classList.add('n');  
    
    
    if (a == 1) {
      audio.src = './sounds/II.mp3'; // E

      document.getElementsByClassName('song_title')[0].innerHTML = "Jaguey";
    songTitle.classList.add('show');
      

      document.getElementsByClassName("kbd")[0].innerHTML = "G#";
    document.getElementsByClassName("kbd")[1].innerHTML = "A";
    document.getElementsByClassName("kbd")[2].innerHTML = "B";
    document.getElementsByClassName("kbd")[3].innerHTML = "C#";
    document.getElementsByClassName("kbd")[4].innerHTML = "D#";
    document.getElementsByClassName("kbd")[5].innerHTML = "E";
    document.getElementsByClassName("kbd")[6].innerHTML = "F#";
      
      note1.src = './sounds/Ab.wav';
      note2.src = './sounds/A.wav';
      note3.src = './sounds/B.wav';
      note4.src = './sounds/Db.wav';
      note5.src = './sounds/Eb.wav';
      note6.src = './sounds/E.wav';
      note7.src = './sounds/Gb.wav';
      a++;
      b = 3;
    }
    else if (a==2) {
      audio.src = './sounds/III.mp3'; // D- harm
      
      document.getElementsByClassName('song_title')[0].innerHTML = "Aurora en Pekin";
    songTitle.classList.add('show');
     

      document.getElementsByClassName("kbd")[0].innerHTML = "A";
    document.getElementsByClassName("kbd")[1].innerHTML = "Bb";
    document.getElementsByClassName("kbd")[2].innerHTML = "C#";
    document.getElementsByClassName("kbd")[3].innerHTML = "D";
    document.getElementsByClassName("kbd")[4].innerHTML = "E";
    document.getElementsByClassName("kbd")[5].innerHTML = "F";
    document.getElementsByClassName("kbd")[6].innerHTML = "G";

      note1.src = './sounds/A.wav';
      note2.src = './sounds/Bb.wav';
      note3.src = './sounds/Db.wav';
      note4.src = './sounds/D.wav';
      note5.src = './sounds/E.wav';
      note6.src = './sounds/F.wav';
      note7.src = './sounds/G.wav';
      a++;
      b = 2;
    }
    else if (a==3) {
      audio.src = './sounds/I.mp3'; // C 

      document.getElementsByClassName('song_title')[0].innerHTML = "Dame un cachito pa'huele";
    songTitle.classList.add('show');
     

      document.getElementsByClassName("kbd")[0].innerHTML = "A";
    document.getElementsByClassName("kbd")[1].innerHTML = "B";
    document.getElementsByClassName("kbd")[2].innerHTML = "C";
    document.getElementsByClassName("kbd")[3].innerHTML = "D";
    document.getElementsByClassName("kbd")[4].innerHTML = "E";
    document.getElementsByClassName("kbd")[5].innerHTML = "F";
    document.getElementsByClassName("kbd")[6].innerHTML = "G";

      note1.src = './sounds/A.wav';
      note2.src = './sounds/B.wav';
      note3.src = './sounds/C.wav';
      note4.src = './sounds/D.wav';
      note5.src = './sounds/E.wav';
      note6.src = './sounds/F.wav';
      note7.src = './sounds/G.wav';
      a = 1;
      b = 1;
    }
    document.getElementById('main_song').load();
    document.getElementById('note1').load();
    document.getElementById('note2').load();
    document.getElementById('note3').load();
    document.getElementById('note4').load();
    document.getElementById('note5').load();
    document.getElementById('note6').load();
    document.getElementById('note7').load();
    audio.play();
    audio.muted = false;
  } else if (e.keyCode == 73) { // sub menu
      
      menu.classList.add('button_vis');
      burger.classList.add('button_vis');
      songTitle.classList.add('show');

      setTimeout(() => { 
      menu.classList.remove('button_vis');
      burger.classList.remove('button_vis');}, 2500);
      
  
  }
     
  else { // keyboard
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    if (!audio) return; // stop from running
    audio.currentTime = 0; // rewind audio to start !
    audio.play();
    key.classList.add('playing');
  }
}











                // CLICKS //


document.getElementsByClassName("pp")[0].addEventListener("mousedown", function(){
 
  audio.muted = false;
      if(audio.paused) {
        audio.play();
        songTitle.classList.add('show');
      
      }
      else {
        audio.pause();
        songTitle.classList.remove('show');
      }
});




document.getElementsByClassName("next")[0].addEventListener("mousedown", next);



function next(){


  if (a == 1) {
    audio.src = './sounds/II.mp3'; // E

    document.getElementsByClassName('song_title')[0].innerHTML = "Jaguey";
    songTitle.classList.add('show');
     

    document.getElementsByClassName("kbd")[0].innerHTML = "G#";
    document.getElementsByClassName("kbd")[1].innerHTML = "A";
    document.getElementsByClassName("kbd")[2].innerHTML = "B";
    document.getElementsByClassName("kbd")[3].innerHTML = "C#";
    document.getElementsByClassName("kbd")[4].innerHTML = "D#";
    document.getElementsByClassName("kbd")[5].innerHTML = "E";
    document.getElementsByClassName("kbd")[6].innerHTML = "F#";
    
    note1.src = './sounds/Ab.wav';
    note2.src = './sounds/A.wav';
    note3.src = './sounds/B.wav';
    note4.src = './sounds/Db.wav';
    note5.src = './sounds/Eb.wav';
    note6.src = './sounds/E.wav';
    note7.src = './sounds/Gb.wav';
    a++;
    b = 3;
  }
  else if (a==2) {
    audio.src = './sounds/III.mp3'; // D- harm

    document.getElementsByClassName('song_title')[0].innerHTML = "Aurora en Pekin";
    songTitle.classList.add('show');
     

    document.getElementsByClassName("kbd")[0].innerHTML = "A";
    document.getElementsByClassName("kbd")[1].innerHTML = "Bb";
    document.getElementsByClassName("kbd")[2].innerHTML = "C#";
    document.getElementsByClassName("kbd")[3].innerHTML = "D";
    document.getElementsByClassName("kbd")[4].innerHTML = "E";
    document.getElementsByClassName("kbd")[5].innerHTML = "F";
    document.getElementsByClassName("kbd")[6].innerHTML = "G";

    note1.src = './sounds/A.wav';
    note2.src = './sounds/Bb.wav';
    note3.src = './sounds/Db.wav';
    note4.src = './sounds/D.wav';
    note5.src = './sounds/E.wav';
    note6.src = './sounds/F.wav';
    note7.src = './sounds/G.wav';
    a++;
    b = 2;
  }
  else if (a==3) {
    audio.src = './sounds/I.mp3'; // C 

    document.getElementsByClassName('song_title')[0].innerHTML = "Dame un cachito pa'huele";
    songTitle.classList.add('show');
      

    document.getElementsByClassName("kbd")[0].innerHTML = "A";
    document.getElementsByClassName("kbd")[1].innerHTML = "B";
    document.getElementsByClassName("kbd")[2].innerHTML = "C";
    document.getElementsByClassName("kbd")[3].innerHTML = "D";
    document.getElementsByClassName("kbd")[4].innerHTML = "E";
    document.getElementsByClassName("kbd")[5].innerHTML = "F";
    document.getElementsByClassName("kbd")[6].innerHTML = "G";

    note1.src = './sounds/A.wav';
    note2.src = './sounds/B.wav';
    note3.src = './sounds/C.wav';
    note4.src = './sounds/D.wav';
    note5.src = './sounds/E.wav';
    note6.src = './sounds/F.wav';
    note7.src = './sounds/G.wav';
    
    a = 1;
    b = 1;
  }
  document.getElementById('main_song').load();
  document.getElementById('note1').load();
  document.getElementById('note2').load();
  document.getElementById('note3').load();
  document.getElementById('note4').load();
  document.getElementById('note5').load();
  document.getElementById('note6').load();
  document.getElementById('note7').load();
  audio.play();
  audio.muted = false;

}


document.getElementsByClassName("previous")[0].addEventListener("mousedown", previous);



function previous (){


  if (b == 1) {
  audio.src = './sounds/III.mp3'; // D- harm

  document.getElementsByClassName('song_title')[0].innerHTML = "Aurora en Pekin";
    songTitle.classList.add('show');
     

  document.getElementsByClassName("kbd")[0].innerHTML = "A";
    document.getElementsByClassName("kbd")[1].innerHTML = "Bb";
    document.getElementsByClassName("kbd")[2].innerHTML = "C#";
    document.getElementsByClassName("kbd")[3].innerHTML = "D";
    document.getElementsByClassName("kbd")[4].innerHTML = "E";
    document.getElementsByClassName("kbd")[5].innerHTML = "F";
    document.getElementsByClassName("kbd")[6].innerHTML = "G";

  note1.src = './sounds/A.wav';
  note2.src = './sounds/Bb.wav';
  note3.src = './sounds/Db.wav';
  note4.src = './sounds/D.wav';
  note5.src = './sounds/E.wav';
  note6.src = './sounds/F.wav';
  note7.src = './sounds/G.wav';
  b++;
  a = 3;

  }
  else if (b==2) {
    audio.src = './sounds/II.mp3'; // E

    document.getElementsByClassName('song_title')[0].innerHTML = "Jaguey";
    songTitle.classList.add('show');
    

    document.getElementsByClassName("kbd")[0].innerHTML = "G#";
    document.getElementsByClassName("kbd")[1].innerHTML = "A";
    document.getElementsByClassName("kbd")[2].innerHTML = "B";
    document.getElementsByClassName("kbd")[3].innerHTML = "C#";
    document.getElementsByClassName("kbd")[4].innerHTML = "D#";
    document.getElementsByClassName("kbd")[5].innerHTML = "E";
    document.getElementsByClassName("kbd")[6].innerHTML = "F#";

    note1.src = './sounds/Ab.wav';
    note2.src = './sounds/A.wav';
    note3.src = './sounds/B.wav';
    note4.src = './sounds/Db.wav';
    note5.src = './sounds/Eb.wav';
    note6.src = './sounds/E.wav';
    note7.src = './sounds/Gb.wav';
    b++;
    a = 2;
  }
  else if (b==3) {
    audio.src = './sounds/I.mp3'; // C *

    document.getElementsByClassName('song_title')[0].innerHTML = "Dame un cachito pa'huele";
    songTitle.classList.add('show');
      

    document.getElementsByClassName("kbd")[0].innerHTML = "A";
    document.getElementsByClassName("kbd")[1].innerHTML = "B";
    document.getElementsByClassName("kbd")[2].innerHTML = "C";
    document.getElementsByClassName("kbd")[3].innerHTML = "D";
    document.getElementsByClassName("kbd")[4].innerHTML = "E";
    document.getElementsByClassName("kbd")[5].innerHTML = "F";
    document.getElementsByClassName("kbd")[6].innerHTML = "G";

    note1.src = './sounds/A.wav';
    note2.src = './sounds/B.wav';
    note3.src = './sounds/C.wav';
    note4.src = './sounds/D.wav';
    note5.src = './sounds/E.wav';
    note6.src = './sounds/F.wav';
    note7.src = './sounds/G.wav';
    b=1;
    a = 1;
  }
  document.getElementById('main_song').load();
  document.getElementById('note1').load();
  document.getElementById('note2').load();
  document.getElementById('note3').load();
  document.getElementById('note4').load();
  document.getElementById('note5').load();
  document.getElementById('note6').load();
  document.getElementById('note7').load();
  audio.play();
  audio.muted = false;

}

document.getElementsByClassName("reload")[0].addEventListener("mousedown", function(){

  audio.currentTime = 0;
  if(audio.paused) {
        return;
      }
      else {
        songTitle.classList.add('show');
      
        audio.play();
      }
});


document.getElementsByClassName("key")[0].addEventListener("mousedown", function(){
  
  
  note1.currentTime=0;
  note1.volume = 0.5;
  note1.play();
  key1.classList.add('playing');
});

document.getElementsByClassName("key")[1].addEventListener("mousedown", function(){
  
  note2.currentTime=0;
  note2.volume = 0.5;
  note2.play();
  key2.classList.add('playing');
});

document.getElementsByClassName("key")[2].addEventListener("mousedown", function(){
  
note3.currentTime=0;
note3.volume = 0.5;
note3.play();
key3.classList.add('playing');
});

document.getElementsByClassName("key")[3].addEventListener("mousedown", function(){
 
  note4.currentTime=0;
  note4.volume = 0.5;
  note4.play();
  key4.classList.add('playing');
});

document.getElementsByClassName("key")[4].addEventListener("mousedown", function(){
  
  note5.currentTime=0;
  note5.volume = 0.5;
  note5.play();
  key5.classList.add('playing');
});

document.getElementsByClassName("key")[5].addEventListener("mousedown", function(){

  note6.volume = 0.3;
  note6.currentTime=0;
  note6.play();
  key6.classList.add('playing');
});

document.getElementsByClassName("key")[6].addEventListener("mousedown", function(){
 
  note7.volume = 0.3;
  note7.currentTime=0;
  note7.play();
  key7.classList.add('playing');
});





// document.getElementById('song_title').innerHTML = "Dame un cachito pa'huele";