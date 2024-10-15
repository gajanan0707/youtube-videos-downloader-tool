# YouTube Video Downloader

A simple Node.js package to download YouTube videos using `yt-dlp`.

## Installation

```bash
npm i youtube-videos-downloader-tool
```

## Usage

```bash
const { downloadYouTubeVideo } = require('youtube-videos-downloader-tool');

// Example YouTube URL
const url = 'https://www.youtube.com/watch?v=BIINqfBOz1c';

downloadYouTubeVideo(url)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error downloading video:', error);
  });
```
