/* Config from URL */
const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);

/* DOM */
const container = document.querySelector(".gif");
const img = new Image();

/* Config */
/* example: http://localhost:3000/?twitch=bdougieyo&owner=bdougie&repo=git-twitch */
const twitchTvHandle = searchParams.has("twitch") ? searchParams.get("twitch") : "GitHub";
const repoOwner = searchParams.has("owner") ? searchParams.get("owner") : "bdougie";
const repoName = searchParams.has("repo") ? searchParams.get("repo") : "bdougie/git-twitch";
const PAUSE_DURATION = 30 * 1000; // 30 seconds
const DISPLAY_DURATION = 20 * 1000; // 20 seconds

/* Sound Effects */
const magicChime = new Audio("audio/Magic_Chime.mp3");

// Resolve promise after duration
const wait = async duration => {
    return new Promise(resolve => setTimeout(resolve, duration));
};

ComfyJS.Init(twitchTvHandle);
ComfyJS.onCommand = (user, command, message, flags, extra) => {
console.log(`!${command} was typed in chat`);

    if (flags.broadcaster && command == "pause") {
        // Clear GIF queue and pause for PAUSE_DURATION
        queue.clear();
        queue.pause(PAUSE_DURATION);
    }
};

const queue = new Queue();

ComfyJS.onChat = (user, message, flags, self, extra) => {
    console.log(user + ":", message);
};

// change these commands for personalisation of your channel.
const generateTitle = {
    starred: ` starred ${repoName}!`,
};

// Need to fix the CSS here
function gifAlert(user, gif, audio, type,) {
    queue.add(async () => {
        audio.play();
        container.innerHTML = `
        <marquee><h1 class="text-shadows">${user + generateTitle[type]}</h1>
        <img src="images/heart.gif" />
        `;
        container.style.opacity = 1;

        await wait(DISPLAY_DURATION);

        if (!queue.isLooping) {
        container.style.opacity = 0;
        }
    });
}

