

var on = true;


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log("TAB CHANGE");
    if(on){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {info : "urlChange"}, function(response) {
    console.log("Content Responded");
        });
      });
    }else{
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {power : "off"}, function(response) {
      console.log("Content Responded");
          });
        });
    }
});

var enable=false;
chrome.browserAction.onClicked.addListener(function (tab) {
 enable = enable ? false : true;
 if(enable){
  //turn on...
  chrome.browserAction.setIcon({ path: '2icon48.png' });
  chrome.browserAction.setBadgeText({ text: 'ON' });
  on = true;
  chrome.tabs.getSelected(null, function(tab) {
  var code = 'window.location.reload();';
  chrome.tabs.executeScript(tab.id, {code: code});
});

 }else{
  //turn off...
  chrome.browserAction.setIcon({ path: 'disable.png'});
    chrome.browserAction.setBadgeText({ text: 'OFF' });
    on = false;
    chrome.tabs.getSelected(null, function(tab) {
  var code = 'window.location.reload();';
  chrome.tabs.executeScript(tab.id, {code: code});
});
 }
});
