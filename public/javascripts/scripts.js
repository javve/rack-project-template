var sounds = {};

function playSound(nr) {
    nr = nr || Math.floor(Math.random()*42) + 1;
    hash.add({ quote: nr });
    var name = 'mp3'+nr;
    if (sounds[name]) {
        sounds[name].play();
    } else {
        soundManager.createSound({
            id: name,
            url: 'mp3/'+nr+'.mp3',
            autoLoad: true,
            autoPlay: false,
            onload: function() {
                sounds[name] = this;
                this.play();
            },
            volume: 50
        });
    }
}

soundManager.setup({
    url: '/swf/',
    flashVersion: 9, // optional: shiny features (default = 8)
    useFlashBlock: false, // optionally, enable when you're ready to dive in
    /**
    * read up on HTML5 audio support, if you're feeling adventurous.
    * iPad/iPhone and devices without flash installed will always attempt to use it.
    */
    onready: function() {
        var nr = hash.get('quote') || 12;
        playSound(nr);
    }
});
document.getElementById('play').addEventListener("click", function() {
    playSound();
}, false);