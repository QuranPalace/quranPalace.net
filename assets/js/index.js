$(document).ready(imReady);

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, "slow");
        return false;
      }
    }
  });
});


function imReady()
{
	$("#quotes .avatarBox .avatar").click(function()
  {
    var idx = $(this).attr('idx');
    if( idx =='6')
    {
      return;
    }
    if($('#quotes .speechBubble[idx="'+idx+'"]').hasClass('show'))
    {
      $('#quotes .speechBubble').removeClass('show');
      $('#quotes .speechBubble[idx="'+idx+'"]').removeClass('show');
    }
    else
    {
      $('#quotes .speechBubble').removeClass('show');
      $('#quotes .speechBubble[idx="'+idx+'"]').addClass('show');
    }
  });

  $('#goHome').click(function()
  {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  })

  // $("#quotes .avatarBox .avatar").hoverIntent( 
  //   function(elem)
  //   {
      

  //   },
  //   function(elem)
  //   {
  //     console.log(this);
  //   } );	

}
