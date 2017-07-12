// function to direct the user from the home screen section to the song playlist section
$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    var nameReg = /^\w+\s*$/;
    if(name.length > 3 && nameReg.test(name))
        {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        }
    else{
        $('#name-input').addClass('error').val('Required 3+ letters');
    }
});

// perform changes when the song ends
$('.song-play')[0].onended = function(){
    $('#play-icon').removeClass('fa-pause').addClass('fa-play');
    $('.content').removeClass('add-gif');
};

// function to perform operation when play btn or space bar is pressed
function toggleSong()
{
    arr = $('.song-play');
    if(arr[0].paused)
        {
            arr[0].play();
            $('#play-icon').removeClass('fa-play').addClass('fa-pause');
            $('.content').addClass('add-gif');
            
        }
    else
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
    if(event.keyCode == 32)
        {
            toggleSong()
        }
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
    arr = $('.song-play');
    // ~~ for math.floor
    time1 = ~~(arr[0].duration);
    time1 = fancyTimeFormat(time1);
    time2 = ~~(arr[0].currentTime);
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
// call the updateCurrentTime function continuously to update time on click of song
$('.song').on('click',function(){
    setInterval(function(){
        updateCurrentTime(); 
    }, 1000);
});

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
        'songSrc' : 'songs/song1.mp3'
    },
    {
        'songName' : 'Despacito',
        'songArtist' : 'Luis Fonsi, Daddy Yankee',
        'songAlbum' : 'Album#2',
        'songDuration' : '4:41',
        'songSrc' : 'songs/song2.mp3'
    },
    {
        'songName' : 'Something Just Like This',
        'songArtist' : 'The Chainsmokers',
        'songAlbum' : 'Album#3',
        'songDuration' : '4:23',
        'songSrc' : 'songs/song3.mp3'
    },
    {
        'songName' : "That's What I Like",
        'songArtist' : 'Bruno Mars',
        'songAlbum' : 'Album#4',
        'songDuration' : '3:30',
        'songSrc' : 'songs/song4.mp3'
    },
    {
        'songName' : 'Wigle Wigle',
        'songArtist' : 'Jason Derulo',
        'songAlbum' : 'Album#5',
        'songDuration' : '3:43',
        'songSrc' : 'songs/song5.mp3'
    }
];

//load all the songs details in the html
window.onload = function(){
    for(var i=1;i<=songObjectArray.length;i++)
        {
            $('#song' + i + " .name").text(songObjectArray[i-1].songName);
            $('#song' + i + " .artist").text(songObjectArray[i-1].songArtist);
            $('#song' + i + " .album").text(songObjectArray[i-1].songAlbum);
            $('#song' + i + " .duration").text(songObjectArray[i-1].songDuration);
        }    
    updateCurrentTime();
}

// function which creates the function that handles adding songs option 
function addSongSrcEventListener(songSrc,position)
{
    var songID = '#song' + position;
    $(songID).on('click',function(){
        var currentSong = $('audio');
        var currentSongSrc = currentSong[0].src;
        if(currentSongSrc.search(songSrc) != -1)
            {
                toggleSong();
            }
        else
        {
            currentSong[0].src = songSrc;
            $(".song").removeClass("active");
            $(this).addClass("active");
            toggleSong();
        }
    });
}

// call to create all the functions for adding songs
for(var i = 0;i < songObjectArray.length;i++)
{
    addSongSrcEventListener(songObjectArray[i].songSrc,i+1);
}

//for the progress bar of the song
$('#player').on('timeupdate', function() {
    $('#song-progress-bar').attr("value", this.currentTime / this.duration);
});

/*
// function to add song
$('#submit_song').click(function(){
    var song_name = $('#song_to_upload').val().replace(/C:\\fakepath\\/i, '');
    $("audio").attr("src","songs/" + song_name);
});
*/
