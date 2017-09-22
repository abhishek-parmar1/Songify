// for looping the songs
var loopFlag = 0;
// for shuffling the songs
var shuffelFlag = 0;
// for current playing song number
var currentSongNumber = 1;
//min key sound value for keyboard
var minKeySoundValue = 2;
//max key sound value for keyboard
var maxKeySoundValue = 4;
// voice controll tag
var voiceEnabled = 0;

// details of songs in array
/*
songName = ["Shape Of You","Despacito","Something Just Like This","That's What I Like","Wigle Wigle"];
songArtist = ["Ed Sheeran","Luis Fonsi, Daddy Yankee","The Chainsmokers","Bruno Mars","Jason Derulo"];
songAlbum = ["Album#1","Album#2","Album#3","Album#4","Album#5"]
songDuration = ["4:23","4:41","4:07","3:30","3:43"]
songSrc = ["songs/song1.mp3","songs/song2.mp3","songs/song3.mp3","songs/song4.mp3","songs/song5.mp3"];
*/

// details of songs in array of objects
songObjectArray = [
    {
        'songName' : 'Shape Of You',
        'songArtist' : 'Ed Sheeran',
        'songAlbum' : 'Album#1',
        'songDuration' : '4:23',
        'songSrc' : 'song1.mp3',
        'imagePath' : 'song1.jpg'
    },
    {
        'songName' : 'Despacito',
        'songArtist' : 'Luis Fonsi, Daddy Yankee',
        'songAlbum' : 'Album#2',
        'songDuration' : '4:41',
        'songSrc' : 'song2.mp3',
        'imagePath' : 'song2.jpg'
    },
    {
        'songName' : 'Something Just Like This',
        'songArtist' : 'The Chainsmokers',
        'songAlbum' : 'Album#3',
        'songDuration' : '4:23',
        'songSrc' : 'song3.mp3',
        'imagePath' : 'song3.jpg'
    },
    {
        'songName' : "That's What I Like",
        'songArtist' : 'Bruno Mars',
        'songAlbum' : 'Album#4',
        'songDuration' : '3:30',
        'songSrc' : 'song4.mp3',
        'imagePath' : 'song4.jpg'
    },
    {
        'songName' : 'Wigle Wigle',
        'songArtist' : 'Jason Derulo',
        'songAlbum' : 'Album#5',
        'songDuration' : '3:43',
        'songSrc' : 'song5.mp3',
        'imagePath' : 'song5.jpg'
    }
];

//  for ascii of keys pressed by user in order according to the  keyboard keys object array
asciiArray = [50,51,53,54,55,57,48,61,44,
              65,83,70,71,74,75,76,91,93,
              81,87,69,82,84,89,85,73,79,
              80,90,88,67,86,66,78,77,46]

// keyboard keys object array
keyboardKeys = [
    {
        'keyValue' : '2',
        'keySound' : 'C',
        'keySoundValue' : 2
    },
    {
        'keyValue' : '3',
        'keySound' : 'D',
        'keySoundValue' : 2
    },
    {
        'keyValue' : '5',
        'keySound' : 'F',
        'keySoundValue' : 2
    },
    {
        'keyValue' : '6',
        'keySound' : 'G',
        'keySoundValue' : 2
    },
    {
        'keyValue' : '7',
        'keySound' : 'A',
        'keySoundValue' : 2
    },
    {
        'keyValue' : '9',
        'keySound' : 'C',
        'keySoundValue' : 3
    },
    {
        'keyValue' : '0',
        'keySound' : 'D',
        'keySoundValue' : 3
    },
    {
        'keyValue' : 'Equal',
        'keySound' : 'F',
        'keySoundValue' : 3
    },
    {
        'keyValue' : 'Coma',
        'keySound' : 'A',
        'keySoundValue' : 4
    },
    {
        'keyValue' : 'A',
        'keySound' : 'G',
        'keySoundValue' : 3
    },
    {
        'keyValue' : 'S',
        'keySound' : 'A',
        'keySoundValue' : 3
    },
    {
        'keyValue' : 'F',
        'keySound' : 'C',
        'keySoundValue' : 4
    },
    {
        'keyValue' : 'G',
        'keySound' : 'D',
        'keySoundValue' : 4
    },
    {
        'keyValue' : 'J',
        'keySound' : 'F',
        'keySoundValue' : 4
    },
    {
        'keyValue' : 'K',
        'keySound' : 'G',
        'keySoundValue' : 4
    },
    {
        'keyValue' : 'L',
        'keySound' : 'A',
        'keySoundValue' : 4
    },
    {
        'keyValue' : 'LBracket',
        'keySound' : 'F',
        'keySoundValue' : 3
    },
    {
        'keyValue' : 'RBracket',
        'keySound' : 'G',
        'keySoundValue' : 3
    },
    {
        'keyValue' : 'Q',
        'keySound' : 'C',
        'keySoundValue' : 2
    },
    {
        'keyValue' : 'W',
        'keySound' : 'D',
        'keySoundValue' : 2
    },
    {
        'keyValue' : 'E',
        'keySound' : 'E',
        'keySoundValue' : 2
    },
    {
        'keyValue' : 'R',
        'keySound' : 'F',
        'keySoundValue' : 2
    },
    {
        'keyValue' : 'T',
        'keySound' : 'G',
        'keySoundValue' : 2
    },
    {
        'keyValue' : 'Y',
        'keySound' : 'A',
        'keySoundValue' : 2
    },
    {
        'keyValue' : 'U',
        'keySound' : 'B',
        'keySoundValue' : 2
    },
    {
        'keyValue' : 'I',
        'keySound' : 'C',
        'keySoundValue' : 3
    },
    {
        'keyValue' : 'O',
        'keySound' : 'D',
        'keySoundValue' : 3
    },
    {
        'keyValue' : 'P',
        'keySound' : 'E',
        'keySoundValue' : 3
    },
    {
        'keyValue' : 'Z',
        'keySound' : 'A',
        'keySoundValue' : 3
    },
    {
        'keyValue' : 'X',
        'keySound' : 'B',
        'keySoundValue' : 3
    },
    {
        'keyValue' : 'C',
        'keySound' : 'C',
        'keySoundValue' : 4
    },
    {
        'keyValue' : 'V',
        'keySound' : 'D',
        'keySoundValue' : 4
    },
    {
        'keyValue' : 'B',
        'keySound' : 'E',
        'keySoundValue' : 4
    },
    {
        'keyValue' : 'N',
        'keySound' : 'F',
        'keySoundValue' : 4
    },
    {
        'keyValue' : 'M',
        'keySound' : 'G',
        'keySoundValue' : 4
    },
    {
        'keyValue' : 'Dot',
        'keySound' : 'B',
        'keySoundValue' : 4
    }
]

// function to direct the user from the home screen section to the song playlist section
$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();             //take input value
    var nameReg = /^\w+\s*$/;                      // regexp for name to check continuous spaces
    if(name.length > 3 && nameReg.test(name))      // check name
        {
            var message = "Welcome, " + name;   
            $('.main .user-name').text(message);   //display user name 
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        }
    else{
        $('#name-input').addClass('error').val("").attr('placeholder','Required 3+ letters'); //error
    }
});

// function to perform operation when song is playing or paused
function toggleSong()
{
    arr = $('.song-play');    // get array of audio tags with class song-play
    if(arr[0].paused)         // if song paused
        {
            arr[0].play();    //play the song
            $('#play-icon').removeClass('fa-play').addClass('fa-pause'); // change icon
            $('.content').addClass('add-gif');  // add gif effect
            changeGif();                        //changes the gifs in background
        }
    else                      // if song is playing
        {
            arr[0].pause();  // pause song
            $('#play-icon').removeClass('fa-pause').addClass('fa-play'); //change icon
            $('.content').removeClass('add-gif');  // remove gif effect
            $('.content').removeAttr('style');
        }
}

// play and pause song on click of the button
$('#play-icon').click(function(){
    toggleSong();
});

// work for paying the song on click of spacebar
$('body').on('keypress',function(event){
    var target = event.target;
    if(event.keyCode == 32  && target.tagName != 'INPUT' )
        {
            setInterval(function(){
                updateCurrentTime(); 
            },1000);
            toggleSong();
        }
    
    //on every key press call this function for piano noted effect
    keyboardPlay(event);
});

// to convert time to proper format
function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

// function to update the song duration and current time
function updateCurrentTime(){
    arr = $('.song-play');            // get array of audio tags with class .song-play
    // ~~ for math.floor
    time1 = ~~(arr[0].duration);      // get song duration
    time1 = fancyTimeFormat(time1);
    time2 = ~~(arr[0].currentTime);   // get song current time 
    time2 = fancyTimeFormat(time2);
    $('.time-elapsed').text(time2);   // set current time 
    $('.song-duration').text(time1);  // set song duration
}

// call the updateCurrentTime function continuously to update time on click of play btn
$('#play-icon').on('click',function(){
    setInterval(function(){
        updateCurrentTime(); 
    },1000);
});

// call the updateCurrentTime function continuously to update time on click of song name
$('.song').on('click',function(){
    setInterval(function(){
        updateCurrentTime(); 
    },1000);
});

// function which creates the function that handles changing songs on click of song name 
function addSongSrcEventListener(currentSongObj,position)
{
    var songID = '#song' + position;                     // song id in html
    $(songID).on('click',function(){                
        var currentSong = $('.song-play');                
        var currentSongSrc = currentSong[0].src;         //current song source
        if(currentSongSrc.search(currentSongObj.songSrc) != -1) // check with the provided source
            {
                toggleSong();                         // pause or play the song
            }
        else
        {
            currentSong[0].src = "songs/" + currentSongObj.songSrc;  // add source to audio tag
            changeCurrentSongDetails(currentSongObj)  // change current song details
            $(".song").removeClass("active");         // remove active class from all songs  
            $(this).addClass("active");               // add active class to current song
            toggleSong();                             // play or pause the song
            currentSongNumber=position;
        }
    });
}

// function display current song details 
function changeCurrentSongDetails(currentSongObj){
    var detailsSectionRef=  $(".song-details-section");
    detailsSectionRef.find("#current-song-image").attr('src',"songs/song_images/" + currentSongObj.imagePath);
    detailsSectionRef.find(".current-song-name").text(currentSongObj.songName);
    detailsSectionRef.find(".current-song-artist").text(currentSongObj.songArtist);
}

//load all the songs details in the html
window.onload = function(){
    
    // create the playlist section of songs
    for(var i=1;i<=songObjectArray.length;i++)
        {
            var songSectionId = "#song" + i;              //get song id in html
            var songSectionRef = $(songSectionId);        // ref to that id
            var songObj = songObjectArray[i-1];           //get song position in array of objects   
            songSectionRef.find('.name').text(songObj.songName);
            songSectionRef.find('.artist').text(songObj.songArtist);
            songSectionRef.find('.album').text(songObj.songAlbum);
            songSectionRef.find('.duration').text(songObj.songDuration);
            addSongSrcEventListener(songObj,i);          
        }
    
    // for searching and sorting in the songs and creating its table
    $('#song-playlist').DataTable({
         paging:false
     });
    
    // for the first song details on load of the html
    changeCurrentSongDetails(songObjectArray[0]);
    
    // set progress bar time fir first load to 0:0
    updateCurrentTime();
    
    // display key board button values
    displayKeyBoardButtonsValues();
}

// function to display key board button values
function displayKeyBoardButtonsValues(){
    // initialize the keyboard values with the keys
    for(var i=0;i<keyboardKeys.length;i++)
        {
            var keySectionObj = $('.keyboard-keys');
            keySectionObj.find('#' + keyboardKeys[i].keyValue).html(keyboardKeys[i].keyValue + "<br>" + keyboardKeys[i].keySound + keyboardKeys[i].keySoundValue);
            eventListenerForKeyboardKeys(keyboardKeys[i]);  // create event listener for all key object 
        }
}


//for the progress bar of the song
$('#player').on('timeupdate', function() {
    $('#song-progress-bar').attr("value", this.currentTime / this.duration);
});

// to change the location on clicking button of virtual keyboard
$('#virtual-keyboard-btn').on('click',function(){
   $('.keyboard-panel .user-name').text($('.main .user-name').text());   //display user name 
   $('.main').addClass('hidden');
   $('.keyboard-panel').removeClass('hidden');
});

// to change the location on clicking button of playlist mode
$('#return-playlist-btn').on('click',function(){ 
   $('.main').removeClass('hidden');
   $('.keyboard-panel').addClass('hidden');
});

// function to play the sound of the assined note to the key on a key press from keyboard
function keyboardPlay(event){
    if($('.keyboard-panel').hasClass('hidden')){    // search for class to play the sound or not
        //do nothingin here
    }
    else{
        var keyboard = Synth.createInstrument('piano');
        var keyObj = getKeyObject(event.keyCode);  // pass the event to get the object of the key pressed
        $('.keyboard-keys button').removeClass('pressed-key'); // remove class from all keys
        $('#' + keyObj.keyValue).addClass('pressed-key');
        keyboard.play(keyObj.keySound,keyObj.keySoundValue, 2); //play the sound according to the object for 2 seconds
    }
}

// function to return the object of the pressed key
function getKeyObject(asciiCode){
    var positionInAsciiArray = asciiArray.indexOf(asciiCode);//check the keycode of pressed key in the ascii array 
    return keyboardKeys[positionInAsciiArray]; // take the position and return the object of the pressed key
}

// function to play the sound of the assined note to the key on the button pressed of any key
function eventListenerForKeyboardKeys(keyObj){
    $('#' + keyObj.keyValue).on('click',function(){
        $('.keyboard-keys button').removeClass('pressed-key');
        $(this).addClass('pressed-key');
        var keyboard = Synth.createInstrument('piano');
        keyboard.play(keyObj.keySound,keyObj.keySoundValue, 2);
    });
}

// function for repeat song playlist first check that loop flag is on or not and shuffle flag is on or not
$('#repeat-play').on('click',function(){
    if(loopFlag == 0 && shuffelFlag == 0 ){
        loopFlag = 1;
        $(this).removeClass("disabled");
    }
    else if(loopFlag == 0 && shuffelFlag == 1){
        loopFlag = 1;
        shuffelFlag = 0;
        $(this).removeClass("disabled");
        $('#random-play').addClass("disabled");
    }
    else{
        loopFlag = 0;
        $(this).addClass("disabled");
    }
});

// function to play random song from the playlist first check that loop flag is on or not and shuffle flag is on or not
$('#random-play').on('click',function(){
    if(shuffelFlag == 0 && loopFlag == 0 ){
        shuffelFlag = 1;
        $(this).removeClass("disabled");
    }
    else if(shuffelFlag == 0 && loopFlag==1){
        shuffelFlag = 1;
        loopFlag = 0;
        $(this).removeClass("disabled");
        $('#repeat-play').addClass("disabled");
    }
    else{
        shuffelFlag = 0;
        $(this).addClass("disabled");
    }
});

// function for a random number for song selection
function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) 
        n++;
    return n;
}

// perform changes when the song ends for loop all songs or play the random song or repeat songs
$('.song-play')[0].onended = function(){
    var currentAudioState = $('.song-play')[0];
    if(shuffelFlag == 1){
        var nextSongNumber = randomExcluded(1,songObjectArray.length,currentSongNumber);// generate random number
        var nextSongObj = songObjectArray[nextSongNumber-1];  // select song object
        currentAudioState.src =  "songs/" + nextSongObj.songSrc; // change source of audio
        $(".song").removeClass("active");   // remove active class from songs 
        $("#song" + nextSongNumber).addClass("active"); // add active class to next song
        toggleSong();   //play song
        changeCurrentSongDetails(nextSongObj);  //change details
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < songObjectArray.length){
            nextSongObj = songObjectArray[currentSongNumber];  // select song object
            currentAudioState.src =  "songs/" + nextSongObj.songSrc; // change source
            $(".song").removeClass("active"); // remove class active
            var position = currentSongNumber +1; // find position
            $("#song" + position).addClass("active"); // add class active
            toggleSong();  //play song
            changeCurrentSongDetails(nextSongObj); // change details
            currentSongNumber += 1; // increment number by 1
        }
    else{
            if(loopFlag == 1){
                    currentSongNumber = 1; // change song number to 1st song
                    var nextSongObj = songObjectArray[0];
                    currentAudioState.src =  "songs/" + nextSongObj.songSrc; // set source
                    $(".song").removeClass("active"); //remove class
                    $("#song1").addClass("active");// add class
                    toggleSong(); //play song
                    changeCurrentSongDetails(nextSongObj);// change details
               }
            else{
                    $('#play-icon').removeClass('fa-pause').addClass('fa-play');//change icon
                    $('.content').removeClass('add-gif'); // remove gif effect
                    $('.content').removeAttr('style');
               }   
    }
};

// forward the song
$('#forward-play').on('click',function(){
   var currentAudioState = $('.song-play')[0];
   currentAudioState.currentTime = currentAudioState.duration;
});

// backward the song
$('#backward-play').on('click',function(){
    var currentAudioState = $('.song-play')[0];
   if(currentSongNumber == 1)
       {
           var nextSongObj = songObjectArray[songObjectArray.length-1];
           currentAudioState.src =  "songs/" + nextSongObj.songSrc;
           $(".song").removeClass("active");   // remove active class from songs
           nextSongNumber = songObjectArray.length;
           $("#song" + nextSongNumber).addClass("active"); // add active class to next song
           toggleSong();   //play song
           changeCurrentSongDetails(nextSongObj);  //change details
           currentSongNumber = nextSongNumber;
       }
    else
        {
            var nextSongObj = songObjectArray[currentSongNumber-2];
           currentAudioState.src =  "songs/" + nextSongObj.songSrc;
           $(".song").removeClass("active");   // remove active class from songs
           nextSongNumber = currentSongNumber-1;
           $("#song" + nextSongNumber).addClass("active"); // add active class to next song
           toggleSong();   //play song
           changeCurrentSongDetails(nextSongObj);  //change details
           currentSongNumber = nextSongNumber;
        }
});

//array for selection of random gif in the background
var gifArr = ['source.gif',
              'source1.gif',
              'source2.gif',
              'source3.gif',
              'source4.gif',
              'source5.gif',
              'source6.gif',
              'source7.gif',
              'source9.gif',
              'source10.gif',
              'source11.gif',
              'source12.gif',
              'source13.gif'
             ];

// function to select the random gif and change the gif after 5 seconds
function changeGif(){
    setInterval(function(){
        $('.add-gif').css({'background-image': 'url(assets/images/' + gifArr[Math.floor(Math.random() * gifArr.length)] + ')'}); 
    },
    7000);
}

//perform volume slider task 
$('.volume-slider').on('change',function(){
    $("#play-volume").removeClass("fa-volume-off");
    var currentSongObj = $('.song-play')[0]; // select audio tag 
    var currentVolume = currentSongObj.volume; // get audio tag volume
    var newVolume = $(this).val(); // get new volume to set on audio tag
    if(currentVolume <= newVolume){  //change icon to up of volume increase 
        changeVolumeClass("up");
        currentSongObj.volume = $(this).val();
        $("#play-volume").addClass("fa-volume-off");
        }
    else{                            //change icon to down on volume decrease
        changeVolumeClass("down");
        currentSongObj.volume = $(this).val();
        $("#play-volume").addClass("fa-volume-off");
    }
});

//function to change icon of volume
function changeVolumeClass(classType){
    $("#play-volume").addClass("fa-volume-" + classType);
    setTimeout(function(){
            $("#play-volume").removeClass("fa-volume-" + classType);
        }, 500);
}

//function to mute or unmute the song on click of volume icon
$('#play-volume').on('click',function(){
    var currentSongObj = $('.song-play')[0];
    if(currentSongObj.volume != 0){
           currentSongObj.volume = 0;
           $('#volume-slider').val(0);
           $(this).removeClass('disabled');
       }
    else{
        currentSongObj.volume = 1;
        $('#volume-slider').val(1);
        $(this).addClass('disabled');
    }
});

// function to add 1 to key sound value of all objects
function changeKeyBoardNoteValuePlus(){
    if(keyboardKeys[0].keySoundValue < maxKeySoundValue)
        {
            for(var i=0; i<keyboardKeys.length; i++)
                {
                    keyboardKeys[i].keySoundValue += 1;
                }
        }
}

// function to minus 1 to key sound value of all objects
function changeKeyBoardNoteValueMinus(){
    if(keyboardKeys[0].keySoundValue > minKeySoundValue)
        {
            for(var i=0; i<keyboardKeys.length; i++)
                {
                    keyboardKeys[i].keySoundValue -= 1;
                }
        }
}

// function to change the key sound value of all objects by +1 and display them
$('.plus-key-notes').on('click',function(){
    changeKeyBoardNoteValuePlus();
    displayKeyBoardButtonsValues();
});

// function to change the key sound value of all objects by -1 and display them
$('.minus-key-notes').on('click',function(){
    changeKeyBoardNoteValueMinus();
    displayKeyBoardButtonsValues();
});

// eventlistener for on click microphhone
$('#play-microphone').on('click',function(){
    if(voiceEnabled == 0)
    {
        voiceEnabled=1;
        $(this).removeClass('disabled');
        $(this).removeClass('fa-microphone-slash');
        $(this).addClass('fa-microphone');
        $('#voice-commands').removeClass('hidden');
        $('.current-song-image').removeClass('col-md-offset-3');
        enableVoice();
    }
    else
    {
        voiceEnabled=0;
        $(this).addClass('disabled');
        $(this).removeClass('fa-microphone');
        $(this).addClass('fa-microphone-slash');
        $('#voice-commands').addClass('hidden');
        $('.current-song-image').addClass('col-md-offset-3');
    }
});

// function to speak to the user 
function speak( text) 
{
    var message = new SpeechSynthesisUtterance(text.replace("-", " "));
    message.rate = 1;
    window.speechSynthesis.speak(message);
}

// function to proccess the user commands
function processCommands(cmd) {
    
    switch (cmd) {
      case "play":
        speak("Playing song");    
        setTimeout(toggleSong, 1000);   
        break;
      case 'pause':
        toggleSong();
        break;
      case "stop":
        toggleSong();
        break;
      case "next":
        speak("Playing next song");
        $('#forward-play').click();   
        break;
      case "previous":
        speak("Playing previous song");
        $('#backward-play').click();    
        break;
      default:
        speak("Your command was invalid!");
    }
  }

// function to take input from user as voice
function enableVoice()
{   
        
    // to check browser supports webspeech or not
      if (window['webkitSpeechRecognition'] ) 
      {
          // create a reference 
          var speechRecognizer = new webkitSpeechRecognition();

          // Recognition will not end when user stops speaking
          speechRecognizer.continuous = false;

          // Process the request while the user is speaking
          speechRecognizer.interimResults = true;

          // Account for accent
          speechRecognizer.lang = "en-US";
          
          // avaliable commands array
          var currentCommands = ['play', 'stop', 'pause', 'next', 'previous'];
          results = [];
          timeoutSet = false;
          
          //starts the speech recognition service listening to incoming audio
          speechRecognizer.start();
          
          // call the event listener on result of webspeech
           speechRecognizer.onresult = function (evt) 
           {
                  // push the result to the array
                  results.push(evt.results);
                  
                  // set a time out for 3 seconds to retrive the user input for 3 seconds 
                  if (!timeoutSet) {
                    
                      setTimeout(function() {
                      timeoutSet = false;
                      
                      // reverse the array            
                      results.reverse();
                          
                      try {
                        // iterate over the array  
                        results.forEach(function (val, i) {
                          // get the value from the transcript key        
                          var el = val[0][0].transcript.toLowerCase();
                          // split the message and search in current commands array
                          if (currentCommands.indexOf(el.split(" ")[0]) !== -1) {
                            
                            // stop the web speech listener  
                            speechRecognizer.abort();
                            processCommands(el);
                            results = [];
                            throw new BreakLoopException;
                          }
                          if (i === 0) {
                            processCommands(el);
                            // stop the web speech listener  
                            speechRecognizer.abort();
                            results = [];
                          }
                        });
                      }
                      catch(e) {return e;}
                    }, 3000)
                  }
                  timeoutSet = true;
           }
          //starts the speech recognition service listening to incoming audio on end   
          speechRecognizer.onend = function () 
          {
            speechRecognizer.abort();
            $('#play-microphone').click();  
          }
      } 
     else 
     {
         alert("Your browser does not support the Web Speech API");
     }
}

// function to add song
$('#add-song').on('click',function(){
    var add_song_src = $('#add-song-file').val().replace(/C:\\fakepath\\/i, '');
    console.log(add_song_src);
    var add_song_artist = $('#add-song-artist').val();
    if(add_song_artist == "")
        add_song_artist = "Default Name";
    console.log(add_song_artist);
    var add_song_duration = $('#add-song-duration').val();
    console.log(add_song_duration);
});

    