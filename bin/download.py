# bin/download.py
import sys
import yt_dlp

def download_video(url, path="."):
    ydl_opts = {
        'outtmpl': f'{path}/%(title)s.%(ext)s',  # Save file to the specified path
        'format': 'best'  # Download the best available format without needing ffmpeg
    }
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
            print(f"Downloaded video to {path}")
    except Exception as e:
        print(f"Failed to download video: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python download.py <YouTube_URL> <Optional: Path>")
    else:
        url = sys.argv[1]
        path = sys.argv[2] if len(sys.argv) > 2 else "."
        download_video(url, path)
