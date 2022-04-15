/* Hands-on team trial window */
var teamTrialWindow = document.getElementById('team-trial-window');
var teamTrialWindowBg = document.getElementById('team-trial-window-bg');

function showTeamTrialWindow() {
  teamTrialWindow.style.display = 'block';
  teamTrialWindowBg.style.display = 'block';
  scrollTop = 
              window.pageYOffset || document.documentElement.scrollTop;
            scrollLeft = 
              window.pageXOffset || document.documentElement.scrollLeft,
              window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
              }
}

function hideTeamTrialWindow() {
  teamTrialWindow.style.display = 'none';
  teamTrialWindowBg.style.display = 'none';
  window.onscroll = function() {};
}

/* Hands-on team trial window subs */
var teamTrialSubsNum = 10;

function trialWindowSubsMinus() {
  if(teamTrialSubsNum > 0) {
    teamTrialSubsNum = teamTrialSubsNum - 1;
    document.getElementById('team-trial-subs').innerHTML = teamTrialSubsNum;
  }
}

function trialWindowSubsPlus() {
  if(teamTrialSubsNum < 10) {
    teamTrialSubsNum = teamTrialSubsNum + 1;
    document.getElementById('team-trial-subs').innerHTML = teamTrialSubsNum;
  }
}

/* Hands-on demo video */
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