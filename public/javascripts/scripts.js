var mp3s = [
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "b1",
        "b2",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "b10",
        "b11",
        "b12",
        "b13",
        "b14",
        "b15",
        "b16",
        "b17",
        "b18",
        "b19",
        "b20",
        "b21",
        "b22",
        "b23",
        "b24",
        "b25",
        "b26",
        "b27",
        "b28",
        "b29",
        "b30",
        "b31"
    ],
    sounds = {};

function playRandomSound() {
    var name = mp3s[Math.floor(Math.random() * mp3s.length)];
    console.log('play', name, sounds['mp3'+name]);
    if (sounds['mp3'+name]) {
        console.log('exists', sounds['mp3'+name]);
        sounds['mp3'+name].play();
    } else {
        soundManager.createSound({
            id: 'lala'+name,
            url: '/mp3/'+name+'.mp3',
            autoLoad: true,
            autoPlay: false,
            onload: function() {
                sounds['mp3'+name] = this;
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
        playRandomSound();
    }
});
document.getElementById('play').addEventListener("click", playRandomSound, false);