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