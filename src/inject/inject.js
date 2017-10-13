chrome.runtime.sendMessage({ method : "getSettings" }, function(response) {
	var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            var s = response.settings;
            var activate = s['store.settings.activate'];

            if (activate != "on") return;

            var hilitors = {};
            for (var i=1; i<=5; i++) {
                var kw_string = s['store.settings.group'+i+'_keywords'];
                if (kw_string){
                    var keywords = kw_string.split("\n");
                    var col = s['store.settings.group'+i+'_color'];
                    hilitors[i] = new Hilitor("pagegrep "+col);
                    $.each(keywords, function (index, kw) {
                        if (kw.length < 2) return;
                        hilitors[i].apply(kw);
                    });
                }
            }

        }
	}, 10);
});

