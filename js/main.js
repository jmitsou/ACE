(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
    
$(document).ready(function(){
    $('ul.tabs').tabs();
  });
  
$(document).ready(function() {
    $('select').material_select();
  });
  
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}


//Registraion

$(document).ready(function() {
	$("#reg_submit").click(function() {
		var process = true;
		$("#registration input").each(function() {
			if ($.trim(this.value) == "") {
				process = false;
			}
		});
		if (process == true) {
			// Check to see if username is more than 4 characters
			var firstname = $.trim($("#firstname").val());
			var lastname = $.trim($("#lastname").val());
			var username = $.trim($("#username").val());
			var password = $.trim($("#password").val());
			var email = $.trim($("#email").val());
			var verifyemail = $.trim($("#verifyemail").val());
			if (username.length >= 4) {
				// Check to see if the email addresses match
				if (email == verifyemail) {
					// Check to see if username is taken
					$("#reg_span").html("<img src='img/loading.gif' height='20' align='absmiddle' />");
					$.post("scripts/parse_registration.php", { action: "check", email: email, username: username }, function(check_data) {
						if (check_data == 0) {
							// Everything is fine to use
							$("#registration input, #registration button").each(function() {
								$("#"+this.id).attr("disabled", "disabled");
							});
							$.post("scripts/parse_registration.php", { action: "register", firstname: firstname, lastname: lastname, email: email, username: username, password: password }, function(reg_data) {
								if (reg_data == 1) {
									// Successfully registered
									$("#reg_span").empty();
									$("#reg_success").fadeIn(500);
									setTimeout(function () {
									   window.location.href= 'http://dev.acecertificate.com/index.html'; // the redirect goes here
									
									},10000); // 10 seconds
									
								} else if (reg_data == 0) {
									// Registration failed.
									$("#reg_span").empty();
									$("#reg_failed").fadeIn(500);
									setTimeout(function () {
									   window.location.href= 'http://dev.acecertificate.com/index.html'; // the redirect goes here
									
									},10000); // 10 seconds
								}
							});
						} else if (check_data == 1) {
							// Email already exists
							$("#reg_span").html("<font color='#ff0000' size='-1'>Email has already been used.</font>");
						} else if (check_data == 2) {
							// Username already exists
							$("#reg_span").html("<font color='#ff0000' size='-1'>Username is taken.</font>");
						} else if (check_data == 3) {
							// Invalid Email
							$("#reg_span").html("<font color='#ff0000' size='-1'>Email is invalid.</font>");
						} else {
							// Debugging
							alert(check_data);
						}
					});
				} else {
					$("#reg_span").html("<font color='#ff0000' size='-1'>Email fields do not match.</font>");
				}
			} else {
				$("#reg_span").html("<font color='#ff0000' size='-1'>Username is too short.</font>");
			}
		} else {
			$("#reg_span").html("<font color='#ff0000' size='-1'>All fields required.</font>");
		}
	});
});

//Slider

jQuery(document).ready(function($){
	var slidesWrapper = $('.cd-hero-slider');

	//check if a .cd-hero-slider exists in the DOM 
	if ( slidesWrapper.length > 0 ) {
		var primaryNav = $('.cd-primary-nav'),
			sliderNav = $('.cd-slider-nav'),
			navigationMarker = $('.cd-marker'),
			slidesNumber = slidesWrapper.children('li').length,
			visibleSlidePosition = 0,
			autoPlayId,
			autoPlayDelay = 5000;

		//upload videos (if not on mobile devices)
		uploadVideo(slidesWrapper);

		//autoplay slider
		setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);

		//on mobile - open/close primary navigation clicking/tapping the menu icon
		primaryNav.on('click', function(event){
			if($(event.target).is('.cd-primary-nav')) $(this).children('ul').toggleClass('is-visible');
		});
		
		//change visible slide
		sliderNav.on('click', 'li', function(event){
			event.preventDefault();
			var selectedItem = $(this);
			if(!selectedItem.hasClass('selected')) {
				// if it's not already selected
				var selectedPosition = selectedItem.index(),
					activePosition = slidesWrapper.find('li.selected').index();
				
				if( activePosition < selectedPosition) {
					nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
				} else {
					prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
				}

				//this is used for the autoplay
				visibleSlidePosition = selectedPosition;

				updateSliderNavigation(sliderNav, selectedPosition);
				updateNavigationMarker(navigationMarker, selectedPosition+1);
				//reset autoplay
				setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);
			}
		});
	}

	function nextSlide(visibleSlide, container, pagination, n){
		visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			visibleSlide.removeClass('is-moving');
		});

		container.children('li').eq(n).addClass('selected from-right').prevAll().addClass('move-left');
		checkVideo(visibleSlide, container, n);
	}

	function prevSlide(visibleSlide, container, pagination, n){
		visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			visibleSlide.removeClass('is-moving');
		});

		container.children('li').eq(n).addClass('selected from-left').removeClass('move-left').nextAll().removeClass('move-left');
		checkVideo(visibleSlide, container, n);
	}

	function updateSliderNavigation(pagination, n) {
		var navigationDot = pagination.find('.selected');
		navigationDot.removeClass('selected');
		pagination.find('li').eq(n).addClass('selected');
	}

	function setAutoplay(wrapper, length, delay) {
		if(wrapper.hasClass('autoplay')) {
			clearInterval(autoPlayId);
			autoPlayId = window.setInterval(function(){autoplaySlider(length)}, delay);
		}
	}

	function autoplaySlider(length) {
		if( visibleSlidePosition < length - 1) {
			nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, visibleSlidePosition + 1);
			visibleSlidePosition +=1;
		} else {
			prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, 0);
			visibleSlidePosition = 0;
		}
		updateNavigationMarker(navigationMarker, visibleSlidePosition+1);
		updateSliderNavigation(sliderNav, visibleSlidePosition);
	}

	function uploadVideo(container) {
		container.find('.cd-bg-video-wrapper').each(function(){
			var videoWrapper = $(this);
			if( videoWrapper.is(':visible') ) {
				// if visible - we are not on a mobile device 
				var	videoUrl = videoWrapper.data('video'),
					video = $('<video loop><source src="'+videoUrl+'.mp4" type="video/mp4" /><source src="'+videoUrl+'.webm" type="video/webm" /></video>');
				video.appendTo(videoWrapper);
				// play video if first slide
				if(videoWrapper.parent('.cd-bg-video.selected').length > 0) video.get(0).play();
			}
		});
	}

	function checkVideo(hiddenSlide, container, n) {
		//check if a video outside the viewport is playing - if yes, pause it
		var hiddenVideo = hiddenSlide.find('video');
		if( hiddenVideo.length > 0 ) hiddenVideo.get(0).pause();

		//check if the select slide contains a video element - if yes, play the video
		var visibleVideo = container.children('li').eq(n).find('video');
		if( visibleVideo.length > 0 ) visibleVideo.get(0).play();
	}

	function updateNavigationMarker(marker, n) {
		marker.removeClassPrefix('item').addClass('item-'+n);
	}

	$.fn.removeClassPrefix = function(prefix) {
		//remove all classes starting with 'prefix'
	    this.each(function(i, el) {
	        var classes = el.className.split(" ").filter(function(c) {
	            return c.lastIndexOf(prefix, 0) !== 0;
	        });
	        el.className = $.trim(classes.join(" "));
	    });
	    return this;
	};
});

//slider ends

//beginning of hide agent div

document.getElementById("test").onchange = function () {
    var val = this.options[this.selectedIndex].value;
    document.getElementById("otherTb").style.display = (val == "2") ? "block" : "none";
    
};

//end of hide agent div

var select_element = document.createElement("select");
var option_element;

for (var i = 0; i < 10; i++) {
    option_element = document.createElement("option");
    option_element.value = i;
    option_element.text  = i;
    select_element.appendChild(option_element);
}

select_element.addEventListener("change", function (event) {
    var repeat_container = document.getElementById("repeat");
    var div_element;
    
    // Remove previously added divs
    while (repeat_container.firstChild) {
      repeat_container.removeChild(repeat_container.firstChild);
    }
    
    // Add new divs
    for (var i = 0; i < event.currentTarget.value; i++) {
        div_element = document.createElement("div");
        div_element.style.backgroundColor = "rgb(0,255," + (i * 20) + ")";
        div_element.style.height = "10px";
        repeat_container.appendChild(div_element);
    }
}, false);
document.body.appendChild(select_element);