/*---------------------- Navbar ----------------------*/

/* Platfrom */

$('#platform-btn').click(function () {
    $('#platform-container').stop(true).fadeToggle();
    $('#platform-bottom-border').stop(true).fadeToggle();
    $('#navbar-bg').stop(true).fadeToggle();
});

$("#platform-close-btn").click(function(){
    $("#platform-container").fadeOut();
    $('#platform-bottom-border').fadeOut();
    $('#navbar-bg').fadeOut();
});

/* Products */

$('#products-btn').click(function () {
    $('#products-container').stop(true).fadeToggle();
    $('#products-bottom-border').stop(true).fadeToggle();
    $('#navbar-bg').stop(true).fadeToggle();
});

$("#products-close-btn").click(function(){
    $("#products-container").fadeOut();
    $('#products-bottom-border').fadeOut();
    $('#navbar-bg').fadeOut();
});

/* Resources */

$('#resources-btn').click(function () {
    $('#resources-container').stop(true).fadeToggle();
    $('#resources-bottom-border').stop(true).fadeToggle();
    $('#navbar-bg').stop(true).fadeToggle();
});

$("#resources-close-btn").click(function(){
    $("#resources-container").fadeOut();
    $('#resources-bottom-border').fadeOut();
    $('#navbar-bg').fadeOut();
});

/* Search */

$('#search-btn').click(function () {
    $('#search-container').stop(true).fadeToggle();
    $('#navbar-bg').stop(true).fadeToggle();
});

$("#search-close-btn").click(function(){
    $("#search-container").fadeOut();
    $('#navbar-bg').fadeOut();
});

/*---------------------- Mobile Navbar ----------------------*/

function showMobileNav() {
    document.getElementById('navbar-left').style.display = "flex";
    document.getElementById('mobile-navbar-bg').style.display = "block";
    document.getElementById('search-btn').style.display = "none";
    document.getElementById('mobile-menu').style.display = "none";
    document.getElementById('close-mobile-menu').style.display = "block";
}

function closeMobileNav() {
    document.getElementById('navbar-left').style.display = "none";
    document.getElementById('mobile-navbar-bg').style.display = "none";
    document.getElementById('search-btn').style.display = "block";
    document.getElementById('mobile-menu').style.display = "block";
    document.getElementById('close-mobile-menu').style.display = "none";
}