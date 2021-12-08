(function($) {
    "use strict";

    /*--------------------------
    preloader
    ---------------------------- */

    $(window).on('load', function() {
        var pre_loader = $('#preloader')
        pre_loader.fadeOut('slow', function() { $(this).remove(); });
    });


    // Alternativa navigazion !!!!!

    $('#auto').click(e => {
        window.location.href = 'index.html';
    })
    $('#indiv').click(e => {
        window.location.href = 'ia.html';
    })
    $('#sant').click(e => {
        window.location.href = 'sante-mogobaya.html';
    })
    $('#voyg').click(e => {
        window.location.href = 'voyage.html';
    })

    $('#hab').click(e => {
        window.location.href = 'reclamations.html';
    })


    /*---------------------
     TOP Menu Stick
    --------------------- */

    var windows = $(window);
    var sticky = $('#sticker');

    // windows.on('scroll', function() {
    //     var scroll = windows.scrollTop();
    //     if (scroll < 300) {
    //         sticky.removeClass('stick');
    //     }else{
    //         sticky.addClass('stick');
    //     }
    // });

    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */

    var mean_menu = $('nav#dropdown');
    mean_menu.meanmenu();

    /*---------------------
     wow .js
    --------------------- */
    function wowAnimation() {
        new WOW({
            offset: 10,
            mobile: true
        }).init()
        console.log("conso");
    }
    wowAnimation()

    /*--------------------------
     scrollUp
    ---------------------------- */

    $.scrollUp({
        scrollText: '<i class="ti-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    $('#backdrop').click((e) => {

        if ($('#staticBackdrop').css('display') == 'none') {
            $('#staticBackdrop').addClass('show lang-show')
        } else {
            $('#staticBackdrop').removeClass('show lang-show')
        }

    })

    $('.lan').click(e => {
        $('#staticBackdrop').removeClass('show lang-show')


    })

    /*--------------------------
     collapse
    ---------------------------- */

    var panel_test = $('.panel-heading a');
    panel_test.on('click', function() {
        panel_test.removeClass('active');
        $(this).addClass('active');
    });
    /*--------------------------
     Parallax
    ---------------------------- */
    var parallaxeffect = $(window);
    parallaxeffect.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });

    /*--------------------------
     MagnificPopup
    ---------------------------- */

    $('.video-play').magnificPopup({
        type: 'iframe'
    });

    /*--------------------------
    	 slider carousel
    ---------------------------- */
    var intro_carousel = $('.intro-carousel');
    intro_carousel.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        dots: false,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*---------------------
     Testimonial carousel
    ---------------------*/

    var review = $('.testimonial-carousel');
    review.owlCarousel({
        loop: true,
        nav: false,
        margin: 40,
        dots: true,
        center: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    /*----------------------------
    	Contact form
    ------------------------------ */
    $("#contactForm").on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm() {
        var name = $("#name").val();
        var email = $("#email").val();
        var msg_subject = $("#msg_subject").val();
        var message = $("#message").val();


        $.ajax({
            type: "POST",
            url: "assets/contact.php",
            data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
            success: function(text) {
                if (text === "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

    /*----------------------------
	Show quiz
------------------------------ */

    // $(".devise-request").on("click", function(event) {
    //     let page = $("#page")
    //     let q = $("#quizSection")

    //     page.fadeOut('slow', function() {
    //         $(this).hide();
    //         q.fadeOut('slow', function() { $(this).show(); });
    //     });



    // });

    $(".close-btn").on("click", function(event) {
        let page = $("#page")
        let q = $("#quizSection")

        page.fadeOut('slow', function() {
            $(this).show();
            q.fadeOut('slow', function() { $(this).hide(); });
        });



    });


    // Start quiz

    // End Quiz


})(jQuery);