// function to direct the user from the home screen section to the song playlist section
$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    var message = "Welcome, " + name;
    $('.main .user-name').text(message);
    $('.welcome-screen').addClass('hidden');
    $('.main').removeClass('hidden');
});



/*
// function to add song
$('#submit_song').click(function(){
    var song_name = $('#song_to_upload').val().replace(/C:\\fakepath\\/i, '');
    $("audio").attr("src","songs/" + song_name);
});
// work for paying the song on click of button
$('.play_btn').click(function(){
    arr = $('.song_play');
    if(arr[0].paused == true)
        {
            arr[0].play();
            $('#icon_toggle').removeClass('fa-play');
            $('#icon_toggle').addClass('fa-pause');
            $('body').addClass('add_gif');
            
        }
    else
        {
            arr[0].pause();
            $('#icon_toggle').removeClass('fa-pause');
            $('#icon_toggle').addClass('fa-play');
            $('body').removeClass('add_gif');
        }
});
$('body').on('keypress',function(event){
    if(event.keyCode == 32)
        {
            console.log("on key press");
            arr = $('.song_play');
            if(arr[0].paused == true)
                {
                    console.log(" paused");
                    arr[0].play();
                    $('#icon_toggle').removeClass('fa-play');
                    $('#icon_toggle').addClass('fa-pause');
                    $('body').addClass('add_gif');

                }
            else
                {
                    console.log("play");
                    arr[0].pause();
                    $('#icon_toggle').removeClass('fa-pause');
                    $('#icon_toggle').addClass('fa-play');
                    $('body').removeClass('add_gif');
                }
        }
});
*/