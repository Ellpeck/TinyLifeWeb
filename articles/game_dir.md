# Finding Tiny Life's Data Folder
Tiny Life's data folder contains the save files, the log files and the folders that you can put custom lots, households and mods into. There are several ways of locating it, and its location differs based on the operating system you're using.

## From within the game
You can open the data folder easily from within the game by going to the options menu and opening the rightmost tab ("Custom Content"). The tab contains a button to quickly open the data folder.

## From your computer
### Windows
On Windows, you can simply open a file explorer window and paste the following text into its location field:
``` 
%LocalAppData%\Tiny Life
```
This should automatically cause the explorer to navigate to the appropriate folder.

### Linux
On Linux, you have to navigate to your home directory (also known as `~`) first. This is usually `/home/username`. From there, you can navigate to `.local/share/Tiny Life`. 

Since `.local` is usually a hidden folder, you might have to configure your file explorer to display hidden files as well.

You can also use a commandline to navigate to the folder directly using the following command:
```
cd ~/.local/share/Tiny Life
```

### Mac
On Mac, you have to navigate to your home directory (also known as `~`) first. This is usually `Macintosh HD/Users/username`. From there, you can navigate to `.local/share/Tiny Life`. 

Since `.local` is usually a hidden folder, you might have to configure your finder to display hidden files by pressing `Cmd + Shift + .` together.

You can also use a commandline to navigate to the folder directly using the following command:
```
cd ~/.local/share/Tiny Life
```