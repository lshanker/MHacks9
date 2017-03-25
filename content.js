
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
                console.log("Content Has Recieved Message " + request.info)
    if (request.info == "urlChange"){
      var el = document.getElementsByClassName( 'Tombstone' );
        for(i =0; i<el.length; i++){
          el[i].parentNode.style.display = 'none';
        }
    }
  });
