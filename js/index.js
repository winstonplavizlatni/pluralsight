/*---------------------- Navbar ----------------------*/

/* Platfrom */
if (screen.width >= 1030) { 
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
}

/* Platform - responsive */

if (screen.width <= 1030) {
    function toggleMobilePlatform() {
    if (document.getElementById("platform-container").className == "" || document.getElementById('platform-container').className == "hide-animation-class") {
            document.getElementById('platform-container').classList.add('show-animation-class');
            document.getElementById('platform-container').classList.remove('hide-animation-class');
            document.getElementById('products-btn').style.display = 'none';
            document.getElementById('resources-btn').style.display = 'none';
            document.getElementById('for-individuals-btn').style.display = 'none';
            document.getElementById('mobile-sign-in').style.display = 'none';
            document.getElementById('mobile-view-plans').style.display = 'none';
    } else {
            document.getElementById('platform-container').classList.add('hide-animation-class');
            document.getElementById('platform-container').classList.remove('show-animation-class');
            document.getElementById('products-btn').style.display = 'block';
            document.getElementById('resources-btn').style.display = 'block';
            document.getElementById('for-individuals-btn').style.display = 'block';
            document.getElementById('mobile-sign-in').style.display = 'block';
            document.getElementById('mobile-view-plans').style.display = 'block';
    }
}
}

/* Products */
if (screen.width >= 1030) {
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
}

/* Products responsive */

if (screen.width <= 1030) {
    function toggleMobileProducts() {
    if (document.getElementById("products-container").className == "" || document.getElementById('products-container').className == "hide-animation-class") {
            document.getElementById('products-container').classList.add('show-animation-class');
            document.getElementById('products-container').classList.remove('hide-animation-class');
            document.getElementById('platform-btn').style.display = 'none';
            document.getElementById('resources-btn').style.display = 'none';
            document.getElementById('for-individuals-btn').style.display = 'none';
            document.getElementById('mobile-sign-in').style.display = 'none';
            document.getElementById('mobile-view-plans').style.display = 'none';
    } else {
            document.getElementById('products-container').classList.add('hide-animation-class');
            document.getElementById('products-container').classList.remove('show-animation-class');
            document.getElementById('platform-btn').style.display = 'block';
            document.getElementById('resources-btn').style.display = 'block';
            document.getElementById('for-individuals-btn').style.display = 'block';
            document.getElementById('mobile-sign-in').style.display = 'block';
            document.getElementById('mobile-view-plans').style.display = 'block';
    }
}
}

/* Resources */
if (screen.width >= 1030) {
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
}

/* Resources responsive */
if (screen.width <= 1030) {
    function toggleMobileResources() {
    if (document.getElementById("resources-container").className == "" || document.getElementById('resources-container').className == "hide-animation-class") {
            document.getElementById('resources-container').classList.add('show-animation-class');
            document.getElementById('resources-container').classList.remove('hide-animation-class');
            document.getElementById('platform-btn').style.display = 'none';
            document.getElementById('products-btn').style.display = 'none';
            document.getElementById('for-individuals-btn').style.display = 'none';
            document.getElementById('mobile-sign-in').style.display = 'none';
            document.getElementById('mobile-view-plans').style.display = 'none';
    } else {
            document.getElementById('resources-container').classList.add('hide-animation-class');
            document.getElementById('resources-container').classList.remove('show-animation-class');
            document.getElementById('platform-btn').style.display = 'block';
            document.getElementById('products-btn').style.display = 'block';
            document.getElementById('for-individuals-btn').style.display = 'block';
            document.getElementById('mobile-sign-in').style.display = 'block';
            document.getElementById('mobile-view-plans').style.display = 'block';
    }
}
}

/* Sign-in */
if (screen.width >= 1030) {
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
}

/* Sign-in responsive */

if (screen.width <= 1030) {
    function toggleMobileSignIn() {
    if (document.getElementById("sign-in-container").className == "" || document.getElementById('sign-in-container').className == "hide-animation-class") {
            document.getElementById('sign-in-container').classList.add('show-animation-class');
            document.getElementById('sign-in-container').classList.remove('hide-animation-class');
            document.getElementById('platform-btn').style.display = 'none';
            document.getElementById('products-btn').style.display = 'none';
            document.getElementById('for-individuals-btn').style.display = 'none';
            document.getElementById('resources-btn').style.display = 'none';
            document.getElementById('mobile-view-plans').style.display = 'none';
    } else {
            document.getElementById('sign-in-container').classList.add('hide-animation-class');
            document.getElementById('sign-in-container').classList.remove('show-animation-class');
            document.getElementById('platform-btn').style.display = 'block';
            document.getElementById('products-btn').style.display = 'block';
            document.getElementById('for-individuals-btn').style.display = 'block';
            document.getElementById('resources-btn').style.display = 'block';
            document.getElementById('mobile-view-plans').style.display = 'block';
    }
}
}

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
    document.getElementById('platform-btn').style.display = "block";
    document.getElementById('products-btn').style.display = "block";
    document.getElementById('resources-btn').style.display = "block";
    document.getElementById('for-individuals-btn').style.display = "block";
    document.getElementById('mobile-sign-in').style.display = "block";
    document.getElementById('platform-container').style.display = "block";
    document.getElementById('products-container').style.display = "block";
    document.getElementById('resources-container').style.display = "block";
    document.getElementById('sign-in-container').style.display = "block";
}

function closeMobileNav() {
    document.getElementById('navbar-left').style.display = "none";
    document.getElementById('mobile-navbar-bg').style.display = "none";
    document.getElementById('search-btn').style.display = "block";
    document.getElementById('mobile-menu').style.display = "block";
    document.getElementById('close-mobile-menu').style.display = "none";
    document.getElementById('platform-container').classList.add('hide-animation-class');
    document.getElementById('platform-container').classList.remove('show-animation-class');
    document.getElementById('products-container').classList.add('hide-animation-class');
    document.getElementById('products-container').classList.remove('show-animation-class');
    document.getElementById('resources-container').classList.add('hide-animation-class');
    document.getElementById('resources-container').classList.remove('show-animation-class');
    document.getElementById('sign-in-container').classList.add('hide-animation-class');
    document.getElementById('sign-in-container').classList.remove('show-animation-class');
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