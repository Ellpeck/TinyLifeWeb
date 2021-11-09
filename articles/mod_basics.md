# Modding Basics
This page sums up a few of the basics that you'll need to know if you want to make a mod for Tiny Life.

## Creating mods
To create a mod, all you have to do is create a repository [from this template](https://github.com/Ellpeck/TinyLifeExampleMod/generate) and open the project contained in it using Visual Studio, Rider or any other kind of C# IDE. The code that is already there contains some examples. Once you're done checking them out, you can just delete them and start fresh.

The template repository also contains a little `Run` script for [windows](https://github.com/Ellpeck/TinyLifeExampleMod/blob/main/Run.bat) and [linux and mac](https://github.com/Ellpeck/TinyLifeExampleMod/blob/main/Run.sh) that automatically builds your mod, copies it into the `Mods` directory of your Tiny Life instance and runs the game. Note that the script will only work correctly if you've launched Tiny Life manually at least once before.

The game's API is **fully documented**. The documentation is easily accessible by opening any of the API's files in your IDE. The most updated version can be found on this site as well.

If you have any questions, don't hesitate to [ask on the Discord](https://ellpeck.de/discord) or [start a discussion](https://github.com/Ellpeck/TinyLifeExampleMod/discussions) about it.

## Distributing mods
To distribute your mod to other people, you can use the `Publish` script for [windows](https://github.com/Ellpeck/TinyLifeExampleMod/blob/main/Publish.bat) and [linux and mac](https://github.com/Ellpeck/TinyLifeExampleMod/blob/main/Publish.sh) which can also be found in the template repository. This script will automatically create a `zip` archive that you can share. If you want other players to try out your mod, you can also post it to [the community](https://itch.io/board/1032686/mods).

## Updating mods
To change the version of Tiny Life that your mod is compiled against, simply go into [the project file](https://github.com/Ellpeck/TinyLifeExampleMod/blob/main/ExampleMod.csproj) and change the `TinyLifeApi` version. Note that some other dependencies might also have been updated, which needs to be [taken into account](https://github.com/Ellpeck/TinyLifeExampleMod#dependency-version-history).

## Where's the source code?
The NuGet package for the Tiny Life API just contains a [reference assembly](https://docs.microsoft.com/en-us/dotnet/standard/assembly/reference-assemblies) so that people can't just download the game from NuGet and play it. Since most of the public API is documented, you won't have to look at the source code in most cases, anyway.

Technically, you can [download the game](https://tinylifegame.com/) and then decompile it to see the implementation's code, but due to its license, copying it is not allowed.

## Dependency version history
Since the mod is compiled against the same dependencies as Tiny Life, it also needs to have the same versions of those dependencies for mods to work correctly with the game. Each update to the template repository is [tagged](https://github.com/Ellpeck/TinyLifeExampleMod/tags) with the game's version number. If you want to develop for a certain version, just check that tag's [project file](https://github.com/Ellpeck/TinyLifeExampleMod/blob/main/ExampleMod.csproj) to see the required dependency versions.