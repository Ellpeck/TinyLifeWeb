# Testing Cheats
You can open up the game's cheat menu by pressing the `F1` key. Here is a list of some of the more useful cheats for mod development and testing. Keep in mind that `[arguments]` need to be replaced with your custom value.
- `ShowNonBuyable` allows you to buy plates, pots and the like
- `Need [name] [percentage <= 1]` changes the current person's needs
  - `NoNeed` stops need reduction for everyone
  - `Needless` fills all needs back up
  - `Needy` reduces all needs to zero
- `EditWorld` allows you to place things outside of lots
- `IgnorePlacementRules` allows you to place colliding furniture
- `EditPerson` opens a character editor with all functionality enabled
- `Gib` gives you 10,000 tiny bucks
- `ExtremelyFast` allows you to select the 15x speed option all the time
- `Skill [name] [level]` sets the current person's skill level
- `Held [object name or null]` sets the current person's held object
- `Job [name] [level]` stes the current person's job and job level
- `Die` kills the current person
- `Emotion [modifier name] [level] [seconds]` adds an emotion modifier to the current person
- `Friendship [name without spaces] [percentage <= 1]` sets the friendship level between the named partner and the current person
- `Romance [name without spaces] [percentage <= 1]` sets the romance level between the named partner and the current person
- `Forget [name without spaces]` deletes any active relationships between the named partner and the current person
- `EditCurrentActionSpot` turns on action spot edit mode, which allows you to easily edit the properties of the selected person's current action spot
  - The person's animation stops, but they are drawn on all surrounding objects of the same type instead, which makes it easier to ensure that the offset looks correct in multiple rotations and positions
  - Pressing the up, down, left and right keys moves the current action spot's position and holding shift moves the spot's visual position instead
  - Pressing the page up and page down keys moves the spot's y offset
  - The resulting values are printed to the console every time a modification is made, so you can copy them and paste them into your action spot code
- `DumpTexture` saves the game's texture packer's entire texture into the Tiny Life directory (which can be accessed through the options menu) as `_Packed.png`
- `FreeLots` makes creating and importing households onto lots free
- `BigScreenshot` to take a full-size screenshot of the entire map (which takes a few seconds)