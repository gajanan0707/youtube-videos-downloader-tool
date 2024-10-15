// src/ytDownloader.js
const { spawn } = require('child_process');
const path = require('path');

function getPythonCommand() {
    // If `python` is not available, use `python3`
    return process.platform === "win32" ? "python" : "python3";
}

function downloadYouTubeVideo(url, downloadPath = '.') {
    return new Promise((resolve, reject) => {
        const pythonScriptPath = path.join(__dirname, '../bin/download.py');
        const pythonCommand = getPythonCommand();

        const process = spawn(pythonCommand, [pythonScriptPath, url, downloadPath]);

        process.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        process.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        process.on('close', (code) => {
            if (code === 0) {
                resolve("Download completed");
            } else {
                reject(`Download failed with code ${code}`);
            }
        });
    });
}

module.exports = {
    downloadYouTubeVideo
};
