﻿$(function () {
    //Add datetime picker for all fields marked up with the relevant .date class
    $("#main-content input.date").datetimepicker({ dateFormat: 'yy-mm-dd' });

    //Make our links look fancy with jQuery UI buttons
    $("#main-content input[type=submit], #main-content a:not(.no-button):not(table[id^=recaptcha] a), #main-content button")
        .button();

    //Add the helper tooltip for form input fields
    if ($(window).width() >= 768) {
        $("#main-content form:not(.no-tooltip) [title]:not(.no-tooltip [title])").toolstooltip({ position: "center right" });
    }

    //Add pretty dividers to the relevant articles. We could use a CSS :last-child attribute for this, but it will not work in as many browsers
    $("<hr class='separator' />")
        .insertAfter("#main-content .box article:not(:last-of-type)");

    //HACK - Wait 3 seconds till showing the social buttons...
    //They seem to take an age to load, so why not hide them till they're all visible (hopefully 3 seconds is enough)
    //Thanks to http://www.noamdesign.com/3-ways-to-integrate-social-media/ for the idea
    setTimeout(function () {
        $("#social").show();
    }, 3000);
});