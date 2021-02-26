/* DOM */
const container = document.querySelector(".gif");
const img = new Image();

/* Config */
const twitchTvHandle = "GitHub";
const repoOwner = "MishManners";
const repoName = "MishManners/Git-Twitch";
const PAUSE_DURATION = 30 * 1000; // 30 seconds
const DISPLAY_DURATION = 10 * 1000; // 10 seconds

/* GIFs */
const beyGif = "https://media.giphy.com/media/VxkNDa92gcsRq/giphy.gif";
const welcomeGif = "https://media.giphy.com/media/l3V0doGbp2EDaLHJC/giphy.gif";
const pizzaGif = "https://media.giphy.com/media/3o6nUXaNE4wdhq8Foc/giphy.gif";
const bdougie = "https://media.giphy.com/media/LT1Pq74cXuNQxyUmLk/giphy.gif";

/* Sound Effects */
const pewAudio = new Audio("horn.wav");
const magicChime = new Audio("Magic_Chime.mp3");
const flexPhrase = new Audio("flex.mp3");

// Resolve promise after duration
const wait = async duration => {
    return new Promise(resolve => setTimeout(resolve, duration));
};

ComfyJS.Init(twitchTvHandle);
ComfyJS.onCommand = (user, command, message, flags, extra) => {
console.log(`!${command} was typed in chat`);

if (command == "yo") {
    new gifAlert(user, beyGif, pewAudio, command);
}

if (command == "welcome") {
    new gifAlert(message, welcomeGif, magicChime, command);
}

if (flags.broadcaster && command == "pizza") {
    new gifAlert(message, pizzaGif, magicChime, command);
}

if (command == "flex") {
    new gifAlert(message, bdougie, flexPhrase, command);
}

if (flags.broadcaster && command == "pause") {
    // Clear GIF queue and pause for PAUSE_DURATION
    queue.clear();
    queue.pause(PAUSE_DURATION);
}
};

const queue = new Queue();

/* TODO FIX ME
 ComfyJS.onChat = (user, message, flags, self, extra) => {
    console.log(user + ":", message);
}; */

// change these commands for personalisation of your channel.
const generateTitle = {
    yo: " is hype!",
    welcome: " needs a welcome!",
    pizza: " needed a pizza party!",
    starred: ` starred ${repoName}, like we knew they would!`,
};

// Need to fix the CSS here
function gifAlert(user, gif, audio_, type,) {
    queue.add(async () => {
        // audio.play();
        container.innerHTML = `
        <h1 class="text-shadows">${user + generateTitle[type]}</h1>
        <img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" />
        `;
        container.style.opacity = 1;

        await wait(DISPLAY_DURATION);

        if (!queue.isLooping) {
        container.style.opacity = 0;
        }
    });
}
