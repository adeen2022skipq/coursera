
(function (window) {
    
    var byeSpeaker = {};

    var speakWord = "Good Bye";

    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }

    // Expose the 'byeSpeaker' object to the global scope. 
    window.byeSpeaker = byeSpeaker;

})(window);

