# Troubleshooting Common Issues
This is a list of commonly faced problems when downloading, installing and playing the game. Please read this list carefully before reporting an issue.

## User Issues
The following issues unfortunately **cannot** be fixed by Tiny Life's developers, and players have to take action themselves to fix them. If you're struggling with solving these issues yourself, feel free to ask for help in [the Discord server](https://link.tinylifegame.com/discord).

### My save files aren't synchronized through Steam Cloud
Cloud storage in Tiny Life has to be enabled individually for each save file that you want to back up and synchronize. 

To do so, make sure that you have Steam running, and then go into the Load Game menu on the game's title screen. From there, simply press the button that has a little cloud icon on it for each save file that you want to store in the cloud. If you ever want to stop saving a file to the cloud, just press the button again.

While Steam Cloud storage is enabled for a save file, it will automatically be uploaded whenever the game is saved, and newer versions will automatically be downloaded every time you launch the game.

### I get an error or crash with mods installed
For issues that only happen with mods, please contact the mods' developers. 

When reporting an issue to Tiny Life developers, please make sure that you have **no mods installed** or that the issue also occurs without any mods installed. 

### The game won't start correctly
This can have multiple reasons:
- If you played older versions of the demo in Spanish, there might be outdated data in your `Options.json` file. Please delete it by navigating to the [game folder](https://docs.tinylifegame.com/articles/game_dir.html), which is located at `%LocalAppData%\Tiny Life` on Windows.
- When downloading the game from itch, make sure to **extract the zip archive** before starting the game executable within it.
- Some ARM-based distributions of Linux and Mac (like newer MacBooks that use Apple Silicon) don't support Tiny Life without installing additional tools (like [Rosetta](https://en.wikipedia.org/wiki/Rosetta_(software)) or [QEMU](https://www.qemu.org/)) to translate instructions correctly. You might have to do additional research to figure out what these are for your device.
- Some older operating system versions don't support Tiny Life, which currently runs on .NET 7. Unfortunately, especially Mac is known for having very short lifecycles for supported versions. To see if your operating system version is supported by .NET 7, you can take a look at [the official list](https://github.com/dotnet/core/blob/main/release-notes/7.0/supported-os.md).
- When downloading the game from itch on a Mac, your device might warn you about the application's **security**, since Tiny Life is not signed by Apple. If you want to run the game anyway, hold the Option key, then right-click and select Open.

### There's no log file to attach to my bug report
If the game is crashing when you try to launch it, but there's no log file in [the logs folder](game_dir.md), the game might be crashing too early or it might be unable to create a log file due to permission issues.

If this happens, the game will create a file next to the game's executable called `_UnhandledException.txt` instead. Please include this file's content in your report.

## Game Issues
The following issues are known bugs in the game and will be fixed in a future update. Once they are fixed, they will be removed from this list. For issues from older versions, you can refer to [the list's history](https://github.com/Ellpeck/TinyLifeWeb/commits/main/docs/articles/common_issues.md).

### My Tinies automatically get assigned wrong genealogies
Transitive genealogies are automatically calculated in the character creator. For example, adding a parent and a child for a Tiny automatically causes them to have a grandparent/grandchild relationship. The current implementation of this system may contain some oversights causing incorrect transitive genealogies to be calculated automatically. To fix this issue temporarily and be able to set your own genealogies manually, you can enable the `IgnoreTransitive` [cheat](cheats.md).

### Tinies are entering my house without my permission
This is the way that Tinies visiting a lot currently works. There's no way to disable this behavior right now, but you can select your front door and lock it for other Tinies, which means they won't be able to enter your house anymore. In the future, we plan on making it so that Tinies have to be invited into your house to be allowed to enter.
