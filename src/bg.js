
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSettings")
      sendResponse({settings: localStorage});
    else
      sendResponse({});
});

chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
    if (command == "toggle-greppo") {
        console.log('Command:', command);
    }
});

