

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

const keys = document.querySelectorAll('.key'); /* all of the keys*/

const key1 = document.getElementsByClassName("key")[0];
const key2 = document.getElementsByClassName("key")[1];
const key3 = document.getElementsByClassName("key")[2];
const key4 = document.getElementsByClassName("key")[3];
const key5 = document.getElementsByClassName("key")[4];
const key6 = document.getElementsByClassName("key")[5];
const key7 = document.getElementsByClassName("key")[6];

const kbd1 = document.getElementsByClassName("kbd")[0];
const kbd2 = document.getElementsByClassName("kbd")[1];
const kbd3 = document.getElementsByClassName("kbd")[2];
const kbd4 = document.getElementsByClassName("kbd")[3];
const kbd5 = document.getElementsByClassName("kbd")[4];
const kbd6 = document.getElementsByClassName("kbd")[5];
const kbd7 = document.getElementsByClassName("kbd")[6];

const pp = document.getElementsByClassName("pp")[0];
const reload = document.getElementsByClassName("reload")[0];
const prev = document.getElementsByClassName("previous")[0];
const nextt = document.getElementsByClassName("next")[0];
const swap = document.getElementsByClassName("swap")[0];

const swapNames = document.getElementsByClassName("swap_names")[0];

// swapNames.innerHTML = "Old Piano";

songTitle.innerHTML = "Dame un cachito pa'huele";

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

kbd1.innerHTML = "A";
kbd2.innerHTML = "B";
kbd3.innerHTML = "C";
kbd4.innerHTML = "D";
kbd5.innerHTML = "E";
kbd6.innerHTML = "F";
kbd7.innerHTML = "G";

let a = 1;
let b = 1;
let c = 1;

reload.addEventListener('transitionend', removeTransition);
pp.addEventListener('transitionend', removeTransition);
prev.addEventListener('transitionend', removeTransition);
nextt.addEventListener('transitionend', removeTransition);
songTitle.addEventListener('transitionend', removeTransition);
swap.addEventListener('transitionend', removeTransition);
swapNames.addEventListener('transitionend', removeTransition);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function removeTransition () {
  this.classList.remove('r');
  this.classList.remove('n'); /* pp prev nextt swap */
  this.classList.remove('show');
  this.classList.remove('playing');
  
}




















                        // KEYS //
                        


window.addEventListener('keydown', controls);
    
function controls(e) {

  
  if (e.keyCode == 82) { //reload
    
    audio.currentTime = 0;
    
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
    
    
    prev.classList.add('n');  

    if (b == 1) {
      
      audio.src = './sounds/III.mp3'; // D- harm

      songTitle.innerHTML = "Aurora en Pekin";
      songTitle.classList.add('show');
      
      b++;
      a = 3;

      if (c==1) {
        note1.src = './sounds/A.wav';
        note2.src = './sounds/Bb.wav';
        note3.src = './sounds/Db.wav';
        note4.src = './sounds/D.wav';
        note5.src = './sounds/E.wav';
        note6.src = './sounds/F.wav';
        note7.src = './sounds/G.wav';
        kbd1.innerHTML = "A";
        kbd2.innerHTML = "Bb";
        kbd3.innerHTML = "C#";
        kbd4.innerHTML = "D";
        kbd5.innerHTML = "E";
        kbd6.innerHTML = "F";
        kbd7.innerHTML = "G";
      } else if (c==2) {
        note1.src = './sounds/II/Db.mp3';
        note2.src = './sounds/II/D.mp3';
        note3.src = './sounds/II/E.mp3';
        note4.src = './sounds/II/F.mp3';
        note5.src = './sounds/II/G.mp3';
        note6.src = './sounds/II/A.mp3';
        note7.src = './sounds/II/Bb.mp3';
        kbd1.innerHTML = "C#";
        kbd2.innerHTML = "D";
        kbd3.innerHTML = "E";
        kbd4.innerHTML = "F";
        kbd5.innerHTML = "G";
        kbd6.innerHTML = "A";
        kbd7.innerHTML = "Bb";
      }
  

    }
    else if (b==2) {
      audio.src = './sounds/II.mp3'; // E

      songTitle.innerHTML = "Jaguey";
      songTitle.classList.add('show');

      b++;
      a = 2;
      if (c==1) {
        note1.src = './sounds/Ab.wav';
        note2.src = './sounds/A.wav';
        note3.src = './sounds/B.wav';
        note4.src = './sounds/Db.wav';
        note5.src = './sounds/Eb.wav';
        note6.src = './sounds/E.wav';
        note7.src = './sounds/Gb.wav';
        kbd1.innerHTML = "G#";
        kbd2.innerHTML = "A";
        kbd3.innerHTML = "B";
        kbd4.innerHTML = "C#";
        kbd5.innerHTML = "D#";
        kbd6.innerHTML = "E";
        kbd7.innerHTML = "F#";
      } 
      else if (c==2) {
        note1.src = './sounds/II/Db.mp3';
        note2.src = './sounds/II/Eb.mp3';
        note3.src = './sounds/II/E.mp3';
        note4.src = './sounds/II/Gb.mp3';
        note5.src = './sounds/II/Ab.mp3';
        note6.src = './sounds/II/A.mp3';
        note7.src = './sounds/II/B.mp3';
        kbd1.innerHTML = "C#";
        kbd2.innerHTML = "D#";
        kbd3.innerHTML = "E";
        kbd4.innerHTML = "F#";
        kbd5.innerHTML = "G#";
        kbd6.innerHTML = "A";
        kbd7.innerHTML = "B";

      }
    
    }
    else if (b==3) {
      audio.src = './sounds/I.mp3'; // C 

      songTitle.innerHTML = "Dame un cachito pa'huele";
      songTitle.classList.add('show');

      b=1;
      a = 1;
        if (c==1) {
          note1.src = './sounds/A.wav';
          note2.src = './sounds/B.wav';
          note3.src = './sounds/C.wav';
          note4.src = './sounds/D.wav';
          note5.src = './sounds/E.wav';
          note6.src = './sounds/F.wav';
          note7.src = './sounds/G.wav';
          kbd1.innerHTML = "A";
          kbd2.innerHTML = "B";
          kbd3.innerHTML = "C";
          kbd4.innerHTML = "D";
          kbd5.innerHTML = "E";
          kbd6.innerHTML = "F";
          kbd7.innerHTML = "G";
        }
        else if (c==2) {
          note1.src = './sounds/II/C.mp3';
          note2.src = './sounds/II/D.mp3';
          note3.src = './sounds/II/E.mp3';
          note4.src = './sounds/II/F.mp3';
          note5.src = './sounds/II/G.mp3';
          note6.src = './sounds/II/A.mp3';
          note7.src = './sounds/II/B.mp3';
          kbd1.innerHTML = "C";
          kbd2.innerHTML = "D";
          kbd3.innerHTML = "E";
          kbd4.innerHTML = "F";
          kbd5.innerHTML = "G";
          kbd6.innerHTML = "A";
          kbd7.innerHTML = "B";
        }
        
    }
    audio.load();
    note1.load();
    note2.load();
    note3.load();
    note4.load();
    note5.load();
    note6.load();
    note7.load();
    audio.play();
    audio.muted = false;

  } 

  else if (e.keyCode == 39) { // next song
    
    
    nextt.classList.add('n');  
    
    
    if (a == 1) {
      audio.src = './sounds/II.mp3'; // E

      songTitle.innerHTML = "Jaguey";
      songTitle.classList.add('show');
      
      a++;
      b = 3;

        if (c==1) {
          note1.src = './sounds/Ab.wav';
          note2.src = './sounds/A.wav';
          note3.src = './sounds/B.wav';
          note4.src = './sounds/Db.wav';
          note5.src = './sounds/Eb.wav';
          note6.src = './sounds/E.wav';
          note7.src = './sounds/Gb.wav';
          kbd1.innerHTML = "G#";
          kbd2.innerHTML = "A";
          kbd3.innerHTML = "B";
          kbd4.innerHTML = "C#";
          kbd5.innerHTML = "D#";
          kbd6.innerHTML = "E";
          kbd7.innerHTML = "F#";
        }
        else if (c==2) {
          note1.src = './sounds/II/Db.mp3';
        note2.src = './sounds/II/Eb.mp3';
        note3.src = './sounds/II/E.mp3';
        note4.src = './sounds/II/Gb.mp3';
        note5.src = './sounds/II/Ab.mp3';
        note6.src = './sounds/II/A.mp3';
        note7.src = './sounds/II/B.mp3';
        kbd1.innerHTML = "C#";
        kbd2.innerHTML = "D#";
        kbd3.innerHTML = "E";
        kbd4.innerHTML = "F#";
        kbd5.innerHTML = "G#";
        kbd6.innerHTML = "A";
        kbd7.innerHTML = "B";
        }    
    }
    else if (a==2) {
      audio.src = './sounds/III.mp3'; // D- harm
      
      songTitle.innerHTML = "Aurora en Pekin";
    songTitle.classList.add('show');

    a++;
      b = 2;
      if (c ==1) {
        note1.src = './sounds/A.wav';
        note2.src = './sounds/Bb.wav';
        note3.src = './sounds/Db.wav';
        note4.src = './sounds/D.wav';
        note5.src = './sounds/E.wav';
        note6.src = './sounds/F.wav';
        note7.src = './sounds/G.wav';
        kbd1.innerHTML = "A";
        kbd2.innerHTML = "Bb";
        kbd3.innerHTML = "C#";
        kbd4.innerHTML = "D";
        kbd5.innerHTML = "E";
        kbd6.innerHTML = "F";
        kbd7.innerHTML = "G";
      } else if (c==2) {
        note1.src = './sounds/II/Db.mp3';
        note2.src = './sounds/II/D.mp3';
        note3.src = './sounds/II/E.mp3';
        note4.src = './sounds/II/F.mp3';
        note5.src = './sounds/II/G.mp3';
        note6.src = './sounds/II/A.mp3';
        note7.src = './sounds/II/Bb.mp3';
        kbd1.innerHTML = "C#";
        kbd2.innerHTML = "D";
        kbd3.innerHTML = "E";
        kbd4.innerHTML = "F";
        kbd5.innerHTML = "G";
        kbd6.innerHTML = "A";
        kbd7.innerHTML = "Bb";
      }
      
    }
    else if (a==3) {
      audio.src = './sounds/I.mp3'; // C 

      songTitle.innerHTML = "Dame un cachito pa'huele";
    songTitle.classList.add('show');

    a = 1;
      b = 1;
      if (c==1) {
        note1.src = './sounds/A.wav';
        note2.src = './sounds/B.wav';
        note3.src = './sounds/C.wav';
        note4.src = './sounds/D.wav';
        note5.src = './sounds/E.wav';
        note6.src = './sounds/F.wav';
        note7.src = './sounds/G.wav';
        kbd1.innerHTML = "A";
        kbd2.innerHTML = "B";
        kbd3.innerHTML = "C";
        kbd4.innerHTML = "D";
        kbd5.innerHTML = "E";
        kbd6.innerHTML = "F";
        kbd7.innerHTML = "G";
      } 
      else if (c==2) {
        note1.src = './sounds/II/C.mp3';
        note2.src = './sounds/II/D.mp3';
        note3.src = './sounds/II/E.mp3';
        note4.src = './sounds/II/F.mp3';
        note5.src = './sounds/II/G.mp3';
        note6.src = './sounds/II/A.mp3';
        note7.src = './sounds/II/B.mp3';
        kbd1.innerHTML = "C";
        kbd2.innerHTML = "D";
        kbd3.innerHTML = "E";
        kbd4.innerHTML = "F";
        kbd5.innerHTML = "G";
        kbd6.innerHTML = "A";
        kbd7.innerHTML = "B";
      }
      
    }
    audio.load();
    note1.load();
    note2.load();
    note3.load();
    note4.load();
    note5.load();
    note6.load();
    note7.load();
    audio.play();
    audio.muted = false;
  } 
  
  else if (e.keyCode == 73) { // sub menu
      
      menu.classList.add('button_vis');
      burger.classList.add('button_vis');
      songTitle.classList.add('show');

      setTimeout(() => { 
      menu.classList.remove('button_vis');
      burger.classList.remove('button_vis');}, 2500);
      
  
  } 
  
  else if (e.keyCode == 49) { // 1 piano
      c = 1;
      if (a==1) {
        note1.src = './sounds/A.wav';
        note2.src = './sounds/B.wav';
        note3.src = './sounds/C.wav';
        note4.src = './sounds/D.wav';
        note5.src = './sounds/E.wav';
        note6.src = './sounds/F.wav';
        note7.src = './sounds/G.wav';
        
        kbd1.innerHTML = "A";
        kbd2.innerHTML = "B";
        kbd3.innerHTML = "C";
        kbd4.innerHTML = "D";
        kbd5.innerHTML = "E";
        kbd6.innerHTML = "F";
        kbd7.innerHTML = "G";
        
      }
      else if (a==2) {
        note1.src = './sounds/Ab.wav';
        note2.src = './sounds/A.wav';
        note3.src = './sounds/B.wav';
        note4.src = './sounds/Db.wav';
        note5.src = './sounds/Eb.wav';
        note6.src = './sounds/E.wav';
        note7.src = './sounds/Gb.wav';
          
        kbd1.innerHTML = "G#";
        kbd2.innerHTML = "A";
        kbd3.innerHTML = "B";
        kbd4.innerHTML = "C#";
        kbd5.innerHTML = "D#";
        kbd6.innerHTML = "E";
        kbd7.innerHTML = "F#";
        
      }
      else if (a==3) {
        note1.src = './sounds/A.wav';
        note2.src = './sounds/Bb.wav';
        note3.src = './sounds/Db.wav';
        note4.src = './sounds/D.wav';
        note5.src = './sounds/E.wav';
        note6.src = './sounds/F.wav';
        note7.src = './sounds/G.wav';
        kbd1.innerHTML = "A";
        kbd2.innerHTML = "Bb";
        kbd3.innerHTML = "C#";
        kbd4.innerHTML = "D";
        kbd5.innerHTML = "E";
        kbd6.innerHTML = "F";
        kbd7.innerHTML = "G";
      }
      note1.load();
      note2.load();
      note3.load();
      note4.load();
      note5.load();
      note6.load();
      note7.load();

  } 
  
  else if (e.keyCode == 50) { // 2 rhodes
    c = 2;
    if (a==1) { //C
      note1.src = './sounds/II/C.mp3';
      note2.src = './sounds/II/D.mp3';
      note3.src = './sounds/II/E.mp3';
      note4.src = './sounds/II/F.mp3';
      note5.src = './sounds/II/G.mp3';
      note6.src = './sounds/II/A.mp3';
      note7.src = './sounds/II/B.mp3';
      kbd1.innerHTML = "C";
      kbd2.innerHTML = "D";
      kbd3.innerHTML = "E";
      kbd4.innerHTML = "F";
      kbd5.innerHTML = "G";
      kbd6.innerHTML = "A";
      kbd7.innerHTML = "B";
      
    }
    else if (a==2) { // E
      note1.src = './sounds/II/Db.mp3';
      note2.src = './sounds/II/Eb.mp3';
      note3.src = './sounds/II/E.mp3';
      note4.src = './sounds/II/Gb.mp3';
      note5.src = './sounds/II/Ab.mp3';
      note6.src = './sounds/II/A.mp3';
      note7.src = './sounds/II/B.mp3';
      kbd1.innerHTML = "C#";
      kbd2.innerHTML = "D#";
      kbd3.innerHTML = "E";
      kbd4.innerHTML = "F#";
      kbd5.innerHTML = "G#";
      kbd6.innerHTML = "A";
      kbd7.innerHTML = "B";
      
    }
    else if (a==3) { // D - harm
      note1.src = './sounds/II/Db.mp3';
      note2.src = './sounds/II/D.mp3';
      note3.src = './sounds/II/E.mp3';
      note4.src = './sounds/II/F.mp3';
      note5.src = './sounds/II/G.mp3';
      note6.src = './sounds/II/A.mp3';
      note7.src = './sounds/II/Bb.mp3';
      kbd1.innerHTML = "C#";
      kbd2.innerHTML = "D";
      kbd3.innerHTML = "E";
      kbd4.innerHTML = "F";
      kbd5.innerHTML = "G";
      kbd6.innerHTML = "A";
      kbd7.innerHTML = "Bb";
    }
  note1.load();
  note2.load();
  note3.load();
  note4.load();
  note5.load();
  note6.load();
  note7.load();
  note1.volume = 0.5;
  note2.volume = 0.5;
  note3.volume = 0.5;
  note4.volume = 0.5;
  note5.volume = 0.5;
  note6.volume = 0.5;
  note7.volume = 0.5;
  }
  else { // keyboard

    const notes = document.querySelector(`audio[data-key="${e.keyCode}"]`); 

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    
    if (!audio) return; // stop from running
    notes.currentTime = 0; // rewind audio to start !
    notes.play();
    key.classList.add('playing');
  }
}





















audio.addEventListener('ended', next);



















                // CLICKS //



pp.addEventListener("mousedown", playPause);

function playPause(){
  audio.muted = false;
    if(audio.paused) {
      audio.play();
      songTitle.classList.add('show');  
    }
    else {
      audio.pause();
      songTitle.classList.remove('show');
    }
}


swap.addEventListener("mousedown", swapper);


function swapper() {
  swap.classList.add('n');
  swapNames.innerHTML = "E. Piano";
  swapNames.classList.add('show');
  if (c==1) {
        if (a==1) { //C
          note1.src = './sounds/II/C.mp3';
          note2.src = './sounds/II/D.mp3';
          note3.src = './sounds/II/E.mp3';
          note4.src = './sounds/II/F.mp3';
          note5.src = './sounds/II/G.mp3';
          note6.src = './sounds/II/A.mp3';
          note7.src = './sounds/II/B.mp3';
          
        }
        else if (a==2) { // E
          note1.src = './sounds/II/Db.mp3';
          note2.src = './sounds/II/Eb.mp3';
          note3.src = './sounds/II/E.mp3';
          note4.src = './sounds/II/Gb.mp3';
          note5.src = './sounds/II/Ab.mp3';
          note6.src = './sounds/II/A.mp3';
          note7.src = './sounds/II/B.mp3';
          
        }
        else if (a==3) { // D - harm
          note1.src = './sounds/II/Db.mp3';
          note2.src = './sounds/II/D.mp3';
          note3.src = './sounds/II/E.mp3';
          note4.src = './sounds/II/F.mp3';
          note5.src = './sounds/II/G.mp3';
          note6.src = './sounds/II/A.mp3';
          note7.src = './sounds/II/Bb.mp3';
        }
      note1.load();
      note2.load();
      note3.load();
      note4.load();
      note5.load();
      note6.load();
      note7.load();
      c=2;
        
      } 
  
  else if (c==2) { 
    swapNames.innerHTML = "Old Piano";
    if (a==1) { //C
      note1.src = './sounds/A.wav';
        note2.src = './sounds/B.wav';
        note3.src = './sounds/C.wav';
        note4.src = './sounds/D.wav';
        note5.src = './sounds/E.wav';
        note6.src = './sounds/F.wav';
        note7.src = './sounds/G.wav';        
      }
      else if (a==2) {
        note1.src = './sounds/Ab.wav';
        note2.src = './sounds/A.wav';
        note3.src = './sounds/B.wav';
        note4.src = './sounds/Db.wav';
        note5.src = './sounds/Eb.wav';
        note6.src = './sounds/E.wav';
        note7.src = './sounds/Gb.wav';        
      }
      else if (a==3) {
        note1.src = './sounds/A.wav';
        note2.src = './sounds/Bb.wav';
        note3.src = './sounds/Db.wav';
        note4.src = './sounds/D.wav';
        note5.src = './sounds/E.wav';
        note6.src = './sounds/F.wav';
        note7.src = './sounds/G.wav';
      }
      note1.load();
      note2.load();
      note3.load();
      note4.load();
      note5.load();
      note6.load();
      note7.load();
      c = 1;
}

}

nextt.addEventListener("mousedown", next);

function next(){
  nextt.classList.add('n');  
    
    
    if (a == 1) {
      audio.src = './sounds/II.mp3'; // E

      songTitle.innerHTML = "Jaguey";
      songTitle.classList.add('show');
      
      a++;
      b = 3;

        if (c==1) {
          note1.src = './sounds/Ab.wav';
          note2.src = './sounds/A.wav';
          note3.src = './sounds/B.wav';
          note4.src = './sounds/Db.wav';
          note5.src = './sounds/Eb.wav';
          note6.src = './sounds/E.wav';
          note7.src = './sounds/Gb.wav';
          kbd1.innerHTML = "G#";
          kbd2.innerHTML = "A";
          kbd3.innerHTML = "B";
          kbd4.innerHTML = "C#";
          kbd5.innerHTML = "D#";
          kbd6.innerHTML = "E";
          kbd7.innerHTML = "F#";
        }
        else if (c==2) {
          note1.src = './sounds/II/Db.mp3';
        note2.src = './sounds/II/Eb.mp3';
        note3.src = './sounds/II/E.mp3';
        note4.src = './sounds/II/Gb.mp3';
        note5.src = './sounds/II/Ab.mp3';
        note6.src = './sounds/II/A.mp3';
        note7.src = './sounds/II/B.mp3';
        kbd1.innerHTML = "C#";
        kbd2.innerHTML = "D#";
        kbd3.innerHTML = "E";
        kbd4.innerHTML = "F#";
        kbd5.innerHTML = "G#";
        kbd6.innerHTML = "A";
        kbd7.innerHTML = "B";
        }    
    }
    else if (a==2) {
      audio.src = './sounds/III.mp3'; // D- harm
      
      songTitle.innerHTML = "Aurora en Pekin";
    songTitle.classList.add('show');

    a++;
      b = 2;
      if (c ==1) {
        note1.src = './sounds/A.wav';
        note2.src = './sounds/Bb.wav';
        note3.src = './sounds/Db.wav';
        note4.src = './sounds/D.wav';
        note5.src = './sounds/E.wav';
        note6.src = './sounds/F.wav';
        note7.src = './sounds/G.wav';
        kbd1.innerHTML = "A";
        kbd2.innerHTML = "Bb";
        kbd3.innerHTML = "C#";
        kbd4.innerHTML = "D";
        kbd5.innerHTML = "E";
        kbd6.innerHTML = "F";
        kbd7.innerHTML = "G";
      } else if (c==2) {
        note1.src = './sounds/II/Db.mp3';
        note2.src = './sounds/II/D.mp3';
        note3.src = './sounds/II/E.mp3';
        note4.src = './sounds/II/F.mp3';
        note5.src = './sounds/II/G.mp3';
        note6.src = './sounds/II/A.mp3';
        note7.src = './sounds/II/Bb.mp3';
        kbd1.innerHTML = "C#";
        kbd2.innerHTML = "D";
        kbd3.innerHTML = "E";
        kbd4.innerHTML = "F";
        kbd5.innerHTML = "G";
        kbd6.innerHTML = "A";
        kbd7.innerHTML = "Bb";
      }
      
    }
    else if (a==3) {
      audio.src = './sounds/I.mp3'; // C 

      songTitle.innerHTML = "Dame un cachito pa'huele";
    songTitle.classList.add('show');

    a = 1;
      b = 1;
      if (c==1) {
        note1.src = './sounds/A.wav';
        note2.src = './sounds/B.wav';
        note3.src = './sounds/C.wav';
        note4.src = './sounds/D.wav';
        note5.src = './sounds/E.wav';
        note6.src = './sounds/F.wav';
        note7.src = './sounds/G.wav';
        kbd1.innerHTML = "A";
        kbd2.innerHTML = "B";
        kbd3.innerHTML = "C";
        kbd4.innerHTML = "D";
        kbd5.innerHTML = "E";
        kbd6.innerHTML = "F";
        kbd7.innerHTML = "G";
      } 
      else if (c==2) {
        note1.src = './sounds/II/C.mp3';
        note2.src = './sounds/II/D.mp3';
        note3.src = './sounds/II/E.mp3';
        note4.src = './sounds/II/F.mp3';
        note5.src = './sounds/II/G.mp3';
        note6.src = './sounds/II/A.mp3';
        note7.src = './sounds/II/B.mp3';
        kbd1.innerHTML = "C";
        kbd2.innerHTML = "D";
        kbd3.innerHTML = "E";
        kbd4.innerHTML = "F";
        kbd5.innerHTML = "G";
        kbd6.innerHTML = "A";
        kbd7.innerHTML = "B";
      }
      
    }
    audio.load();
    note1.load();
    note2.load();
    note3.load();
    note4.load();
    note5.load();
    note6.load();
    note7.load();
    audio.play();
    audio.muted = false;

  
}


prev.addEventListener("mousedown", previous);



function previous (){
  prev.classList.add('n');  

  if (b == 1) {
    
    audio.src = './sounds/III.mp3'; // D- harm

    songTitle.innerHTML = "Aurora en Pekin";
    songTitle.classList.add('show');
    
    b++;
    a = 3;

    if (c==1) {
      note1.src = './sounds/A.wav';
      note2.src = './sounds/Bb.wav';
      note3.src = './sounds/Db.wav';
      note4.src = './sounds/D.wav';
      note5.src = './sounds/E.wav';
      note6.src = './sounds/F.wav';
      note7.src = './sounds/G.wav';
      kbd1.innerHTML = "A";
      kbd2.innerHTML = "Bb";
      kbd3.innerHTML = "C#";
      kbd4.innerHTML = "D";
      kbd5.innerHTML = "E";
      kbd6.innerHTML = "F";
      kbd7.innerHTML = "G";
    } else if (c==2) {
      note1.src = './sounds/II/Db.mp3';
      note2.src = './sounds/II/D.mp3';
      note3.src = './sounds/II/E.mp3';
      note4.src = './sounds/II/F.mp3';
      note5.src = './sounds/II/G.mp3';
      note6.src = './sounds/II/A.mp3';
      note7.src = './sounds/II/Bb.mp3';
      kbd1.innerHTML = "C#";
      kbd2.innerHTML = "D";
      kbd3.innerHTML = "E";
      kbd4.innerHTML = "F";
      kbd5.innerHTML = "G";
      kbd6.innerHTML = "A";
      kbd7.innerHTML = "Bb";
    }


  }
  else if (b==2) {
    audio.src = './sounds/II.mp3'; // E

    songTitle.innerHTML = "Jaguey";
    songTitle.classList.add('show');

    b++;
    a = 2;
    if (c==1) {
      note1.src = './sounds/Ab.wav';
      note2.src = './sounds/A.wav';
      note3.src = './sounds/B.wav';
      note4.src = './sounds/Db.wav';
      note5.src = './sounds/Eb.wav';
      note6.src = './sounds/E.wav';
      note7.src = './sounds/Gb.wav';
      kbd1.innerHTML = "G#";
      kbd2.innerHTML = "A";
      kbd3.innerHTML = "B";
      kbd4.innerHTML = "C#";
      kbd5.innerHTML = "D#";
      kbd6.innerHTML = "E";
      kbd7.innerHTML = "F#";
    } 
    else if (c==2) {
      note1.src = './sounds/II/Db.mp3';
      note2.src = './sounds/II/Eb.mp3';
      note3.src = './sounds/II/E.mp3';
      note4.src = './sounds/II/Gb.mp3';
      note5.src = './sounds/II/Ab.mp3';
      note6.src = './sounds/II/A.mp3';
      note7.src = './sounds/II/B.mp3';
      kbd1.innerHTML = "C#";
      kbd2.innerHTML = "D#";
      kbd3.innerHTML = "E";
      kbd4.innerHTML = "F#";
      kbd5.innerHTML = "G#";
      kbd6.innerHTML = "A";
      kbd7.innerHTML = "B";

    }
  
  }
  else if (b==3) {
    audio.src = './sounds/I.mp3'; // C 

    songTitle.innerHTML = "Dame un cachito pa'huele";
    songTitle.classList.add('show');

    b=1;
    a = 1;
      if (c==1) {
        note1.src = './sounds/A.wav';
        note2.src = './sounds/B.wav';
        note3.src = './sounds/C.wav';
        note4.src = './sounds/D.wav';
        note5.src = './sounds/E.wav';
        note6.src = './sounds/F.wav';
        note7.src = './sounds/G.wav';
        kbd1.innerHTML = "A";
        kbd2.innerHTML = "B";
        kbd3.innerHTML = "C";
        kbd4.innerHTML = "D";
        kbd5.innerHTML = "E";
        kbd6.innerHTML = "F";
        kbd7.innerHTML = "G";
      }
      else if (c==2) {
        note1.src = './sounds/II/C.mp3';
        note2.src = './sounds/II/D.mp3';
        note3.src = './sounds/II/E.mp3';
        note4.src = './sounds/II/F.mp3';
        note5.src = './sounds/II/G.mp3';
        note6.src = './sounds/II/A.mp3';
        note7.src = './sounds/II/B.mp3';
        kbd1.innerHTML = "C";
        kbd2.innerHTML = "D";
        kbd3.innerHTML = "E";
        kbd4.innerHTML = "F";
        kbd5.innerHTML = "G";
        kbd6.innerHTML = "A";
        kbd7.innerHTML = "B";
      }
      
  }
  audio.load();
  note1.load();
  note2.load();
  note3.load();
  note4.load();
  note5.load();
  note6.load();
  note7.load();
  audio.play();
  audio.muted = false;


}

reload.addEventListener("mousedown", reloade)

function reloade () {
  audio.currentTime = 0;
  if(audio.paused) {
    return;
  }
  else {
    songTitle.classList.add('show');
    audio.play();
  }
}


document.getElementsByClassName("key")[0].addEventListener("mousedown", function(){
  
  if (c==1) {
    note1.volume = 0.5;
  }
  else if (c==2) {
    note1.volume = 0.8;
  }
  note1.currentTime=0;
  
  note1.play();
  key1.classList.add('playing');
});

document.getElementsByClassName("key")[1].addEventListener("mousedown", function(){
  
  if (c==1) {
    note3.volume = 0.5;
  }
  else if (c==2) {
    note2.volume = 0.8;
  }
  note2.currentTime=0;

  note2.play();
  key2.classList.add('playing');
});

document.getElementsByClassName("key")[2].addEventListener("mousedown", function(){
  if (c==1) {
    note3.volume = 0.5;
  }
  else if (c==2) {
    note3.volume = 0.8;
  }
note3.currentTime=0;

note3.play();
key3.classList.add('playing');
});

document.getElementsByClassName("key")[3].addEventListener("mousedown", function(){
  if (c==1) {
    note4.volume = 0.5;
  }
  else if (c==2) {
    note4.volume = 0.8;
  }
  note4.currentTime=0;
  
  note4.play();
  key4.classList.add('playing');
});

document.getElementsByClassName("key")[4].addEventListener("mousedown", function(){
  if (c==1) {
    note5.volume = 0.5;
  }
  else if (c==2) {
    note5.volume = 0.8;
  }
  note5.currentTime=0;
  
  note5.play();
  key5.classList.add('playing');
});

document.getElementsByClassName("key")[5].addEventListener("mousedown", function(){
  if (c==1) {
    note6.volume = 0.3;
  }
  else if (c==2) {
    note6.volume = 0.8;
  }
  
  note6.currentTime=0;
  note6.play();
  key6.classList.add('playing');
});

document.getElementsByClassName("key")[6].addEventListener("mousedown", function(){
  if (c==1) {
    note7.volume = 0.3;
  }
  else if (c==2) {
    note7.volume = 0.8;
  }
  
  note7.currentTime=0;
  note7.play();
  key7.classList.add('playing');
});



