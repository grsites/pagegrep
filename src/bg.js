
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSettings")
      sendResponse({settings: localStorage});
    else
      sendResponse({});  
});


chrome.commands.onCommand.addListener(function(command) {
    if (command == "toggle-greppo") {
        chrome.storage.sync.get(['activate'], function(items) {
            chrome.storage.sync.set({'activate': !items['activate']}, function() {});
        });
    }
});

