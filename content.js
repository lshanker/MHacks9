
function get_nonce(){
  return document.getElementById("ttft_boot_data").getAttribute("nonce");
}





var orig_nonce = get_nonce();
var cur_nonce = get_nonce();

var repeat = setInterval(function(){
  cur_nonce = get_nonce();
  console.log(cur_nonce);
  if(orig_nonce==cur_nonce){
    orig_nonce = cur_nonce;
    var el = document.getElementsByClassName( 'Tombstone' );
    for(i =0; i<el.length; i++){
        el[i].parentNode.parentNode.style.display = 'none';
    }
  }
}, 500);


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
    if(request.power!=null && request.power == 'off'){
      clearInterval(repeat);
    }
  });
