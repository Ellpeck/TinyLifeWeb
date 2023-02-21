# Troubleshooting Common Issues
This is a list of commonly faced problems when downloading, installing and playing the game. Please read this list carefully before reporting an issue.

## User Issues
The following issues unfortunately **cannot** be fixed by Tiny Life's developers, and players have to take action themselves to fix them. If you're struggling with solving these issues yourself, feel free to ask for help in [the Discord server](https://ellpeck.de/discord).

### I get an error or crash with mods installed
For issues that only happen with mods, please contact the mods' developers. 

When reporting an issue to Tiny Life developers, please make sure that you have **no mods installed** or that the issue also occurs without any mods installed. 

### The game won't start correctly
This can have multiple reasons:
- When downloading the game from itch, make sure to **extract the zip archive** before starting the game executable within it.
- Some ARM-based distributions of Linux and Mac (like newer MacBooks that use Apple Silicon) don't support Tiny Life without installing additional tools (like [Rosetta](https://en.wikipedia.org/wiki/Rosetta_(software))) to translate instructions correctly. You might have to do additional research to figure out what these are for your device.
- When downloading the game from itch on a Mac, your device might warn you about the application's **security**, since Tiny Life is not signed by Apple. If you want to run the game anyway, hold the Option key, then right-click and select Open.

### There's no log file to attach to my bug report
If the game is crashing when you try to launch it, but there's no log file in [the logs folder](game_dir.md), the game might be crashing too early or it might be unable to create a log file due to permission issues.

If this happens, the game will create a file next to the game's executable called `_UnhandledException.txt` instead. Please include this file's content in your report.

## Game Issues
The following issues are known bugs in the game and will be fixed in a future update. Once they are fixed, they will be removed from this list. For issues from older versions, you can refer to [the list's history](https://github.com/Ellpeck/TinyLifeWeb/commits/main/docs/articles/common_issues.md).

### A required object is said to be unavailable
Sometimes an action is grayed out and its tooltip displays this reason, even though a required object is available. This issue occurs when the selected Tiny is too far away from the objects. You can fix this issue by telling the Tiny to "Go Here" first.
