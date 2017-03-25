console.log("Content page log");

//Send a one time message to the background page
chrome.runtime.sendMessage({greeting: "hello from the content side"}, function(response){
  console.log(response.farewell);
})
