
( function(window) {

    // Create an object, called 'helloSpeaker' to which you will attach
    // the "speak" method 
    var helloSpeaker = {};

    var speakWord = "Hello";

    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }

    // STEP 5: Expose the 'helloSpeaker' object to the global scope. 
    window.helloSpeaker = helloSpeaker;

})(window);

