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
    document.getElementById('plans-pricing-month-year1').innerHTML = "per year";
    document.getElementById('plans-pricing-month-year2').innerHTML = "per year";
  } else {
    document.getElementById('standard-plan-price').innerHTML = "19<sup>US$</sup>";
    document.getElementById('premium-plan-price').innerHTML = "29<sup>US$</sup>";
    document.getElementById('plans-pricing-month-year1').innerHTML = "per month";
    document.getElementById('plans-pricing-month-year2').innerHTML = "per month";
  }
}

/* Plans & Pricing Toggle - RESPONSIVE */
function plansPricingToggleMobileStandard() {
  if(document.getElementById('standard-plan-price-mobile').innerHTML === "19 US$") {
    document.getElementById('standard-plan-price-mobile').innerHTML = "159 US$";
    document.getElementById('plans-pricing-month-year-mobile1').innerHTML = "per year";
  } else {
    document.getElementById('standard-plan-price-mobile').innerHTML = "19 US$";
    document.getElementById('plans-pricing-month-year-mobile1').innerHTML = "per month";
  }
}

function plansPricingToggleMobilePremium() {
  if(document.getElementById('premium-plan-price-mobile').innerHTML === "29 US$") {
    document.getElementById('premium-plan-price-mobile').innerHTML = "239 US$";
    document.getElementById('plans-pricing-month-year-mobile2').innerHTML = "per year";
  } else {
    document.getElementById('premium-plan-price-mobile').innerHTML = "29 US$";
    document.getElementById('plans-pricing-month-year-mobile2').innerHTML = "per month";
  }
}