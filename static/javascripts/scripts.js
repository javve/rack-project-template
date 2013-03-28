var sounds = {},
    playBtn = document.getElementById('play'),
    numberOfQuotes = 38,
    currentPlaying = "",
    quotes = [
        { link:"do-not-make-friends", quote: "We're not here to make friends, we are not saving the fucking manatees here guys." },
        { link:"your-friends-are-shit", quote: "Your friends are shit. You tell em you made 25 grand last month they're not gonna fucking believe you. Fuck them! Fuck 'em!" },
        { link:"fuck-you-mom-and-dad", quote: "Parents don't like the life you lead. Fuck your mom and dad." },
        { link:"dont-waste-my-fucking-time", quote: "But if you really want this, you call me on Monday and we'll talk. Just don't waste my fucking time." },
        { link:"coffee-is-for-closers-only", quote: "Put that coffee down. Coffee's for closers only." },
        { link:"your-fired", quote: "I don't have to listen to this shit. -- You certainly don't pal.'Cause the good news is -- you're fired." },
        { link:"sales-contest", quote: "This months sales contest. First prize is a Cadillac Eldorado. Second prize's a set of steak knives. Third prize is you're fired." },
        { link:"you-got-leads", quote: "You got leads. Mitch and Murray paid good money. Get their names to sell them!" },
        { link:"you-cant-close-shit", quote: "You can't close the leads you're given, you can't close shit, you ARE shit, hit the bricks pal and beat it 'cause you are going out!" },
        { link:"fuck-you-thats-my-name", quote: "FUCK YOU, that's my name!! You know why, Mister? 'Cause you drove a Hyundai to get here tonight, I drove a $80 000 BMW. That's my name!" },
        { link:"only-one-thing-counts-in-this-life", quote: "Because only one thing counts in this life! Get them to sign on the line which is dotted! You hear me, you fucking faggots?" },
        { link:"abc-always-be-closing", quote: "A-B-C. A-always, B-be, C-closing. Always be closing! Always be closing!" },
        { link:"get-out-of-the-rain", quote: "A-I-D-A; get out there!! You got the prospects comin' in; you think they came in to get out of the rain?" },
        { link:"that-watch-cost-more-than-your-car", quote: "You see this watch? You see this watch? That watch cost more than your car." },
        { link:"good-father-fuck-you", quote: "Good father? Fuck you -- go home and play with your kids! You wanna work here? Close!" },
        { link:"fifteen-thousand-dollars", quote: "I can go out there tonight with the materials you got, make myself fifteen thousand dollars! Tonight! In two hours! Can you?" },
        { link:"a-sell-is-mad", quote: "A sell is made. The only question is: who's gonna close? You or him?" },
        { link:"money-problems", quote: "Somebody tells you they money problems about buyin 200 shares is lying to you." },
        { link:"become-a-millionaire", quote: "There's no question as to whether you become a millionaire working here. The only question is, how many times over." },
        { link:"first-million", quote: "Become an employee of this firm, you will make your first million within 3 years." },
        { link:"i-am-a-fucking-millionair", quote: "I am a fucking millionaire. And guess how old I am...27, you know what that makes me here? A fucking senior citizen." },
        { link:"call-me-tomorrow", quote: "Guy says call me tommorrow? Bullshit!" },
        { link:"dead-fucking-serious", quote: "If you can't learn how to close, you better start thinkin about another career. And I am deadly serious about that. Dead fuckin serious." },
        { link:"money-hungry", quote: "Now you all look money hungry and that's good." },
        { link:"root-of-all-evil", quote: "Anybody who tells you that money is the root of all evil, doesn't fucking have any." },
        { link:"they-say-money-cant-buy-happiness", quote: "They say money can't buy happiness. Look at the fucking smile on my face!" },
        { link:"i-drive-a-ferrari", quote: "I drive a Ferrari 355 Cabriolet. What's up?" },
        { link:"required-to-work-your-fucking-ass-off", quote: "You are required to work your fucking ass off at this firm. We want winners here, not pikers." },
        { link:"vacation-time", quote: "A Piker asks how much vacation time you get in the first year. You want vacation time, go teach third grade at a public school." },
        { link:"become-filthy-rich", quote: "People come to work at this firm for one reason, to become filthy rich, that's it." },
        { link:"learn-how-to-push", quote: "You have to be closing all the time. And be aggressive, learn how to push!" },
        { link:"get-on-the-phone", quote: "So get on the phones, it's time to get to work. Get off your ass!" },
        { link:"just-get-a-yes", quote: "Talk to 'em. Ask 'em questions... ask 'em rhetorical questions, it doesn't matter, anything, just get a yes out of 'em." },
        { link:"if-you-are-drowning", quote: "If you're drowning and I throw you a life jacket would you grab it? Yes! Good. Pick up 200 shares I won't let you down." },
        { link:"thrity-fourty-precent-returns", quote: "Ask them how they'd like to see thirty, forty percent returns. What are they gonna say, no? Fuck you?" },
        { link:"think-about-another-career", quote: "If you can't learn how to close, you better start thinkin about another career. And I am deadly serious about that. Dead fuckin serious." },
        { link:"no-such-thing-as-a-no-sell-call", quote: "And there is no such thing as a no-sell call." },
        { link:"a-sell-is-made-on-every-call", quote: "A sell is made on every call you make. Either you sell the client some stock, or he sells you on a reason he can't." }
    ];


function playSound(link) {
    var quote;
    for (var i = 0; i < quotes.length; i++) {
        if (quotes[i].link == link) {
            quote = quotes[i];
            quote.index = i+1;
            break;
        }
    }

    if (currentPlaying) {
        soundManager.stop(currentPlaying);
    }
    document.getElementById('quote-text').innerHTML = quote.quote;
    currentPlaying = quote;

    if (sounds[currentPlaying.link]) {
        sounds[currentPlaying.link].play({ onfinish:function() {} });
    } else {
        soundManager.createSound({
            id: currentPlaying.link,
            url: 'https://s3-eu-west-1.amazonaws.com/closingweek/mp3/'+currentPlaying.index+'.mp3',
            autoLoad: true,
            autoPlay: false,
            onload: function() {
                sounds[currentPlaying] = this;
                this.play({ onfinish:function() {} });
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
        playFirstSound();
    }
});
playBtn.addEventListener("click", function() {
    playSound();
}, false);