$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('a[href="#portfolio"]');
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#portfolio').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
