/* Navigation toggle by scrolling */

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       document.getElementById('pre-header').classList.add('navigation-hide-class');
       document.getElementById('pre-header').classList.remove('navigation-show-class');
   } else {
    document.getElementById('pre-header').classList.add('navigation-show-class');
    document.getElementById('pre-header').classList.remove('navigation-hide-class');
   }
   lastScrollTop = st;
});

/* Range slider */

var freeTrialSlider = document.getElementById('free-trial-slider');
var freeTrialSlide1 = document.getElementById('free-trial-slide1');
var freeTrialSlide2 = document.getElementById('free-trial-slide2');
var freeTrialSlide3 = document.getElementById('free-trial-slide3');

function freeTrialSliderFunction() {
    if (freeTrialSlider.value == 0) {
        freeTrialSlide1.style.display = 'block';
        freeTrialSlide2.style.display = 'none';
        freeTrialSlide3.style.display = 'none';
        freeTrialSlider.style.background = "linear-gradient(to right, #FFA815 7%, #1F1F1F 7%)";
    }

    if (freeTrialSlider.value == 1) {
        freeTrialSlide1.style.display = 'none';
        freeTrialSlide2.style.display = 'block';
        freeTrialSlide3.style.display = 'none';
        freeTrialSlider.style.background = "linear-gradient(to right, #FFA815 50%, #1F1F1F 50%";
    }

    if (freeTrialSlider.value == 2) {
        freeTrialSlide1.style.display = 'none';
        freeTrialSlide2.style.display = 'none';
        freeTrialSlide3.style.display = 'block';
        freeTrialSlider.style.background = "#FFA815";
    }
}

/* Plans & pricing */

var freeTrialStandardPlanPrice = document.getElementById('free-trial-standard-plan-price');
var freeTrialPremiumPlanPrice = document.getElementById('free-trial-premium-plan-price');

function freeTrialPlansPricingToggle() {
    if (freeTrialStandardPlanPrice.innerHTML === "10-day free trial<br>then 19,00 US$/month, billed monthly") {
        freeTrialStandardPlanPrice.innerHTML = "10-day free trial<br>then 13,25 US$/month, billed annually (159,00 US$)";
        freeTrialPremiumPlanPrice.innerHTML = "10-day free trial<br>then 19,92 US$/month, billed annually (239,00 US$)";
    } else {
        freeTrialStandardPlanPrice.innerHTML = "10-day free trial<br>then 19,00 US$/month, billed monthly";
        freeTrialPremiumPlanPrice.innerHTML = "10-day free trial<br>then 29,00 US$/month, billed monthly";
    }
}

/* Free-trial FAQ */

$('#question1-btn').click(function () {
    $('#free-trial-answer1').stop(true).fadeToggle();
    if (document.getElementById('faq-arrow1').style.transform == "rotate3d(1, 0, 0, 180deg)") {
        document.getElementById('faq-arrow1').style.transform = "rotate3d(1, 0, 0, 0deg)";
    } else {
        document.getElementById('faq-arrow1').style.transform = "rotate3d(1, 0, 0, 180deg)";
    }
});

$('#question2-btn').click(function () {
    $('#free-trial-answer2').stop(true).fadeToggle();
    if (document.getElementById('faq-arrow2').style.transform == "rotate3d(1, 0, 0, 180deg)") {
        document.getElementById('faq-arrow2').style.transform = "rotate3d(1, 0, 0, 0deg)";
    } else {
        document.getElementById('faq-arrow2').style.transform = "rotate3d(1, 0, 0, 180deg)";
    }
});

$('#question3-btn').click(function () {
    $('#free-trial-answer3').stop(true).fadeToggle();
    if (document.getElementById('faq-arrow3').style.transform == "rotate3d(1, 0, 0, 180deg)") {
        document.getElementById('faq-arrow3').style.transform = "rotate3d(1, 0, 0, 0deg)";
    } else {
        document.getElementById('faq-arrow3').style.transform = "rotate3d(1, 0, 0, 180deg)";
    }
});

$('#question4-btn').click(function () {
    $('#free-trial-answer4').stop(true).fadeToggle();
    if (document.getElementById('faq-arrow4').style.transform == "rotate3d(1, 0, 0, 180deg)") {
        document.getElementById('faq-arrow4').style.transform = "rotate3d(1, 0, 0, 0deg)";
    } else {
        document.getElementById('faq-arrow4').style.transform = "rotate3d(1, 0, 0, 180deg)";
    }
});

$('#question5-btn').click(function () {
    $('#free-trial-answer5').stop(true).fadeToggle();
    if (document.getElementById('faq-arrow5').style.transform == "rotate3d(1, 0, 0, 180deg)") {
        document.getElementById('faq-arrow5').style.transform = "rotate3d(1, 0, 0, 0deg)";
    } else {
        document.getElementById('faq-arrow5').style.transform = "rotate3d(1, 0, 0, 180deg)";
    }
});