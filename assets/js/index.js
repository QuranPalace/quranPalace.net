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

function showSkills()
{
	var startColor = '#ff1166';
	var endColor = '#77C725';
	$('.skillProgressbar').each(function(i, obj) {
    var element = document.getElementById(this.id);
		var circle = new ProgressBar.Circle(element, {
		    color: startColor,
		    trailColor: '#ffffff',
		    trailWidth: 1,
		    duration: 2000,
		    easing: 'bounce',
		    strokeWidth: 5,

		    // Set default step function for all animate calls
		    step: function(state, circle) {
		        circle.path.setAttribute('stroke', state.color);
		        circle.setText((circle.value() * 100).toFixed(0).toString()+'%');
		    }
		});

		circle.animate(parseFloat($(this).attr('percent')), {
		    from: {color: startColor},
		    to: {color: endColor}
		});
	});
	
}


function imReady()
{
	
	halfHeight = $(window).height()/2;
	headerHeight = $("#headerPlate").outerHeight();
	smallHeaderHeight = $("#smallHeaderPlate").outerHeight();
	topMode = true;
	opactityOffset = $(window).height()/4;

	$('#homeButton').click(function()
	{
		if($('#headerPlate ul li h6').hasClass('active'))
		{
			$('#headerPlate ul li h6').removeClass('active')
		}
		
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})

	$('.sideMenuPlate #smallHomeButton').click(function()
	{
		$('#sideMenuToggler').trigger( "click" );
		setTimeout(function()
		{
			$("html, body").animate({ scrollTop: 0 }, "slow");	
		},400);
		
	});
	$('.sideMenuPlate #smallAboutButton').click(function()
	{
		$('#sideMenuToggler').trigger( "click" );
		setTimeout(function()
		{
			$("html, body").animate({ scrollTop: $('#about').offset().top }, "slow");		
		},400);
		
	});
	$('.sideMenuPlate #smallPortfolioButton').click(function()
	{
		$('#sideMenuToggler').trigger( "click" );
		setTimeout(function()
		{
			$("html, body").animate({ scrollTop: $('#portfolio').offset().top }, "slow");		
		},400);
	});
	$('.sideMenuPlate #smallSkillsButton').click(function()
	{
		$('#sideMenuToggler').trigger( "click" );
		setTimeout(function()
		{
			$("html, body").animate({ scrollTop: $('#skills').offset().top }, "slow");		
		},400);
	});

	$('.sideMenuPlate #smallContactButton').click(function()
	{
		$('#sideMenuToggler').trigger( "click" );
		setTimeout(function()
		{
			$("html, body").animate({ scrollTop: $('#contact').offset().top }, "slow");		
		},400);
	});

	

	

	$(window).scroll(function()
	{
		halfHeight = $(window).height()/2;
		if($(document).scrollTop()>$(window).height()-headerHeight && $("#headerPlate").hasClass('colored')==false)
		{
			$("#headerPlate").addClass('colored');
		}
		else if($(document).scrollTop()<$(window).height()-headerHeight && $("#headerPlate").hasClass('colored')==true)
		{
			$("#headerPlate").removeClass('colored');	
		}
		
		if($(document).scrollTop()>$(window).height()-smallHeaderHeight && $("#smallHeaderPlate").hasClass('colored')==false)
		{
			$("#smallHeaderPlate").addClass('colored');
		}
		else if($(document).scrollTop()<$(window).height()-smallHeaderHeight && $("#smallHeaderPlate").hasClass('colored')==true)
		{
			$("#smallHeaderPlate").removeClass('colored');
		}

		// if($(document).scrollTop()<$(window).height())
		// {
		// 	blurOpacity=(1-($(document).scrollTop()/opactityOffset));
			
		// 	if(blurOpacity>1)
		// 		blurOpacity=1;
		// 	else if(blurOpacity<0)
		// 		blurOpacity=0;
		// 	$('#topPlate').css({'opacity':blurOpacity.toString()})
		// }
		if($(document).scrollTop()>$('#portfolioPlate').position().top - $(window).height()/4 && $('.portfolioBox').hasClass('hd')==true)
		{	
			$('.portfolioBox').removeClass('hd');
		}

		if($(document).scrollTop()>$('#aboutPlate').position().top - $(window).height()/4 && ($('#aboutPlate').hasClass('hd')==true)) 
		{	
			$('#aboutPlate').removeClass('hd');
		}
		if($(document).scrollTop()>$('#skillsPlate').position().top - $(window).height()/4 && ($('#skillsPlate').hasClass('hd')==true)) 
		{	
			$('#skillsPlate').removeClass('hd');
			setTimeout(function()
			{
				showSkills();
			},600);
		}
		
		if($(document).scrollTop()+halfHeight<$('#about').position().top-headerHeight)
		{
			if($('#headerPlate ul li h6').hasClass('active'))
			{
				$('#headerPlate ul li h6').removeClass('active')
			}
		}
		if($(document).scrollTop()+halfHeight>$('#about').position().top-headerHeight && $(document).scrollTop()+halfHeight<$('#portfolio').position().top-100 && $('#aboutButton').hasClass('active')==false)
		{
			if($('#headerPlate ul li h6').hasClass('active'))
			{
				$('#headerPlate ul li h6').removeClass('active')
			}
			$('#aboutButton').addClass('active');
		}
		else if($(document).scrollTop()+halfHeight>$('#portfolio').position().top-headerHeight && $(document).scrollTop()+halfHeight<$('#skills').position().top-100 && $('#portfolioButton').hasClass('active')==false)
		{
			if($('#headerPlate ul li h6').hasClass('active'))
			{
				$('#headerPlate ul li h6').removeClass('active')
			}
			$('#portfolioButton').addClass('active');
		}
		else if($(document).scrollTop()+halfHeight>$('#skills').position().top-headerHeight && $(document).scrollTop()+halfHeight<$('#contact').position().top-100 && $('#skillsButton').hasClass('active')==false)
		{
			if($('#headerPlate ul li h6').hasClass('active'))
			{
				$('#headerPlate ul li h6').removeClass('active')
			}
			$('#skillsButton').addClass('active');
		}
		else if($(document).scrollTop()+halfHeight>$('#contact').position().top-headerHeight && $('#contactButton').hasClass('active')==false)
		{
			if($('#headerPlate ul li h6').hasClass('active'))
			{
				$('#headerPlate ul li h6').removeClass('active')
			}
			$('#contactButton').addClass('active');
		}

	});



}
