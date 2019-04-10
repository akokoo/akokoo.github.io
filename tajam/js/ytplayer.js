// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: '3VMIvaF4nd8',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {
        'fs': '0',
        'rel': '0',
        'showinfo': '0',
        'autoplay': '0',
        'controls': '0',
      },
    });
  }

// 4. The API will call this function when the video player is ready.
  function resizePlayer() {      
    player.a.height = $(window).width() / player.ratio;
    $('.player').css({
      'height': '' + player.a.height + 'px',
    });  
  }

  function openPlayer() {
    player.mute();
    let offsetTop = $('.player').offset().top;
      $('html, body').animate({
        'scrollTop': '' + offsetTop,
      }, 1000);
      $('#player').fadeIn(2000, function() {
          $('.icon-close').fadeIn(1500);
        });
      $('.text').fadeOut(1500);
  }

  function closePlayer() {
    player.pauseVideo();
     $('#player').fadeOut(1000, function() {
        $('.icon-close').hide();
        $('.text').fadeIn(1000);
        $('.icon-play2').animate({
          'opacity': '1',
        },1000);
        player.stopVideo();
    });
  }

  function onPlayerReady(e) {
    e.target.ratio = e.target.a.width / e.target.a.height;
    resizePlayer();
    player.mute();
    $('.text').fadeIn(1000);
  }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
      
  function onPlayerStateChange(e) {
    if (e.data === 1) {
      openPlayer();
    }
    if (e.data === 0) {
      $('#player').hide();
      closePlayer();
    }
  }

  // events
  $(window).resize(resizePlayer);
  $('#close_player').click(closePlayer);
  $('#play_video').click( function() {
    $(this).animate({
      'opacity': '0',
    }, 1000);
     player.playVideo();
  });
     