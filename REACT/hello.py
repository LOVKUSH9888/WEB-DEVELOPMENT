from pytube import YouTube

def Download(link):
    youtubeObject = YouTube(link)
    youtubeObject = youtubeObject.streams.get_highest_resolution()
    try:
        youtubeObject.download()
    except:
        print("An error has occurred")
    print("Download is completed successfully")


link = input("https://www.youtube.com/watch?v=-ERWlp828kY")
Download(https://www.youtube.com/watch?v=-ERWlp828kY)