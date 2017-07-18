// for looping the songs
var loopFlag = 0;
// for shuffling the songs
var shuffelFlag = 0;
// for current playing song number
var currentSongNumber = 1;

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

// max key sound value
maxKeySoundValue = 4; 

// keyboard keys object array
keyboardKeys = [
    {
        'keyValue' : '2',
        'keySound' : 'C',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : '3',
        'keySound' : 'D',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : '5',
        'keySound' : 'F',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : '6',
        'keySound' : 'G',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : '7',
        'keySound' : 'A',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : '9',
        'keySound' : 'C',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : '0',
        'keySound' : 'D',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : 'Equal',
        'keySound' : 'F',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : 'Coma',
        'keySound' : 'A',
        'keySoundValue' : '4'
    },
    {
        'keyValue' : 'A',
        'keySound' : 'G',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : 'S',
        'keySound' : 'A',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : 'F',
        'keySound' : 'C',
        'keySoundValue' : '4'
    },
    {
        'keyValue' : 'G',
        'keySound' : 'D',
        'keySoundValue' : '4'
    },
    {
        'keyValue' : 'J',
        'keySound' : 'F',
        'keySoundValue' : '4'
    },
    {
        'keyValue' : 'K',
        'keySound' : 'G',
        'keySoundValue' : '4'
    },
    {
        'keyValue' : 'L',
        'keySound' : 'A',
        'keySoundValue' : '4'
    },
    {
        'keyValue' : 'LBracket',
        'keySound' : 'F',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : 'RBracket',
        'keySound' : 'G',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : 'Q',
        'keySound' : 'C',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : 'W',
        'keySound' : 'D',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : 'E',
        'keySound' : 'E',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : 'R',
        'keySound' : 'F',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : 'T',
        'keySound' : 'G',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : 'Y',
        'keySound' : 'A',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : 'U',
        'keySound' : 'B',
        'keySoundValue' : '2'
    },
    {
        'keyValue' : 'I',
        'keySound' : 'C',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : 'O',
        'keySound' : 'D',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : 'P',
        'keySound' : 'E',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : 'Z',
        'keySound' : 'A',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : 'X',
        'keySound' : 'B',
        'keySoundValue' : '3'
    },
    {
        'keyValue' : 'C',
        'keySound' : 'C',
        'keySoundValue' : '4'
    },
    {
        'keyValue' : 'V',
        'keySound' : 'D',
        'keySoundValue' : '4'
    },
    {
        'keyValue' : 'B',
        'keySound' : 'E',
        'keySoundValue' : '4'
    },
    {
        'keyValue' : 'N',
        'keySound' : 'F',
        'keySoundValue' : '4'
    },
    {
        'keyValue' : 'M',
        'keySound' : 'G',
        'keySoundValue' : '4'
    },
    {
        'keyValue' : 'Dot',
        'keySound' : 'B',
        'keySoundValue' : '4'
    }
]

// function to direct the user from the home screen section to the song playlist section
$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();             //take input value
    var nameReg = /^\w+\s*$/;                      // regexp for name
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
    arr = $('.song-play');    // get array of audio tags with class .song-play
    if(arr[0].paused)         // if song paused
        {
            arr[0].play();
            $('#play-icon').removeClass('fa-play').addClass('fa-pause');
            $('.content').addClass('add-gif');
            
        }
    else                      // if song is playing
        {
            arr[0].pause();
            $('#play-icon').removeClass('fa-pause').addClass('fa-play');
            $('.content').removeClass('add-gif');
        }
}

// play and pause song on click of the button
$('#play-icon').click(function(){
    toggleSong()
});

// work for paying the song on click of spacebar
$('body').on('keypress',function(event){
    var target = event.target;
    if(event.keyCode == 32  && target.tagName != 'INPUT' )
        {
            toggleSong()
        }
    //on every key press call this function
    pianoPlay(event);
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
    $('.time-elapsed').text(time2);
    $('.song-duration').text(time1);
}

// call the updateCurrentTime function continuously to update time on click of play btn
$('#play-icon').on('click',function(){
    setInterval(function(){
        updateCurrentTime(); 
    }, 1000);
});

// call the updateCurrentTime function continuously to update time on click of song name
$('.song').on('click',function(){
    setInterval(function(){
        updateCurrentTime(); 
    }, 1000);
});

// function which creates the function that handles changing songs on click of song name 
function addSongSrcEventListener(currentSongObj,position)
{
    var songID = '#song' + position;                     // song id in html
    $(songID).on('click',function(){                
        var currentSong = $('.song-play');                
        var currentSongSrc = currentSong[0].src;         //current song source
        if(currentSongSrc.search(currentSongObj.songSrc) != -1)         // check with the provided source
            {
                toggleSong();
            }
        else
        {
            currentSong[0].src = "songs/" + currentSongObj.songSrc;
            changeCurrentSongDetails(currentSongObj)
            $(".song").removeClass("active");           
            $(this).addClass("active");
            toggleSong();
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
    
    // for the first song details
    changeCurrentSongDetails(songObjectArray[0]);
    
    // set progress bar time fir first load to 0:0
    updateCurrentTime();
    
    // initialize the keyboard values with the keys
    for(var i=0;i<keyboardKeys.length;i++)
        {
            var keySectionObj = $('.keyboard-keys');
            keySectionObj.find('#' + keyboardKeys[i].keyValue).html(keyboardKeys[i].keyValue + "<br>" + keyboardKeys[i].keySound + keyboardKeys[i].keySoundValue);
        }
}

//for the progress bar of the song
$('#player').on('timeupdate', function() {
    $('#song-progress-bar').attr("value", this.currentTime / this.duration);
});

// to change the location on clicking button of virtual keyboard
$('#virtual-keyboard-btn').on('click',function(){
   $('.piano-panel .user-name').text($('.main .user-name').text());   //display user name 
   $('.main').addClass('hidden');
   $('.piano-panel').removeClass('hidden');
});

function pianoPlay(event){
    if($('.piano-panel').hasClass('hidden')){
        
    }
    else{
        var piano = Synth.createInstrument('piano');
        console.log(event.keyCode);
       if(event.keyCode == 65)
           {
               piano.play('G', 4, 2);
           }
    }
}

///////////////////////////////////////////////////////////////////// Additional ////////////////////

// function for repeat song playlist
$('#repeat-play').on('click',function(){
    if(loopFlag == 0 && shuffelFlag !=1 ){
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

// function to play random song from the playlist
$('#random-play').on('click',function(){
    if(shuffelFlag == 0 && loopFlag!=1 ){
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
    if (n >= excluded) n++;
    return n;
}

// perform changes when the song ends
$('.song-play')[0].onended = function(){
    var currentAudioState = $('.song-play')[0];
    if(shuffelFlag == 1){
        var nextSongNumber = randomExcluded(1,5,currentSongNumber);
        var nextSongObj = songObjectArray[nextSongNumber-1];
        currentAudioState.src =  "songs/" + nextSongObj.songSrc;
        $(".song").removeClass("active");
        $("#song" + nextSongNumber).addClass("active");
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < songObjectArray.length){
            nextSongObj = songObjectArray[currentSongNumber];
            currentAudioState.src =  "songs/" + nextSongObj.songSrc;
            $(".song").removeClass("active");
            var position = currentSongNumber +1;
            $("#song" + position).addClass("active");
            toggleSong();
            changeCurrentSongDetails(nextSongObj);
            currentSongNumber += 1;
        }
    else{
            if(loopFlag == 1){
                    currentSongNumber = 1;
                    var nextSongObj = songObjectArray[0];
                    currentAudioState.src =  "songs/" + nextSongObj.songSrc;
                    $(".song").removeClass("active");
                    $("#song1").addClass("active");
                    toggleSong();
                    changeCurrentSongDetails(nextSongObj);
               }
            else{
                    $('#play-icon').removeClass('fa-pause').addClass('fa-play');
                    $('.content').removeClass('add-gif');
               }   
    }
};

/*
// function to add song
$('#submit_song').click(function(){
    var song_name = $('#song_to_upload').val().replace(/C:\\fakepath\\/i, '');
    $("audio").attr("src","songs/" + song_name);
});
*/
