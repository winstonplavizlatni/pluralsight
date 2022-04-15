/* This is not a test video */
function showCsVideo() {
    document.getElementById('customer-stories-video').style.display = 'block';
    document.getElementById('customer-stories-video-bg').style.display = 'block';
    scrollTop = 
              window.pageYOffset || document.documentElement.scrollTop;
            scrollLeft = 
              window.pageXOffset || document.documentElement.scrollLeft,
              window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
              }
}

function hideCsVideo() {
    document.getElementById('customer-stories-video').style.display = 'none';
    document.getElementById('customer-stories-video-bg').style.display = 'none';
    window.onscroll = function() {};
}

/* ---------------- Skill-iq courses ---------------- */

var allList = document.getElementById('skill-iq-courses-list1');
var devList = document.getElementById('skill-iq-courses-list2');
var itopsList = document.getElementById('skill-iq-courses-list3');
var creativeList = document.getElementById('skill-iq-courses-list4');
var securityList = document.getElementById('skill-iq-courses-list5');
var conferencesList = document.getElementById('skill-iq-courses-list6');

var allListBtn = document.getElementById('skill-iq-list-btn-all');
var devListBtn = document.getElementById('skill-iq-list-btn-dev');
var itopsListBtn = document.getElementById('skill-iq-list-btn-itops');
var creativeListBtn = document.getElementById('skill-iq-list-btn-creative');
var securityListBtn = document.getElementById('skill-iq-list-btn-security');
var conferencesListBtn = document.getElementById('skill-iq-list-btn-conferences');

/* All list */
function allListFunction() {
    allList.style.display = "block";
    devList.style.display = "none";
    itopsList.style.display = "none";
    creativeList.style.display = "none";
    securityList.style.display = "none";
    conferencesList.style.display = "none";

    allListBtn.classList.add("skill-iq-active");
    devListBtn.classList.remove("skill-iq-active");
    itopsListBtn.classList.remove("skill-iq-active");
    creativeListBtn.classList.remove("skill-iq-active");
    securityListBtn.classList.remove("skill-iq-active");
    conferencesListBtn.classList.remove("skill-iq-active");
}

/* Development list */
function devListFunction() {
    allList.style.display = "none";
    devList.style.display = "block";
    itopsList.style.display = "none";
    creativeList.style.display = "none";
    securityList.style.display = "none";
    conferencesList.style.display = "none";

    allListBtn.classList.remove("skill-iq-active");
    devListBtn.classList.add("skill-iq-active");
    itopsListBtn.classList.remove("skill-iq-active");
    creativeListBtn.classList.remove("skill-iq-active");
    securityListBtn.classList.remove("skill-iq-active");
    conferencesListBtn.classList.remove("skill-iq-active");
}

/* It ops list */

function itopsListFunction() {
    allList.style.display = "none";
    devList.style.display = "none";
    itopsList.style.display = "block";
    creativeList.style.display = "none";
    securityList.style.display = "none";
    conferencesList.style.display = "none";

    allListBtn.classList.remove("skill-iq-active");
    devListBtn.classList.remove("skill-iq-active");
    itopsListBtn.classList.add("skill-iq-active");
    creativeListBtn.classList.remove("skill-iq-active");
    securityListBtn.classList.remove("skill-iq-active");
    conferencesListBtn.classList.remove("skill-iq-active");
}

/* Creative list */

function creativeListFunction() {
    allList.style.display = "none";
    devList.style.display = "none";
    itopsList.style.display = "none";
    creativeList.style.display = "block";
    securityList.style.display = "none";
    conferencesList.style.display = "none";

    allListBtn.classList.remove("skill-iq-active");
    devListBtn.classList.remove("skill-iq-active");
    itopsListBtn.classList.remove("skill-iq-active");
    creativeListBtn.classList.add("skill-iq-active");
    securityListBtn.classList.remove("skill-iq-active");
    conferencesListBtn.classList.remove("skill-iq-active");
}

/* Security list */

function securityListFunction() {
    allList.style.display = "none";
    devList.style.display = "none";
    itopsList.style.display = "none";
    creativeList.style.display = "none";
    securityList.style.display = "block";
    conferencesList.style.display = "none";

    allListBtn.classList.remove("skill-iq-active");
    devListBtn.classList.remove("skill-iq-active");
    itopsListBtn.classList.remove("skill-iq-active");
    creativeListBtn.classList.remove("skill-iq-active");
    securityListBtn.classList.add("skill-iq-active");
    conferencesListBtn.classList.remove("skill-iq-active");
}

/* Conferences list */

function conferencesListFunction() {
    allList.style.display = "none";
    devList.style.display = "none";
    itopsList.style.display = "none";
    creativeList.style.display = "none";
    securityList.style.display = "none";
    conferencesList.style.display = "block";

    allListBtn.classList.remove("skill-iq-active");
    devListBtn.classList.remove("skill-iq-active");
    itopsListBtn.classList.remove("skill-iq-active");
    creativeListBtn.classList.remove("skill-iq-active");
    securityListBtn.classList.remove("skill-iq-active");
    conferencesListBtn.classList.add("skill-iq-active");
}