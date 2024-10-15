// test/ytDownloader.test.js
const { downloadYouTubeVideo } = require('../src/ytDownloader');

// Set the timeout to a higher value (e.g., 2 minutes)
jest.setTimeout(120000);

test('Download YouTube video', async () => {
    const url = 'https://www.youtube.com/watch?v=BIINqfBOz1c'; // Example YouTube URL

    // Capture or disable console.log during the test to avoid logging after the test is complete
    const originalLog = console.log;
    console.log = jest.fn();  // Disable console.log for this test

    const result = await downloadYouTubeVideo(url);

    // Restore console.log
    console.log = originalLog;

    // Assert the download result
    expect(result).toBe("Download completed");
});
