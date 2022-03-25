# Demo Music Player

## Intro

This simple **music player** is part of a project to pratice coding with HTML, CSS and JavaScript.

It shows a music player with pre-uploaded songs. It is possible to play, pause, skip previous or next song, tap the progress bar to skip to a specific minute/second, and increase or decrease the volume. 


## Project Notes

**Mp3 audio files** are stored in the `/tracks` folder by their title names with dashes and lowercase words. It is possible to add new songs into the folder using the same naming convention.

Then, the **playlist** in the `/js/app.js` file needs to be updated. Songs are stored in the **array** called `playlist`. 

```javascript
const playlist = [
  { title: "funk-it", artist: "ComaStudio" },
  { title: "fashion-guitar-beat", artist: "Coma-Media" },
  { title: "the-train", artist: "Caffeine Creek Band" },
];
```

As shown in the array, title names corresponds to the mp3 file names, while artist names are written normally. The app is built in such a way that, when songs are displayed in the music player, dashes in the title names are converted into spaces and each word is capitalized.

When the app is launched, the **playback volume** is 0. Its value can be increased or decreased in a range between 0 (mute) and 10 (loudest).

## Known Bugs

When a new song starts playing, the app displays for an instant a text with `NaN` instead of the song duration expressed in minutes:seconds. 


## URL

[Demo Music Player](https://courageous-cranachan-4e312e.netlify.app/)


## Credits

Music by ComaStudio, Coma-Media, Caffeine Creek Band on [Pixabay](https://pixabay.com/).

Photo by Jr Korpa on [Unsplash](https://unsplash.com/).
