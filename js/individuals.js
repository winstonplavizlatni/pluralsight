/* Overview video */
function showOverviewVideo() {
    document.getElementById('overview1-video').style.display = 'block';
    document.getElementById('overview1-video-bg').style.display = 'block';
    scrollTop = 
            window.pageYOffset || document.documentElement.scrollTop;
          scrollLeft = 
            window.pageXOffset || document.documentElement.scrollLeft,
            window.onscroll = function() {
              window.scrollTo(scrollLeft, scrollTop);
            }
}

function hideOverviewVideo() {
    document.getElementById('overview1-video').style.display = 'none';
    document.getElementById('overview1-video-bg').style.display = 'none';
    window.onscroll = function() {};
}

/* Customer stories video */
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

/* Plans & Pricing Toggle */
function plansPricingToggle() {
  if(document.getElementById('standard-plan-price').innerHTML === "19<sup>US$</sup>") {
    document.getElementById('standard-plan-price').innerHTML = "159<sup>US$</sup>";
    document.getElementById('premium-plan-price').innerHTML = "239<sup>US$</sup>";
  } else {
    document.getElementById('standard-plan-price').innerHTML = "19<sup>US$</sup>";
    document.getElementById('premium-plan-price').innerHTML = "29<sup>US$</sup>";
  }
}