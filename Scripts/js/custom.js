(function ($) {
	"use strict";

	function HomeOneBannerSlider () {
		if ($('#banner .banner.home-v1').length) {
			$('#banner .banner.home-v1').revolution({
				delay:5000,
				startwidth:1170,
				startheight:770,
				startWithSlide:0,

				fullScreenAlignForce:"on",
				autoHeight:"off",
				minHeight:"off",

				shuffle:"off",

				onHoverStop:"off",

				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResoluition:0,

				hideThumbs:1,
				hideTimerBar:"on",

				keyboardNavigation:"on",

				navigationType:"arrows",
				navigationArrows: "nexttobullets",
				navigationStyle:"custom",

				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:30,
				navigationVOffset:30,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,


				touchenabled:"on",
				swipe_velocity:"0.7",
				swipe_max_touches:"1",
				swipe_min_touches:"1",
				drag_block_vertical:"false",

				parallax:"mouse",
				parallaxBgFreeze:"on",
				parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
				parallaxDisableOnMobile:"off",

				stopAtSlide:-1,
				stopAfterLoops:-1,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				hideSliderAtLimit:0,

				dottedOverlay:"none",

				spinned:"spinner4",

				fullWidth:"on",
				forceFullWidth:"on",
				fullScreen:"off",
				fullScreenOffsetContainer:"#banner",
				fullScreenOffset:"0px",

				panZoomDisableOnMobile:"off",

				simplifyAll:"off",

				shadow:0
			});
		}
	}
	
	// sticky header 
	function stickyHeader () {
		if($(window).scrollTop() > 200) {
			$('header').addClass('header-fixed'); 
		}
		else if($(this).scrollTop() <= 200) {
			$('header').removeClass('header-fixed'); 
		}
	}
	function brandCarosule () {
		if ($('#our-brands .owl-carousel').length) {
			$('#our-brands .owl-carousel').owlCarousel({
			    loop: true,
			    margin: 0,
			    nav: false,
			    dots: false,
				autoplay:true,
				autoplayTimeout:1000,
				autoplayHoverPause:true,
			    responsive: {
			        0:{
			            items:1
			        },
			        480:{
			            items:2
			        },
			        600:{
			            items:4
			        },
			        1000:{
			            items:5
			        }
			    }
			});
		}
	}
	// vertical product carsoule 
	function verticalProductCarsoule () {
		// grabing carsoule wrap
		var carsouleWrap = $('.popular-product-carousel');

		// checking if element is in dom
		if(carsouleWrap.length){
			carsouleWrap.each(function () {
				// caching $(this)
				var Self = $(this);
				
				// grabing control wrap
				var controlWrap = Self.parent().find('.popular-product-carousel-control');
				
				// grabing control buttons
				var prevControl = controlWrap.find('.prev');
				var nextControl = controlWrap.find('.next');

				// adding class to active slide
				Self.find('li').addClass('slide');

				// grabing the slide in variable and activing slide
				var carsouleSlide = Self.bxSlider({
					mode: 'vertical',
				    auto: true,
  					autoControls: false,
  					controls: false,
  					pager: false,
  					autoHover: true,
				    minSlides: 3,
				    slideMargin: 30
				});
				
				// activing prev button
				prevControl.on('click', function () {
					carsouleSlide.goToPrevSlide();
				});

				// activing next button
				nextControl.on('click', function () {
					carsouleSlide.goToNextSlide();
				});
			});
		}
	}

	//hot collection carsoule
	function hotCollectionCarsoule () {
		var hotCollectionCarsouleWrap = $('.hot-collection-carousel-wrap');
		var carsouleSlide = {};
		if(hotCollectionCarsouleWrap.length) {
			// creating function for each
			hotCollectionCarsouleWrap.each(function () {
				//caching this
				var Self = $(this);
				
				// grabing control wrap
				var controlWrap = Self.parent().find('.hot-collection-carousel-control');
				
				// grabing control buttons
				var prevControl = controlWrap.find('.prev');
				var nextControl = controlWrap.find('.next');

				// adding class to each single item
				Self.find('.single-hot-collection-carousel').addClass('slide');

				var this_parent_pane = Self.parents('.tab-pane').attr('id');
				
				// grbing slides and activating plugin
				carsouleSlide['#'+this_parent_pane] = Self.bxSlider({
				    auto: true,
  					autoControls: false,
  					controls: false,
  					pager: false,
  					autoHover: true,
				    minSlides: 1
				});

				// activing prev button
				prevControl.on('click', function () {
					carsouleSlide['#'+this_parent_pane].goToPrevSlide();
				});

				// activing next button
				nextControl.on('click', function () {
					carsouleSlide['#'+this_parent_pane].goToNextSlide();
				});

			});

			$('#our-hot-collections .nav-pills > li > a').on('click', function(e){
				var this_href = $(this).attr('href');
				carsouleSlide[this_href].destroySlider();
			});
		}
	}

	// what we offer carsoule
	function whatWeOfferCarsoule () {
		var whatWeOfferCarsouleWrap = $('.what-we-offer-carsoule');
		var customPager = $('.what-we-offer.carsoule-custom-pager li[data-slide-index]');
		if (whatWeOfferCarsouleWrap.length) {
			// creating function for each
			whatWeOfferCarsouleWrap.each(function () {
				//caching this
				var Self = $(this);

				// adding class to each single item
				Self.find('.carsoule-content').addClass('slide');

				// grbing slides and activating plugin
				var carsouleSlide = Self.bxSlider({
				    auto: true,
  					autoControls: false,
  					controls: false,
  					pager: false,
  					autoHover: true,
				    minSlides: 1,
				    onSlideNext: function () {
			    		var current = carsouleSlide.getCurrentSlide();		    		
						customPager.each(function () {
							var Slef = $(this);
							var slideIndex = $(this).data('slide-index');
							if (slideIndex === current) {
								customPager.removeClass('active');
								Slef.addClass('active');
							}
						});
			    	}
				});

				customPager.each(function () {
					var slideIndex = $(this).data('slide-index');
					$(this).on('click', function () {
						customPager.removeClass('active');
						$(this).addClass('active');
						carsouleSlide.goToSlide(slideIndex);
					});
				});
			});
		};
	}
	// custom scrollbar for hidden sidebar navigation
	function customScrollBarHiddenSidebar () {
		if ($('.sidebar-hidden-wrap').length) {
			$('.sidebar-hidden-wrap').mCustomScrollbar();
		};
	}
	// custom scrollbar for select brand
	function customScrollBarSelectBrand () {
		if ($('.select-brand-scroll-wrap').length) {
			$('.select-brand-scroll-wrap').mCustomScrollbar();
		};
	}
	function priceRangerSidebar () {
		if ($('.price-ranger').length) {
			$( '.price-ranger #slider-range' ).slider({
				range: true,
				min: 0,
				max: 500,
				values: [ 80, 196 ],
				slide: function( event, ui ) {
					$( '.price-ranger .ranger-min-max-block .min' ).val( '$' + ui.values[ 0 ] );
					$( '.price-ranger .ranger-min-max-block .max' ).val( '$' + ui.values[ 1 ] );
				}
			});
		    $( '.price-ranger .ranger-min-max-block .min' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 0 ) );
			$( '.price-ranger .ranger-min-max-block .max' ).val( '$' + $( '.price-ranger #slider-range' ).slider( 'values', 1 ) );		    
		};
	}
	function sideNavConfig () {
		var navOpner = $('.sidenav-opener');
		var navCloser = $('.side-nav-closer');
		var sideNavWrap = $('#sidebar-hidden-widget');
		if (sideNavWrap.length) {
			navOpner.on('click', function () {
				sideNavWrap.css({
					'left' : '0'
				});
			});
			navCloser.on('click', function () {
				sideNavWrap.css({
					'left' : '-100%'
				});
			});
			sideNavWrap.find('.navigation ul li a .fa').on('click', function () {
				$(this).parent().parent().children('ul').slideToggle();
				return false;
			});
		};
	}
	// cart top box config
	function cartTopBoxConfig () {
		var cartOpner = $('.shopping-cart.cart-top-box-opener');
		var cartCloser = $('.cart-top-box-closer');
		var cartWrap = $('.cart-top-box');
		if (cartWrap.length) {
			cartOpner.on('click', function () {
				cartWrap.css({
					'right' : '0px'
				});
				return false;
			});
			cartCloser.on('click', function () {
				cartWrap.css({
					'right' : '-500px'
				});
				return false;
			});
		};		
	}
	// filterd products 
	function filterdProducts () {
		if ($('#filterd-products').length) {
			$('#filterd-products').mixItUp();
		};
	}
	// fancybox init
	function fancyboxInit () {
		if($('.fancybox').length) {
			$('.fancybox').fancybox();
		}
	}
	// layout toggler
	function layoutTogglerWithSidebar () {
		if ($('.shop-layout-toggler').length) {
			$('.shop-layout-toggler').on('click', function() {
				$('.shop-layout-toggler').removeClass('active');
				$(this).addClass('active');				
			});
			$('.grid-listed').on('click', function () {
				$('.single-shop-item').each(function () {
					// grabing the html value
					var imageHolderHtml = $(this).find('.img-holder').html();
					var itemMeta = $(this).find('.meta').html();
					// configuring class
					$(this).removeClass('col-lg-4');
					$(this).addClass('listed-layout clearfix');
					// removing previous html
					$(this).find('.img-holder').remove();
					$(this).find('.meta').remove();
					// re arranging new structure
					$(this).append(function () {
						return '<div class="col-lg-4"> <div class="img-holder hvr-rectangle-out"> '+imageHolderHtml+'</div> </div> <div class="col-lg-8"> <div class="meta"> '+itemMeta+'</div> </div>';
					});
				});
			});
			$('.grid-thumb').on('click', function () {
				$('.single-shop-item').each(function () {
					// grabing the html value
					var imageHolderHtml = $(this).find('.img-holder').html();
					var itemMeta = $(this).find('.meta').html();
					// configuring class
					$(this).removeClass('listed-layout clearfix');
					$(this).addClass('col-lg-4');
					// removing previous html
					$(this).find('.img-holder').remove();
					$(this).find('.meta').remove();
					// re arranging new structure
					$(this).append(function () {
						return '<div class="img-holder hvr-rectangle-out"> '+imageHolderHtml+'</div> <div class="meta"> '+itemMeta+'</div>';
					});
				});
			});
		};
	}
	function layoutTogglerNoSidebar () {
		if ($('.shop-layout-toggler').length) {
			$('.shop-layout-toggler').on('click', function() {
				$('.shop-layout-toggler').removeClass('active');
				$(this).addClass('active');				
			});
			$('.grid-listed').on('click', function () {
				$('.single-shop-item.no-sidebar').each(function () {
					// grabing the html value
					var imageHolderHtml = $(this).find('.img-holder').html();
					var itemMeta = $(this).find('.meta').html();
					// configuring class
					$(this).removeClass('col-lg-3');
					$(this).addClass('listed-layout clearfix');
					// removing previous html
					$(this).find('.img-holder').remove();
					$(this).find('.meta').remove();
					// re arranging new structure
					$(this).append(function () {
						return '<div class="col-lg-3"> <div class="img-holder hvr-rectangle-out"> '+imageHolderHtml+'</div> </div> <div class="col-lg-9"> <div class="meta"> '+itemMeta+'</div> </div>';
					});
				});
			});
			$('.grid-thumb').on('click', function () {
				$('.single-shop-item.no-sidebar').each(function () {
					// grabing the html value
					var imageHolderHtml = $(this).find('.img-holder').html();
					var itemMeta = $(this).find('.meta').html();
					// configuring class
					$(this).removeClass('listed-layout clearfix');
					$(this).addClass('col-lg-3');
					// removing previous html
					$(this).find('.img-holder').remove();
					$(this).find('.meta').remove();
					// re arranging new structure
					$(this).append(function () {
						return '<div class="img-holder hvr-rectangle-out"> '+imageHolderHtml+'</div> <div class="meta"> '+itemMeta+'</div>';
					});
				});
			});
		};
	}
	function singleProductThumbCarosule () {
		if ($('.single-product-thumb-carsoule').length) {
			$('.single-product-thumb-carsoule').owlCarousel({
			    loop: true,
			    margin: 10,
			    nav: true,
			    dots: false,
	            navText: [
	                '<i class="fa fa-angle-left"></i>',
	                '<i class="fa fa-angle-right"></i>'
	            ],
			    autoplayHoverPause: true,
			    responsive: {
			        0:{
			            items:1
			        },
			        480:{
			            items:2
			        },
			        600:{
			            items:2
			        },
			        1000:{
			            items:3
			        }
			    }
			});
		}
	}
	// single product tab
	function singleProductTab () {
		if ($('.single-product-tab').length) {
			var tabTitle =  $('.single-product-tab-title li a');
			var tabWrap = $('.single-product-tab-content-wrap');
			tabTitle.each(function () {
				// showing only first item
				tabWrap.find('.single-product-tab-content').hide();
				tabWrap.find('.single-product-tab-content').eq(0).show();
				$(this).on('click', function () {
					// grabing tab name 
					var tabName = $(this).parent().data('tab-name');
					// toggling active class
					tabTitle.parent().removeClass('active');
					$(this).parent().addClass('active');
					tabWrap.find('.single-product-tab-content').hide();
					tabWrap.find('.'+tabName).fadeIn();
					return false;
				})
			});
		}
	}
	// Google Map
	function gMap () {
		if ($('.google-map').length) {
            $('.google-map').each(function () {
            	// getting options from html 
            	var mapName = $(this).attr('id');
            	var mapLat = $(this).data('map-lat');
            	var mapLng = $(this).data('map-lng');
            	var iconPath = $(this).data('icon-path');
            	var mapZoom = $(this).data('map-zoom');
            	var mapTitle = $(this).data('map-title');

            	// if zoom not defined the zoom value will be 15;
            	if (!mapZoom) {
            		var mapZoom = 15;
            	};
            	// init map
            	var map;
	            map = new GMaps({
	                div: '#'+mapName,
	                scrollwheel: false,
	                lat: mapLat,
	                lng: mapLng,
	                zoom: mapZoom
	            });
	            // if icon path setted then show marker
	            if(iconPath) {
            		map.addMarker({
		            	icon: iconPath,
		                lat: mapLat,
		                lng: mapLng,
		                title: mapTitle
		            });
            	}
            });  
		};
	}
	//Contact Form Validation
	function contactFormValidation () {
		if($('.contact-form').length){
			$('.contact-form').validate({ // initialize the plugin
				rules: {
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					message: {
						required: true
					},
					subject: {
						required: true
					}
				},
				submitHandler: function (form) { 
					// sending value with ajax request
					$.post($(form).attr('action'), $(form).serialize(), function (response) {
						$(form).parent('div').append(response);
						$(form).find('input[type="text"]').val('');
						$(form).find('input[type="email"]').val('');
						$(form).find('textarea').val('');
					});
					return false;
				}
			});
		}
	}
	// accrodion 
	function serenaAccrodion () {
		if ($('.accrodion-wrap').length) {
			$('.accrodion').eq(0).find('h4 .fa').removeClass('fa-plus').addClass('fa-minus');
			$('.accrodion').eq(0).find('.accrodion-content').slideDown();
			$('.accrodion').each(function () {
				$(this).find('h4').on('click', function () {					
					$('.accrodion').find('h4 .fa').removeClass('fa-minus').addClass('fa-plus');
					$('.accrodion').find('.accrodion-content').slideUp();
					$(this).find('.fa').toggleClass('fa-minus fa-plus');
					$(this).parent().parent().find('.accrodion-content').slideToggle();
				});
			});
		};
	}
	// star toggling on review form 
	function reviewStarToggle () {
		if ($('.reviews .contact-form .stars .fa-star').length) {
			$('.reviews .contact-form .stars .fa-star').on('click', function () {
				$(this).toggleClass('blank');
			});
		};
	}
	// mobile menu configure
	function mobileMenuConfig () {
		if ($('.mainmenu').length && $(window).width() <= 1024) {
			$('.main-nav-toggler').on('click', function () {
				$('.mobile-menu').slideToggle();	
			})
			$('.mainmenu').addClass('mobile-menu');
			$('.mobile-menu').find('ul').addClass('clearfix');
			$('.mobile-menu').find('li').addClass('clearfix');
			$('.mobile-menu li.dropdown > a').append(function () {
				return '<i class="fa fa-angle-down dropdown-toggler"></i>';
			});
			$('.dropdown-toggler').on('click', function () {
				$(this).parent().parent().children('ul').addClass('clearfix').slideToggle();
				return false;
			});
		};
	}
	// Dom Ready Function
	$(document).on('ready', function () {
		// add your functions
		HomeOneBannerSlider();
		brandCarosule();
		verticalProductCarsoule();
		hotCollectionCarsoule();
		whatWeOfferCarsoule();
		sideNavConfig();
		cartTopBoxConfig();
		filterdProducts();
		fancyboxInit();
		priceRangerSidebar();
		layoutTogglerWithSidebar();
		layoutTogglerNoSidebar();
		singleProductThumbCarosule();
		singleProductTab();
		gMap();
		contactFormValidation();
		serenaAccrodion();
		reviewStarToggle();
	});
	// window on load functino
	$(window).on('load', function () {
		// add your functions
		customScrollBarHiddenSidebar();
		customScrollBarSelectBrand();
		mobileMenuConfig();

	});
	// window on scroll functino
	$(window).on('scroll', function () {
		// add your functions
		stickyHeader();
	});
	$(window).on('resize', function () {
		// add your functions
		mobileMenuConfig();
	});

	$('#our-hot-collections a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		hotCollectionCarsoule ();
    	
	});

})(jQuery);