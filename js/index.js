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

/* Sign-in */

$('#sign-in-btn').click(function () {
    $('#sign-in-container').stop(true).fadeToggle();
    $('#sign-in-bottom-border').stop(true).fadeToggle();
    $('#navbar-bg').stop(true).fadeToggle();
});

$("#resources-close-btn").click(function(){
    $("#sign-in-container").fadeOut();
    $('#sign-in-bottom-border').fadeOut();
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

/*---------------------- Mobile Footer Navbar ----------------------*/

function toggleFooterSolutions() {
    if (document.getElementById('footer-solutions').style.display == 'none') {
        document.getElementById('footer-solutions').style.display = 'flex';
        document.getElementById('footer-solutions-arrowdown').style.display = 'none';
        document.getElementById('footer-solutions-arrowup').style.display = 'block';
    }
    else {
        document.getElementById('footer-solutions').style.display = 'none';
        document.getElementById('footer-solutions-arrowdown').style.display = 'block';
        document.getElementById('footer-solutions-arrowup').style.display = 'none';
    }
}

function toggleFooterPlatform() {
    if (document.getElementById('footer-platform').style.display == 'none') {
        document.getElementById('footer-platform').style.display = 'flex';
        document.getElementById('footer-platform-arrowdown').style.display = 'none';
        document.getElementById('footer-platform-arrowup').style.display = 'block';
    }
    else {
        document.getElementById('footer-platform').style.display = 'none';
        document.getElementById('footer-platform-arrowdown').style.display = 'block';
        document.getElementById('footer-platform-arrowup').style.display = 'none';
    }
}

function toggleFooterCompany() {
    if (document.getElementById('footer-company').style.display == 'none') {
        document.getElementById('footer-company').style.display = 'flex';
        document.getElementById('footer-company-arrowdown').style.display = 'none';
        document.getElementById('footer-company-arrowup').style.display = 'block';
    }
    else {
        document.getElementById('footer-company').style.display = 'none';
        document.getElementById('footer-company-arrowdown').style.display = 'block';
        document.getElementById('footer-company-arrowup').style.display = 'none';
    }
}

function toggleFooterResources() {
    if (document.getElementById('footer-resources').style.display == 'none') {
        document.getElementById('footer-resources').style.display = 'flex';
        document.getElementById('footer-resources-arrowdown').style.display = 'none';
        document.getElementById('footer-resources-arrowup').style.display = 'block';
    }
    else {
        document.getElementById('footer-resources').style.display = 'none';
        document.getElementById('footer-resources-arrowdown').style.display = 'block';
        document.getElementById('footer-resources-arrowup').style.display = 'none';
    }
}

function toggleFooterSupport() {
    if (document.getElementById('footer-support').style.display == 'none') {
        document.getElementById('footer-support').style.display = 'flex';
        document.getElementById('footer-support-arrowdown').style.display = 'none';
        document.getElementById('footer-support-arrowup').style.display = 'block';
    }
    else {
        document.getElementById('footer-support').style.display = 'none';
        document.getElementById('footer-support-arrowdown').style.display = 'block';
        document.getElementById('footer-support-arrowup').style.display = 'none';
    }
}