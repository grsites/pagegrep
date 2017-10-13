
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSettings")
      sendResponse({settings: localStorage});
    else
      sendResponse({});  
});


chrome.commands.onCommand.addListener(function(command) {
    if (command == "toggle-pagegrep") {
        activate = localStorage['store.settings.activate'];
        if (activate == "on") activate = "off"
        else activate = "on";
        localStorage['store.settings.activate'] = activate;
    }
});

if (localStorage['store.settings.activate'] == undefined)
    localStorage['store.settings.activate'] = "on";