// function to direct the user from the home screen section to the song playlist section
$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if(name.length > 0)
        {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        }
    else{
        $('#name-input').addClass('error');
    }
});

// perform changes when the song ends
$('.song-play')[0].onended = function(){
    $('#play-icon').removeClass('fa-pause');
    $('#play-icon').addClass('fa-play');
    $('.content').removeClass('add-gif');
};

// function to perform operation when play btn or space bar is pressed
function operationoOnPlayBtn()
{
    arr = $('.song-play');
    if(arr[0].paused)
        {
            arr[0].play();
            $('#play-icon').removeClass('fa-play');
            $('#play-icon').addClass('fa-pause');
            $('.content').addClass('add-gif');
            
        }
    else
        {
            arr[0].pause();
            $('#play-icon').removeClass('fa-pause');
            $('#play-icon').addClass('fa-play');
            $('.content').removeClass('add-gif');
        }
}

// play and pause song on click of the button
$('#play-icon').click(function(){
    operationoOnPlayBtn()
});

// work for paying the song on click of spacebar
$('body').on('keypress',function(event){
    if(event.keyCode == 32)
        {
            operationoOnPlayBtn()
        }
});


/*
// function to add song
$('#submit_song').click(function(){
    var song_name = $('#song_to_upload').val().replace(/C:\\fakepath\\/i, '');
    $("audio").attr("src","songs/" + song_name);
});
*/
