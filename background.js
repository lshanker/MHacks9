chrome.runtime.onInstalled.addListener(function(){
  console.log("Background page log");

  chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "hello from a content script!:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello from the content side")
      sendResponse({farewell: "goodbye from the background side"});
  });
  });
/*
  //Send a one time message to the content page and handle the response
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response){
      consolse.log(response.farewell);
    });
  });
});


*/
