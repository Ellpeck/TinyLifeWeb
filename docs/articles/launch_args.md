# Launch Arguments
For some more advanced debugging, the game allows specifying one or more launch options (or **commandline arguments**) when running. These are similar to [cheats](cheats.md), except that they have to be specified before the game runs, and usually alter some type of core component of the game's behavior.

If you're playing Tiny Life on Steam, you can specify launch arguments [in the Properties panel](https://help.steampowered.com/en/faqs/view/7D01-D2DD-D75E-2955). If you're using the [modding template](mod_basics.md), the build script starts you out with a set of [pre-set launch options](https://github.com/Ellpeck/TinyLifeExampleMod/blob/main/build.cake#L46) that make debugging your mods quicker and easier.

The following is a list of the most important launch arguments.

- `--game-dir`, followed by an absolute or relative directory path, allows specifying the location where the game's save files, logs etc. should be stored and loaded from.
- `--ansi` causes ansi colors to be used for the log, which makes log files less readable, but printing the content of log files to the console more readable.
- `--verbose` or `-v` causes the game to output verbose logging information to the log files.
- `--skip-splash` causes the game's splash screen logos to be skipped for faster startup when testing mods.
- `--skip-preloads` causes some time-intensive preloading to be skipped when loading saves, at the expense of performance while playing. This can be useful when testing mods, as you have to wait less long for a save to finish loading.
- `--debug-saves` causes a JSON representation of save data to be output to a save's directory when saving the game. Note that data is never loaded back into the game from this file, so editing it has no effect.
- `--trace-load` causes additional logging to occur when the game loads, printing out load times of individual game components. This only has an effect if `--verbose` or `-v` is also specified.
- `--reflective-bind-to-type` causes pre-0.48 reflective type binding to be used. This may be necessary to debug loading or saving issues with the new, non-reflective type resolving system.
- `--cheats` or `-c`, followed by a space-separated list of [cheats](cheats.md), causes those cheats to be executed after the game has started. This works best for cheats that toggle a property, like whether non-buyable items are shown.
- `--save` or `--load`, followed by the name of an existing save file, causes the game to load into that save file immediately upon startup.
- `--lot` or `--build`, followed by the name of a lot, causes the game to load into that lot immediately upon startup. This only has an effect if `--save` or `--load` is also specified.
