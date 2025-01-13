# Modding Basics
This page sums up a few of the basics that you'll need to know if you want to make a mod for Tiny Life.

## Creating Mods
Tiny Life mods are created using the .NET platform and the C# programming language, which means you need to have the [.NET SDK](https://dotnet.microsoft.com/en-us/download) installed. You can find the required version in the [dependency version history](#dependency-version-history) below.

To create a mod, all you have to do is create a repository [from this template](https://github.com/Ellpeck/TinyLifeExampleMod) by pressing the green "Use this template" button. Then, you can open the project contained in it using Visual Studio, Rider or any other kind of C# IDE. The code that is already there contains some examples. Once you're done checking them out, you can just delete them and start fresh.

To run and publish your mods, you can use the included [Cake](https://cakebuild.net/) script, which includes tasks to build, run and publish your mod. To install the required dependencies, you have to run `dotnet tool restore` in the folder that your mod's project file is in. Then, you can run `dotnet cake --target Run` to build your mod, copy it to Tiny Life's mods folder, and run the game, all in one simple command. 

The Cake script also includes some additional tasks and arguments. The `Clean` task removes all development mods from your game's mods folder, and the `args` argument can be used to pass additional arguments to the game for the `Run` target. For example, you can launch into a save directly and enable some cheats automatically by adding the argument `--args="--save TestSave --cheats EditWorld ShowNonBuyable"`.

The game's API is **fully documented**. The documentation is easily accessible by opening any of the API's files in your IDE. The most updated version can be found on this site as well.

If you have any questions, don't hesitate to [ask on the Discord](https://link.tinylifegame.com/discordweb) or [start a discussion](https://github.com/Ellpeck/TinyLifeExampleMod/discussions) about it.

## Distributing Mods
To distribute your mod to other people, you can simply run `dotnet cake --target Zip`. This task will automatically create a `zip` archive that you can share. 

If you want other players to try out your mod, you can also share it on [the Steam workshop](https://steamcommunity.com/app/1651490/workshop/). To do so, make sure you have Steam open in the background, and make sure that your mod's `zip` archive is in the game's mods folder. Then, go to the rightmost tab in the game's Options menu and select "Share Mod on Steam Workshop", and then follow the instructions there.

It's recommended that, in addition to Steam workshop, you also publish your mod elsewhere, like on [GitHub releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases), in [the Discord server](https://link.tinylifegame.com/discordweb)'s `📯-tiny-life-forum`, or on [the itch community](https://itch.io/board/1032686/mods), as not every player has access to Steam workshop.

## Updating Mods
To change the version of Tiny Life that your mod is compiled against, simply go into [the project file](https://github.com/Ellpeck/TinyLifeExampleMod/blob/main/ExampleMod.csproj) and change the `TinyLifeApi` version. Note that some other dependencies might also have been updated, which needs to be [taken into account](#dependency-version-history).

## Where's the Source Code?
The NuGet package for the Tiny Life API just contains a [reference assembly](https://docs.microsoft.com/en-us/dotnet/standard/assembly/reference-assemblies) so that people can't just download the game from NuGet and play it. Since most of the public API is documented, you won't have to look at the source code in most cases, anyway.

Technically, you can [download the game](https://tinylifegame.com/) and then decompile it to see the implementation's code, but due to its license, copying it is not allowed.

## Dependency Version History
Since the mod is compiled against the same dependencies as Tiny Life, it also needs to have the same versions of those dependencies for mods to work correctly with the game. Each update to the template repository is [tagged](https://github.com/Ellpeck/TinyLifeExampleMod/tags) with the game's version number. If you want to develop for a certain version, just check that tag's [project file](https://github.com/Ellpeck/TinyLifeExampleMod/blob/main/ExampleMod.csproj) to see the required dependency versions, as well as the required .NET version.

## What Next?
Go crazy with your ideas! If you're looking for inspiration, you can check out the [community tutorials](community_resources.md) article or play around with [other players' mods](getting.md).
