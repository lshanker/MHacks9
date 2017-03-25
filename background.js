chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log("TAB CHANGE");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {info : "urlChange"}, function(response) {
    console.log("Content Responded");
  });
});
});
