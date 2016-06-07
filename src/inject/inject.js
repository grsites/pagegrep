chrome.runtime.sendMessage({ method : "getSettings" }, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
	    clearInterval(readyStateCheckInterval);
	    var s = response.settings;
	    var col1 = s['store.settings.group1_color'];
            var kw1 = s['store.settings.group1_keywords'].split("\n");
            var myHilitor = new Hilitor("greppo "+col1);
            $.each(kw1, function (index, kw) {
                if (kw.length < 2) return;
                myHilitor.apply(kw);
            });
	}
	}, 10);
});

