/**
 * Taylor Swift API: https://taylor-swift-api.vercel.app/api
 */

document.addEventListener('DOMContentLoaded', () => {
  randomLyrics();
});

async function randomLyrics() {
  try {
    const response = await fetch(
      'https://taylor-swift-api.vercel.app/api/songs/random'
    );
    if (!response.ok) {
      throw new Error(`Error Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    const songAlbum = document.getElementById('song-album')
    const lyricText = document.getElementById('lyric-text');
    songAlbum.textContent = `${data.name} - ${data.album}`;
    lyricText.innerText = `${data.lyrics}`;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// const randomLyrics = () => {
//   fetch('https://taylor-swift-api.vercel.app/api/songs/random')
//     .then((response) => {
//       if (!response.ok) throw new Error(`Error Status: ${response.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       const lyricText = document.getElementById('lyric-text');
//       lyricText.textContent = `${data.name} - ${data.album}: ${data.lyrics}`;
//     })
//     .catch((error) => console.error('Fetch error:', error));
// };

const button = document.getElementById('lyric-button');
button.addEventListener('click', () => randomLyrics());
