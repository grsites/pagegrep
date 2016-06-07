this.manifest = {
    "name": "Greppo",
    "icon": "../../icons/icon128.png",
    "settings": [
        {
            "tab": "Settings",
            "group": "Keyboard Shortcut",
            "name": "shortcut_modifier",
            "type": "popupButton",
            "label": "Modifier:",
            "options": {
                "values": [
                    {
                        "value": "control-shift",
                        "text": "Control-Shift",
                    },
                    {
                        "value": "control-alt",
                        "text": "Control-Alt",
                    }		    
                ],
            }
        },

        {
            "tab": "Settings",
            "group": "Keyboard Shortcut",
            "name": "shortcut_key",
            "type": "popupButton",
            "label": "Key:",
            "options": {
                "values": [
                    {
                        "value": "a",
                        "text": "A",
                    },
                    {
                        "value": "g",
                        "text": "G",
                    },
                ],
            }
        },

        {
            "tab": "Settings",
            "group": "Activate",
            "name": "activate",
            "type": "radioButtons",
            "label": "Enable text highlights for all new tabs:",
            "options":  [
		{"text": "On", "value": "on"},
		{"text": "Off", "value": "off"},
	    ]
        },
        
        
        {
            "tab": "Keywords",
            "group": "Group 1",
            "name": "group1_color",
            "type": "radioButtons",
            "label": "Highlight Color:",
            "options":  [
		{"text": "Red", "value": "red", "class": "red color_swatch"},
		{"text": "Green", "value": "green", "class": "green color_swatch"},
		{"text": "Blue", "value": "blue", "class": "blue color_swatch"},
		{"text": "Yellow", "value": "yellow", "class": "yellow color_swatch"},
		{"text": "Orange", "value": "orange", "class": "orange color_swatch"}
	    ]
        },
        {
            "tab": "Keywords",
            "group": "Group 1",
            "name": "group1_keywords",
            "type": "textarea",
            "label": "List of keywords (one per line):"
        },
        
        {
            "tab": "Keywords",
            "group": "Group 2",
            "name": "group2_color",
            "type": "radioButtons",
            "label": "Highlight Color:",
            "options":  [
		{"text": "Red", "value": "red", "class": "red color_swatch"},
		{"text": "Green", "value": "green", "class": "green color_swatch"},
		{"text": "Blue", "value": "blue", "class": "blue color_swatch"},
		{"text": "Yellow", "value": "yellow", "class": "yellow color_swatch"},
		{"text": "Orange", "value": "orange", "class": "orange color_swatch"}
	    ]
        },
        {
            "tab": "Keywords",
            "group": "Group 2",
            "name": "group2_keywords",
            "type": "textarea",
            "label": "List of keywords (one per line):"
        },
        
        {
            "tab": "Keywords",
            "group": "Group 3",
            "name": "group3_color",
            "type": "radioButtons",
            "label": "Highlight Color:",
            "options":  [
		{"text": "Red", "value": "red", "class": "red color_swatch"},
		{"text": "Green", "value": "green", "class": "green color_swatch"},
		{"text": "Blue", "value": "blue", "class": "blue color_swatch"},
		{"text": "Yellow", "value": "yellow", "class": "yellow color_swatch"},
		{"text": "Orange", "value": "orange", "class": "orange color_swatch"}
	    ]
        },
        {
            "tab": "Keywords",
            "group": "Group 3",
            "name": "group3_keywords",
            "type": "textarea",
            "label": "List of keywords (one per line):"
        },
        
        {
            "tab": "Keywords",
            "group": "Group 4",
            "name": "group4_color",
            "type": "radioButtons",
            "label": "Highlight Color:",
            "options":  [
		{"text": "Red", "value": "red", "class": "red color_swatch"},
		{"text": "Green", "value": "green", "class": "green color_swatch"},
		{"text": "Blue", "value": "blue", "class": "blue color_swatch"},
		{"text": "Yellow", "value": "yellow", "class": "yellow color_swatch"},
		{"text": "Orange", "value": "orange", "class": "orange color_swatch"}
	    ]
        },
        {
            "tab": "Keywords",
            "group": "Group 4",
            "name": "group4_keywords",
            "type": "textarea",
            "label": "List of keywords (one per line):"
        },
        
        {
            "tab": "Keywords",
            "group": "Group 5",
            "name": "group5_color",
            "type": "radioButtons",
            "label": "Highlight Color:",
            "options":  [
		{"text": "Red", "value": "red", "class": "red color_swatch"},
		{"text": "Green", "value": "green", "class": "green color_swatch"},
		{"text": "Blue", "value": "blue", "class": "blue color_swatch"},
		{"text": "Yellow", "value": "yellow", "class": "yellow color_swatch"},
		{"text": "Orange", "value": "orange", "class": "orange color_swatch"}
	    ]
        },
        {
            "tab": "Keywords",
            "group": "Group 5",
            "name": "group5_keywords",
            "type": "textarea",
            "label": "List of keywords (one per line):"
        }
        
    ],
    "alignment": [
        [
            "shortcut_modifier",
            "shortcut_key"
        ]
    ]    
};
