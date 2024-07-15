// open in new tab setting
document.addEventListener('DOMContentLoaded', () => {
    function cookie(name, value = null, days = null) {
        if (value !== null) {
            let expires = "";
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        } else {
            let cookieArr = document.cookie.split(';');
            for (let i = 0; i < cookieArr.length; i++) {
                let cookiePair = cookieArr[i].split('=');
                if (name === cookiePair[0].trim()) {
                    return decodeURIComponent(cookiePair[1]);
                }
            }
            return null;
        }
    }

    let openBlankCookie = cookie('open-blank');
    if (openBlankCookie === null) {
        openBlankCookie = 'true';
        cookie('open-blank', openBlankCookie, 365);
    }

    if (openBlankCookie === 'false') {
        let anchorTags = document.querySelectorAll('a[target="_blank"]');
        
        anchorTags.forEach(anchor => {
            anchor.removeAttribute('target');
        });
    }
});

// search bar
function filterGames() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const buttons = document.querySelectorAll('.button h2');

    buttons.forEach(button => {
        const gameName = button.textContent.toLowerCase();
        const buttonContainer = button.parentElement.parentElement;

        if (gameName.includes(searchInput)) {
            buttonContainer.style.display = 'block'; 
        } else {
            buttonContainer.style.display = 'none';
        }
    });
}

document.getElementById('search').addEventListener('input', filterGames);

// genre filtering
const genreDropdown = document.getElementById('genreDropdown');

genreDropdown.addEventListener('change', () => {
    const selectedGenre = genreDropdown.value;
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        const dataGenre = button.getAttribute('data-genre');
        
        if (selectedGenre === 'all' || selectedGenre === dataGenre) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
});

genreDropdown.value = 'all';

// cool typing
const text = "games";
const typingDelay = 500; 
const initialDelay = 100; 
const cursor = document.getElementById("cursor");
const h1 = document.querySelector(".typewriter");

function type() {
setTimeout(() => {
    for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
        h1.textContent += text[i];
        if (i === text.length - 1) {
        cursor.style.display = "none"; 
        }
    }, i * typingDelay);
    }
}, initialDelay);
}

type();

// open in blank tab
document.addEventListener('DOMContentLoaded', function() {
    var openBlankLink = document.getElementById('openBlankLink');

    openBlankLink.addEventListener('click', function(event) {
        event.preventDefault();

        var newTab = window.open('about:blank', '_blank');

        if (newTab) {
            var newTabBody = newTab.document.body;
            newTabBody.style.padding = '0';
            newTabBody.style.margin = '0';
            newTabBody.style.border = 'hidden';

            var iframe = document.createElement('iframe');
            iframe.src = window.location.href;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'hidden';

            iframe.onload = function() {
                var links = iframe.contentDocument.querySelectorAll('a[target="_blank"]');
                links.forEach(function(link) {
                    link.addEventListener('click', function(event) {
                        event.preventDefault();
                        iframe.contentWindow.location.href = link.href;
                    });
                });
            };

            newTab.document.body.appendChild(iframe);
        } else {
            alert("couldn't manage to open a new tab :(");
        }
    });
}); 

// favouritng games
document.addEventListener("DOMContentLoaded", function () {
    const pinButtons = document.querySelectorAll(".pin-button");
    const pinnedContainer = document.querySelector(".pinned-container");
    const pinnedHeader = document.querySelector(".pinned-header");
    const allGamesHeader = document.querySelector(".allgames-header")

    const pinnedGames = JSON.parse(localStorage.getItem("pinnedGames")) || [];

    function updatePinnedUI() {
        if (pinnedGames.length === 0) {
            pinnedContainer.style.display = "none";
            pinnedHeader.style.display = "none";
            allGamesHeader.style.display = "none";
        } else {
            pinnedContainer.style.display = "block";
            pinnedHeader.style.display = "block";
            allGamesHeader.style.display = "block"

            pinnedContainer.innerHTML = "";
            pinnedGames.forEach((game) => {
                const gameLink = document.createElement("a");
                gameLink.href = game.link;
                gameLink.target = "_blank";

                const gameButton = document.createElement("div");
                gameButton.classList.add("button");
                gameButton.style.backgroundImage = `url('${game.thumbnail}')`;
                gameButton.innerHTML = `<h2>${game.name}</h2>`;

                const pinButton = document.createElement("span");
                pinButton.classList.add("pin-button");
                pinButton.innerText = "✖";
                pinButton.addEventListener("click", (event) => {
                    event.preventDefault();
                    unpinGame(game.name);
                });

                gameButton.appendChild(pinButton);
                gameLink.appendChild(gameButton);
                pinnedContainer.appendChild(gameLink);
            });
        }
    }

    function pinGame(name, thumbnail, link) {
        const isAlreadyPinned = pinnedGames.some((game) => game.name === name);
        if (!isAlreadyPinned) {
            pinnedGames.push({ name, thumbnail, link });
            localStorage.setItem("pinnedGames", JSON.stringify(pinnedGames));
            updatePinnedUI();
        }
    }

    function unpinGame(name) {
        const index = pinnedGames.findIndex((game) => game.name === name);
        if (index !== -1) {
            pinnedGames.splice(index, 1);
            localStorage.setItem("pinnedGames", JSON.stringify(pinnedGames));
            updatePinnedUI();
        }
    }

    pinButtons.forEach((pinButton, index) => {
        pinButton.addEventListener("click", (event) => {
            event.preventDefault();
            const gameDiv = pinButton.closest(".button");
            const thumbnail = gameDiv.style.backgroundImage
                .replace('url("', '')
                .replace('")', '');
            const name = gameDiv.querySelector("h2").textContent;
            const link = gameDiv.parentElement.href; 
            pinGame(name, thumbnail, link);
        });
    });
    updatePinnedUI();
});

// downloading handler
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.download-button').forEach(button => {
        button.addEventListener('click', handleDownloadClick);
    });
});

function handleDownloadClick(event) {
    event.preventDefault(); 
    const gameButton = event.target.closest('.button');
    const gameName = gameButton.querySelector('h2').textContent;
    const gameDirectory = gameButton.closest('a').getAttribute('href');
    showConfirmationPrompt(gameName, gameDirectory, gameButton.style.backgroundImage);
}

function showConfirmationPrompt(gameName, gameDirectory) {
    const blackoutDiv = document.createElement('div');
    blackoutDiv.classList.add('blackout');
    
    const promptDiv = document.createElement('div');
    promptDiv.classList.add('confirmation-prompt');
    promptDiv.innerHTML = `
        <div class="prompt-content">
            <h2>download game</h2>
            <p>would you like to download ${gameName}? you'll be able to load this game when you don't have an internet connection.</p>
            <button id="confirm-yes">yes</button>
            <button id="confirm-no">no</button>
        </div>
    `;

    document.body.appendChild(blackoutDiv);
    document.body.appendChild(promptDiv);

    document.getElementById('confirm-yes').addEventListener('click', () => {
        promptDiv.querySelector('p').textContent = `downloading ${gameName}. speeds vary depending on the game size and your internet connection.`;
        promptDiv.querySelector('#confirm-yes').remove();
        promptDiv.querySelector('#confirm-no').remove();
        downloadGameFiles(gameName, gameDirectory, promptDiv, blackoutDiv);
    });

    document.getElementById('confirm-no').addEventListener('click', () => {
        document.body.removeChild(blackoutDiv);
        document.body.removeChild(promptDiv);
    });
}
async function downloadGameFiles(gameName, gameDirectory, promptDiv, blackoutDiv) {
    try {
        const response = await fetch('/storage/js/directorylist.json'); // Adjust the path as needed
        if (!response.ok) {
            throw new Error('failed to fetch list');
        }

        const directoryList = await response.json();
        const gameData = directoryList[gameDirectory];
        if (!gameData || !gameData.files) {
            throw new Error('no files found for');
        }

        const files = gameData.files;
        const cache = await caches.open('game-cache');

        for (const file of files) {
            const fileResponse = await fetch(file);
            await cache.put(file, fileResponse.clone());
        }

        const thumbnailUrl = gameData.thumbnail;
        const thumbnailResponse = await fetch(thumbnailUrl);
        await cache.put(thumbnailUrl, thumbnailResponse.clone());

        saveGameToLocal({
            name: gameName,
            directory: gameDirectory,
            thumbnail: thumbnailUrl
        });

        promptDiv.querySelector('p').textContent = `${gameName} has finished downloading! you can now access this game locally by opening the site without an internet connection.`;
        const closeButton = document.createElement('button');
        closeButton.textContent = 'okay';
        closeButton.addEventListener('click', () => {
            document.body.removeChild(blackoutDiv);
            document.body.removeChild(promptDiv);
        });
        promptDiv.appendChild(closeButton);
    } catch (error) {
        console.error('Error downloading game files:', error);
        promptDiv.querySelector('p').textContent = `there was an error trying to download ${gameName}. try again later, or report the issue to github/discord.`;
        const closeButton = document.createElement('button');
        closeButton.textContent = 'close';
        closeButton.addEventListener('click', () => {
            document.body.removeChild(blackoutDiv);
            document.body.removeChild(promptDiv);
        });
        promptDiv.appendChild(closeButton);
    }
}

function saveGameToLocal(gameData) {
    const games = JSON.parse(localStorage.getItem('downloadedGames')) || [];
    games.push(gameData);
    localStorage.setItem('downloadedGames', JSON.stringify(games));
}