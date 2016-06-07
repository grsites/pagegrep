console.log("Loaded bg.js");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSettings")
      sendResponse({settings: localStorage});
    else
      sendResponse({}); // snub them.
});

