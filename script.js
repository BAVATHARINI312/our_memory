
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

// Music control
function toggleMusic() {
    if (!music) {
        alert("Music player not found!");
        return;
    }

    if (music.paused) {
        music.play()
            .then(() => {
                musicButton.textContent = "♫ Pause Music";
            })
            .catch(error => {
                alert("Music could not play. Check your love.mp3 file.");
                console.log(error);
            });
    } else {
        music.pause();
        musicButton.textContent = "♫ Play Music";
    }
}

// Password protection
function checkPassword() {
    const password = document.getElementById("secretPassword").value;
    const message = document.getElementById("passwordMessage");
    const storyLink = document.getElementById("storyLink");

    if (password === "ama") {
        message.textContent = "Welcome to our little memories ♡";
        storyLink.hidden = false;
    } else {
        message.textContent = "Not quite! Try again ♡";
        storyLink.hidden = true;
    }
}
