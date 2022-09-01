# Creating Custom Maps

Tiny Life features the ability to create custom maps that you can share with the community. This includes setting down custom lots, households, and environment decorations. Creating custom maps in this way is a lot more involved than creating custom households or lots, so this tutorial explains everything you need to know.

## Getting Started
To get started, simply create a new save file that'll serve as the basis for your new map. If you want to create a completely custom map, you'll have to delete everything that is on the default map you chose.

There's a set of required [cheats](cheats.md) that you have to enable to be able to create custom maps. You can open the cheat menu with the `F1` key.
- `EditWorld` allows you to place build mode items outside the current lot.
- `ShowNonBuyable` allows you to access hidden build mode items, like decorative power poles, road tiles, and more.
- `IgnorePlacementRules` to allow placing some hidden items like power lines in the proper place.

Now, you'll be able to edit the map to your heart's content. Note that you can only delete lots if they don't currently have a household occupying them, so you'll have to export or delete existing households first.

## Caveats
There's a few engine details that you'll have to pay attention to when creating custom maps. Currently, these aren't enforced in the game, so ignoring them might lead to unexpected results.
- Roads have to be made of the hidden road tiles, and they have to be 5 tiles across to be registered as driveable area. Lane markings are optional.
- Every map needs to have at least one road that exits the map's border, otherwise people will not be able to go out of town, which might lead to crashes during gameplay.
- Lots should not intersect each other.
- Newly placed lots should have a name assigned to them prior to exporting, as otherwise they will be marked as incomplete, causing them to behave unexpectedly.
- Some build mode features behave unexpectedly outside of lots and especially close to the borders of the map, so take care when placing walls and roofs there.

## Useful Cheats
There's a few cheats not listed in the [cheats article](cheats.md) that are useful exclusively for editing custom maps.
- `ResizeMap [width in sections] [height in sections]` allows you to change the size of the map. A section's width and height is 8 tiles. Note that, if you input a smaller width and height than the map's current size, anything beyond the borders will be deleted.
- `MoveMap [x section amount] [y section amount]` moves the map and all of its contents by a given amount of sections. This is useful if you want to add content beyond the top or left borders of the map where resizing doesn't add any additional space.

## Exporting Your Map
To export your custom map, simply execute the `ExportCustomMap` cheat. This will reset some of the map's properties to default values, which includes normalization the skill level progress and relationships of everyone on the map. You can find your exported map in the [game directory's](game_dir.md) `Custom Maps` folder.

Before sharing your map with the community, there are two additional files that are required to make the map work in-game:
- A `txt` file with the same name as your map file that contains the description of your map which will be displayed when creating a new save file in the game.
- A `png` file that contains a screenshot of a prominent part of your map (or any other image) which will aos be displayed when creating a new save file. The game expects this file to have 4:1 aspect ratio, with the default maps' size being 512x128 pixels.

Optionally, you can put the three files into a `zip` archive to share with the community. The archive can then be put into the game's `Custom Maps` folder as-is, and the map will be available to select in-game.

## Editing or Updating Your Map
If you want to update your map, either by adding additional content to it, or by fixing issues that you noticed, like incomplete roads or misplaced decorations, you can simply create a new save file and select your map's export.

When you're done editing the map using the normal procedure described above, you can export it again. The map's `StaticVersion` will automatically be increased, which means anyone who installs the updated version of your map and loads a save file will see the save file be updated to the new version of your map automatically.

Note that, for this process to work, the map's `json` file has to have the exact same name as before, so you shouldn't include a version number in your map's name.