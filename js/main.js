;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};



	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			
			return false;
		});
	
	};

	//sliders

				const items = document.querySelectorAll('.slide');
				const itemCount = items.length;
				const nextItem = document.querySelector('.next');
				const previousItem = document.querySelector('.previous');
				let count = 0;

				function showNextItem() {
				items[count].classList.remove('active');

				if(count < itemCount - 1) {
					count++;
				} else {
					count = 0;
				}

				items[count].classList.add('active');
				console.log(count);
				}

				function showPreviousItem() {
				items[count].classList.remove('active');

				if(count > 0) {
					count--;
				} else {
					count = itemCount - 1;
				}

				items[count].classList.add('active');
				console.log(count);
				}

				function keyPress(e) {
				e = e || window.event;
				
				if (e.keyCode == '37') {
					showPreviousItem();
				} else if (e.keyCode == '39') {
					showNextItem();
				}
				}

				nextItem.addEventListener('click', showNextItem);
				previousItem.addEventListener('click', showPreviousItem);
				document.addEventListener('keydown', keyPress);





				const items2 = document.querySelectorAll('.slide2');
				const itemCount2 = items2.length;
				const nextItem2 = document.querySelector('.next2');
				const previousItem2 = document.querySelector('.previous2');
				let count2 = 0;

				function showNextItem2() {
				items2[count2].classList.remove('active');

				if(count2 < itemCount2 - 1) {
					count2++;
				} else {
					count2 = 0;
				}

				items2[count2].classList.add('active');
				console.log(count2);
				}

				function showPreviousItem2() {
				items2[count2].classList.remove('active');

				if(count2 > 0) {
					count2--;
				} else {
					count2 = itemCount2 - 1;
				}

				items2[count2].classList.add('active');
				console.log(count2);
				}

				function keyPress(e) {
				e = e || window.event;
				
				if (e.keyCode == '37') {
					showPreviousItem();
				} else if (e.keyCode == '39') {
					showNextItem();
				}
				}

				nextItem2.addEventListener('click', showNextItem);
				previousItem2.addEventListener('click', showPreviousItem);
				


				$('#btnStories').click(function (e) {
				e.stopPropagation();
				$('#wrapper1').show();
				$('#wrapper2').hide();
			});
				$('#btnFeed').click(function (e) {
				e.stopPropagation();
				$('#wrapper2').show();
				$('#wrapper1').hide();
				
			});


	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};


	


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};



	// Animations
	// Home

	var homeAnimate = function() {
		if ( $('#fh5co-home').length > 0 ) {	

			$('#fh5co-home').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-home .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var introAnimate = function() {
		if ( $('#fh5co-intro').length > 0 ) {	

			$('#fh5co-intro').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-intro .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 300);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var aboutAnimate = function() {
		var about = $('#fh5co-about');
		if ( about.length > 0 ) {	

			about.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						about.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var servicesAnimate = function() {
		var services = $('#fh5co-services');
		if ( services.length > 0 ) {	

			services.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = services.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						services.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						services.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);


					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var workAnimate = function() {
		if ( $('#fh5co-work').length > 0 ) {	

			$('#fh5co-work').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-work .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var dgAnimate = function() {
		if ( $('#fh5co-dg').length > 0 ) {	

			$('#fh5co-dg').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-dg .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var dwAnimate = function() {
		if ( $('#fh5co-dw').length > 0 ) {	

			$('#fh5co-dw').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-dw .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var cmAnimate = function() {
		if ( $('#fh5co-cm').length > 0 ) {	

			$('#fh5co-cm').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-cm .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var icAnimate = function() {
		if ( $('#fh5co-ic').length > 0 ) {	

			$('#fh5co-ic').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-ic .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var contactAnimate = function() {
		var contact = $('#fh5co-contact');
		if ( contact.length > 0 ) {	

			contact.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						contact.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	//PORTFOLIO NAV

	// Page Nav
	var clickMenu2 = function() {

		$('#navbar2 a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar2');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	
	var navActive2 = function(section) {

		var $el = $('#navbar2 > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection2 = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive2($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive2($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};

	///CONTACT FORM

	$("#contactForm").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			formError();
			submitMSG(false, "Datos Inválidos. Intente nuevamente.");
		} else {
			// everything looks good!
			event.preventDefault();
			submitForm();
		}
	});
	
	
	function submitForm(){
		// Initiate Variables With Form Content
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("phone").val();
		var message = $("#message").val();
	
		$.ajax({
			type: "POST",
			url: "php/form-process.php",
			data: "name=" + name + "&email=" + email + "&phone" + phone +  "&message=" + message,
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					formError();
					submitMSG(false,text);
				}
			}
		});
	}
	
	function formSuccess(){
		$("#contactForm")[0].reset();
		submitMSG(true, "¡Mensaje Enviado!")
	}
	
	function formError(){
		$("#contactForm").removeClass().addClass('error-msg'), function(){
			$(this).removeClass();
		};
	}
	
	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-center tada animated text-success";
		} else {
			var msgClasses = "h3 text-center text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}

	
	


	

	

	


	

	
	


	
	

	// Document on load.
	$(function(){

		parallax();

		burgerMenu();
		submitForm();

		clickMenu();
		clickMenu2();

		windowScroll();

		navigationSection();
		navigationSection2();

		goToTop();
		showNextItem();
		showPreviousItem();
		showNextItem2();
		showPreviousItem2();


		// Animations
		homeAnimate();
		introAnimate();
		aboutAnimate();
		servicesAnimate();
		workAnimate();
		dgAnimate();
		dwAnimate();
		cmAnimate();
		icAnimate();
		
		
		
		
		contactAnimate();
		

	});


}());