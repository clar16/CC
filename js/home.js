"use strict";

var ventiBG = document.getElementById("venti-bg");

$( "#start" ).click(function() {
    $( "#venti-bg" ).fadeOut( "slow", function() {
      // Animation complete.
    });
});
