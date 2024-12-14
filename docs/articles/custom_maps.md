# Creating Custom Maps

Tiny Life features the ability to create custom maps that you can share with the community. This includes setting down custom lots, households, and environment decorations. Creating custom maps in this way is a lot more involved than creating custom households or lots, so this tutorial explains everything you need to know.

## Getting Started
To get started, there's a set of required [cheats](cheats.md) that you have to enable to be able to create custom maps. You can open the cheat menu with the `F1` key.
- `EditWorld` allows you to place build mode items outside the current lot.
- `ShowNonBuyable` allows you to access hidden build mode items, like decorative power poles, road tiles, and more.
- `IgnorePlacementRules` to allow placing some hidden items like power lines in the proper place.

Next, simply create a new save file that'll serve as the basis for your new map. You can use the map called "Empty Map" that should now be available as a simple starting point. Now, you can get started editing the map to make it your own!

## Caveats
There are a few engine details that you'll have to pay attention to when creating custom maps. Currently, these aren't enforced in the game, so ignoring them might lead to unexpected results.
- Some objects in the game (notably lot staff) save a reference to the map's name. Because of this, it's recommended to [export your map](#exporting-your-map) once, name it with its final name, and create a new save file with it before assigning lot staff and residents, and then re-exporting the map.
- Exporting a custom map from a save that has multiple maps loaded may lead to issues, so it's recommended to have only one map in your save.
- Roads have to be made of the hidden road tiles, and they have to be 5 tiles across to be registered as driveable area. Lane markings are optional.
- Every map needs to have at least one road that exits the map's border; otherwise people will not be able to go out of town, which might lead to crashes during gameplay.
- Newly placed lots should have a name assigned to them before exporting, as otherwise they will be marked as incomplete, causing them to behave unexpectedly.
- Some build mode features behave unexpectedly outside of lots and especially close to the borders of the map, so take care when placing walls and roofs there.
- Lots should not intersect each other.
- You can only delete lots if they don't currently have a household occupying them, and you're not currently building on them, so you'll have to export or delete existing households first and choose another lot to start building from. To delete a lot, select its full area with the Remove tool as if you were placing the lot.

## Useful Cheats
There are a few cheats not listed in the [cheats article](cheats.md) that are useful exclusively for editing custom maps.
- `ResizeMap [width in sections] [height in sections]` allows you to change the size of the map. A section's width and height is 8 tiles. Note that, if you input a smaller width and height than the map's current size, anything beyond the borders will be deleted.
- `MoveMap [x section amount] [y section amount]` moves the map and all of its contents by a given number of sections. This is useful if you want to add content beyond the top or left borders of the map where resizing doesn't add any additional space.

## Exporting Your Map
To export your custom map, simply execute the `ExportCustomMap` cheat. This will reset some of the map's properties to default values, which includes normalization the skill level progress and relationships of everyone on the map. You can find your exported map in the [game folder's](game_dir.md) `Custom Maps` folder.

To complete your map's export, there are some additional files that are required to make the map work in-game. Let's imagine your map export is `MyMapName.json`, which means the additional files should be named as follows:
- `MyMapName.txt` contains the description of your map which will be displayed when creating a new save file in the game.
- `MyMapName.png` contains a screenshot of a prominent part of your map (or any other image) which will be displayed when creating a new save file. The game expects this file to have 4:1 aspect ratio, with the default maps' size being 512x128 pixels.
- Optionally `MyMapNameSteamThumbnail.png`, which will be used as the preview image displayed in the Steam Workshop if you decide to share your map there. The restrictions for this seem somewhat arbitrary, but it's best to keep the file size under 1 MB and the image size around 256x256 pixels.

Optionally, you can put the three (or four) files into a `zip` archive to share, which is required to share your map with the community. The archive can then be put into the game's `Custom Maps` folder as-is, and the map will be available to select in-game.

## Sharing Your Map

To share your map on [the Steam workshop](https://steamcommunity.com/app/1651490/workshop/), make sure that Steam is open in the background, and that your map's `zip` archive is in the `Custom Maps` folder. Then, go to the rightmost tab in the game's Options menu and select "Share Custom World on Steam Workshop", and then follow the instructions there.

It's recommended that, in addition to Steam workshop, you also publish your map elsewhere, like on [the itch community](https://itch.io/board/1032686/mods), as not every player has access to Steam workshop.

## Editing or Updating Your Map
If you want to update your map, either by adding additional content to it, or by fixing issues that you noticed, like incomplete roads or misplaced decorations, you can simply create a new save file and select your map's export.

When you're done editing the map using the normal procedure described above, you can export it again. The map's `StaticVersion` will automatically be increased, which means anyone who installs the updated version of your map and loads a save file will see the save file be updated to the new version of your map automatically.

Note that, for this process to work, the map's `json` file has to have the exact same name as before, so you shouldn't include a version number in your map's name.
