const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

function playTrack(trackId) {
    const template = `<iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
`
    document.querySelector('#artist').innerHTML = 
    template
}

async function getTracks (term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    const response = await fetch(url);
    const trackData = await response.json();
    console.log(trackData);
    document.querySelector('#tracks').innerHTML = '';

    for (i = 0; i < 5; i++) {
        const display = trackData[i];

        const template = `<section class="track-item preview" onclick="playTrack('${display.id}')">
                <img src="${display.album.image_url}" alt='${display.name} Album Cover'>
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2>${display.name}</h2>
                    <p>
                    ${display.artist.name}
                    </p>
                </div>
            </section>`

        // if (display.artist.name.includes(term)) {
            document.querySelector('#tracks').insertAdjacentHTML(
                'beforeend', template
            )
        // }
    }
}

async function getAlbums (term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    const response = await fetch(url);
    const albumData = await response.json();
    console.log(albumData);

    document.querySelector('#albums').innerHTML = '';

    for (i = 0; i < albumData.length; i++) {
        const album = albumData[i]
        const template = `<section class="album-card" id="${album.id}">
                <div>
                    <img src="${album.image_url}" alt='${album.name} cover'>
                    <h2>${album.name}</h2>
                    <div class="footer">
                        <a href="${album.spotify_url}" target="_blank">
                            view on spotify
                        </a>
                    </div>
                </div>
            </section>`

        document.querySelector('#albums').insertAdjacentHTML(
                'beforeend', template
        )
    };
}

async function getArtist (term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`
    const response = await fetch(url);
    const artistData = await response.json();
    console.log(artistData);
    const artist = artistData[0];

    const template = `<section class="artist-card" id="${artist.id}">
            <div>
                <img src="${artist.image_url}" alt='image of ${artist.name}'>
                <h2>${artist.name}</h2>
                <div class="footer">
                    <a href="${artist.spotify_url}" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
        </section>`;
    document.querySelector('#artist').innerHTML = template
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};