var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "720",
                    "DialogWidth": "1020"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "661",
                    "ToolBoxButtonY": "28",
                    "pressToMoveHelp": "false",
                    "showToolbox": "false"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///media/Datos/wallpapers/Otto.png"
                },
                "/Wallpaper/org.kde.latte.slideshow/General": {
                    "Image": "file:///media/Datos/wallpapers/cameron-venti-871I9SM4UBs-unsplash.jpg",
                    "SlideInterval": "15",
                    "SlidePaths": "/home/jorge/.local/share/wallpapers,/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "525",
                            "DialogWidth": "882"
                        },
                        "/Configuration/General": {
                            "containmentType": "Plasma",
                            "lengthFirstMargin": "4",
                            "lengthLastMargin": "4",
                            "showIcon": "false"
                        }
                    },
                    "plugin": "org.kde.windowtitle"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "length": "1402"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "35"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Appearance": {
                            "customDateFormat": "ddd ",
                            "customSpacing": "0.3125",
                            "dateFormat": "customDate",
                            "enabledCalendarPlugins": "/usr/lib/qt5/plugins/plasmacalendarplugins/holidaysevents.so",
                            "fixedFont": "true",
                            "fontFamily": "SFNS Display",
                            "fontSize": "18",
                            "showSeparator": "false",
                            "use24hFormat": "2"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        }
                    },
                    "plugin": "org.kde.plasma.chiliclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "length": "5"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "79",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.75,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 120,
            "minimumLength": 120,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
