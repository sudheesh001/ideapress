﻿/*!
	IdeaPress v2.0.1 (Wednesday, June 5, 2013) | ideapress.me/license 
*/

/*
IdeaPress Version 2.0
File: options.js
Author: IdeaNotion
Description: Configures the application and the modules.  Please go to https://github.com/ideanotion/ideapress for how to apply the options
*/
(function () {
    "use strict";

    ideaPress.importModulesAndSetOptions(
        /* import module */
        ["/modules/wordpress/js/wp.module.js", "/modules/wordpressCom/js/wpcom.module.js"],

        function() {
            ideaPress.options = {
                appTitleImage: '/images/title.png',                      // App title image (approx. 600px x 80px)
                appTitle: "Make Web Not War",             // App title text
                cacheTime: 3600000,                       // Global cache time to try fetch   
                mainUrl: "http://www.webnotwar.ca/",        // Main promoting site
                privacyUrl: "http://www.webnotwar.ca/make-web-not-war-windows-8-application-privacy-policy/",      // Privacy URL
                useSnapEffect: true,
                fetchOnPostInit: false,                           //only for selfhosted sites
                modules: [
                    { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "News", typeId: wordpressModule.MOSTRECENT } },
                    { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "Bookmark", typeId: wordpressModule.BOOKMARKS } },
                    { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "Featured", typeId: wordpresscomModule.CATEGORY, categoryId: 530, isHero: true } },
                    { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "Open Data", typeId: wordpresscomModule.CATEGORY, categoryId: 1729, isHero: true } },
                    { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "Events", typeId: wordpresscomModule.CATEGORY, categoryId: 4, isHero: true } },
                    { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "Training &amp; Webcasts", typeId: wordpresscomModule.CATEGORY, categoryId: 350, isHero: true } },
                    { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "Featured", typeId: wordpresscomModule.CATEGORY, categoryId: 530, isHero: true } },
//                    { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "IdeaPress", typeId: wordpresscomModule.CATEGORY, categoryId: 113 } },
//                    { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "Technical", typeId: wordpresscomModule.CATEGORY, categoryId: 7 } },
/*                    { name: wordpresscomModule, options: { siteDomain: 'wordpressmetro.wordpress.com', title: "Pages", typeId: wordpresscomModule.PAGES, pageIds: [2, 9], clientId: '2131', clientSecret: 'b8OEIPyqH113smvoCpgrShM3wakwYALgPOoFUn3X8PA9Y3l2hslQCCKev51VvHsR' } },
                    { name: wordpresscomModule, options: { siteDomain: 'wordpressmetro.wordpress.com', title: "Recent News", typeId: wordpresscomModule.MOSTRECENT, clientId: '2131', clientSecret: 'b8OEIPyqH113smvoCpgrShM3wakwYALgPOoFUn3X8PA9Y3l2hslQCCKev51VvHsR' } },
                    { name: wordpresscomModule, options: { siteDomain: 'wordpressmetro.wordpress.com', title: "Tech", typeId: wordpresscomModule.CATEGORY, categoryId: "tech", clientId: '2131', clientSecret: 'b8OEIPyqH113smvoCpgrShM3wakwYALgPOoFUn3X8PA9Y3l2hslQCCKev51VvHsR' } },
                    { name: wordpresscomModule, options: { siteDomain: 'wordpressmetro.wordpress.com', title: "Bookmark", typeId: wordpresscomModule.BOOKMARKS, clientId: '2131', clientSecret: 'b8OEIPyqH113smvoCpgrShM3wakwYALgPOoFUn3X8PA9Y3l2hslQCCKev51VvHsR' } }

                    modules: [{ name: wordpressModule, options: { id: 1, siteDomain:  'http://www.webnotwar.ca', title: 'Recent News', typeId: wordpressModule.MOSTRECENT, showHub: true } },
{ name: wordpressModule, options: { id: 2, siteDomain: 'http://www.webnotwar.ca', title: 'Bookmark', typeId: wordpressModule.BOOKMARKS, showHub: true } },
{ name: wordpressModule, options: { id: 3, siteDomain: 'http://www.webnotwar.ca', title: 'Featured', typeId: wordpressModule.CATEGORY, categoryId: 530, showHub: true } },
{ name: wordpressModule, options: { id: 4, siteDomain: 'http://www.webnotwar.ca', title: 'Open Data', typeId: wordpressModule.CATEGORY, categoryId: 1729, showHub: true } },
{ name: wordpressModule, options: { id: 5, siteDomain: 'http://www.webnotwar.ca', title: 'Events', typeId: wordpressModule.CATEGORY, categoryId: 4, showHub: true } },
{ name: wordpressModule, options: { id: 6, siteDomain: 'http://www.webnotwar.ca', title: 'Training &amp; Webcasts', typeId: wordpressModule.CATEGORY, categoryId: 350, showHub: true } }],


*//*
                    {
                        name: wordpressModule, options: {
                            apiUrl: 'http://www.webnotwar.ca/', title: "Pages", typeId: wordpressModule.PAGES, pageIds: [10542, 10080, 10649, 10075],
                            pages: [{ id: 10542, title: "Tutorials", imgUrl: '/images/pages/10542.png' }
                                , { id: 10080, title: "Open Data", imgUrl: '/images/pages/10080.png' }
                                , { id: 10649, title: "Community", imgUrl: '/images/pages/10649.png' }
                                , { id: 10075, title: "Glossary", imgUrl: '/images/pages/10075.png' }
                            ]
                        }
                    },*/
                ],
                semanticModule: { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "Make Web Not War" } },
                searchModule: { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "Search" } },
                liveTileModule: { name: wordpressModule, options: { apiUrl: 'http://www.webnotwar.ca/', title: "Live Tile", squareTileType: Windows.UI.Notifications.TileTemplateType.tileSquarePeekImageAndText04, wideTileType: Windows.UI.Notifications.TileTemplateType.tileWideImageAndText01 } },
            };
        });
})();
