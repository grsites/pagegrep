chrome.runtime.sendMessage({ method : "getSettings" }, function(response) {
	var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            var s = response.settings;
            var activate = s['store.settings.activate'];

            if (activate != "on") return;

            var col1 = s['store.settings.group1_color'];
            if (s['store.settings.group1_keywords']){
                var kw1 = s['store.settings.group1_keywords'].split("\n");
                var myHilitor1 = new Hilitor("greppo "+col1);
                $.each(kw1, function (index, kw) {
                    if (kw.length < 2) return;
                    myHilitor1.apply(kw);
                });
            }

            var col2 = s['store.settings.group2_color'];
            if (s['store.settings.group2_keywords']){
                var kw2 = s['store.settings.group2_keywords'].split("\n");
                var myHilitor2 = new Hilitor("greppo "+col2);
                $.each(kw2, function (index, kw) {
                    if (kw.length < 2) return;
                    myHilitor2.apply(kw);
                });
            }

            var col3 = s['store.settings.group3_color'];
            if (s['store.settings.group3_keywords']){
                var kw3 = s['store.settings.group3_keywords'].split("\n");
                var myHilitor3 = new Hilitor("greppo "+col3);
                $.each(kw3, function (index, kw) {
                    if (kw.length < 2) return;
                    myHilitor3.apply(kw);
                });
            }

            var col4 = s['store.settings.group4_color'];
            if (s['store.settings.group4_keywords']){
                var kw4 = s['store.settings.group4_keywords'].split("\n");
                var myHilitor4 = new Hilitor("greppo "+col4);
                $.each(kw4, function (index, kw) {
                    if (kw.length < 2) return;
                    myHilitor4.apply(kw);
                });
            }

            var col5 = s['store.settings.group5_color'];
            if (s['store.settings.group5_keywords']){
                var kw5 = s['store.settings.group5_keywords'].split("\n");
                var myHilitor5 = new Hilitor("greppo "+col5);
                $.each(kw5, function (index, kw) {
                    if (kw.length < 2) return;
                    myHilitor5.apply(kw);
                });
            }
                
        }
	}, 10);
});

