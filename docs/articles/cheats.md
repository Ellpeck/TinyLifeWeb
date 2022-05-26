# Testing Cheats
You can open up the game's cheat menu by pressing the `F1` key. Here is a list of some of the more useful cheats for mod development and testing. Keep in mind that `[arguments]` need to be replaced with your custom value, and the brackets `[]` need to be omitted.

## In-game cheats
- `ShowNonBuyable` allows you to buy plates, pots and the like.
- `Need [name] [percentage <= 1]` changes the current person's needs.
  - `NoNeed` stops need reduction for everyone.
  - `Needless` fills all needs back up for the current person.
- `IgnorePlacementRules` allows you to place colliding furniture. Note that, in this mode, it is very easy to place furniture in a way that looks incorrect or overlaps when rotating the camera.
- `EditPerson` opens a character editor for the current household, with all functionality enabled.
- `Gib` gives you 10,000 tiny bucks.
- `ExtremelyFast` allows you to select the 15x speed option all the time, regardless of whether people in the active household are sleeping or out of town.
- `Skill [name] [level]` changes the current person's skill level. You can find a list of all skill names [in the API docs](xref:TinyLife.Skills.SkillType).
- `Job [name] [level]` stes the current person's job and job level.
- `Die` kills the current person.
- `Emotion [modifier name] [level] [seconds]` adds an emotion modifier to the current person. You can find a list of all emotion modifiers [in the API docs](xref:TinyLife.Emotions.EmotionModifier).
- `Friendship [name without spaces] [percentage <= 1]` sets the friendship level between the named partner and the current person to the given percentage.
- `Romance [name without spaces] [percentage <= 1]` sets the romance level between the named partner and the current person to the given percentage.
- `Forget [name without spaces]` deletes any active relationships between the named partner and the current person.
- `FreeLots` makes creating and importing households onto lots free.
- `BigScreenshot` takes a full-size screenshot of the entire map, which might take a few seconds to save, during which the game will be stalled.
- `LifeGoal [goal] [stage]` sets the current person's life goal to the goal and stage number. 
  - `LifeGoal Advance` advances the current person's current life goal by one stage.
- `Time [time]` sets the game's current time to the given number of hours. The current day will remain the same.
- `Day [weekday name]` sets the game's current weekday to the given day by advancing time until the day is reached. Weekday names have to start with an uppercase letter.

## Modding and debug cheats
- `EditWorld` allows you to place things outside of lots and adds the ability to add new lots to the world. Lots can be added using the Lots tool, and removed by clicking on them using the Remove tool.
- `Held [object name or null]` sets the current person's held object. You can find a list of all object names [in the API docs](xref:TinyLife.Objects.FurnitureType).
- `EditCurrentActionSpot` turns on action spot edit mode, which allows you to easily edit the properties of the selected person's current action spot.
  - The person's animation stops, but they are drawn on all surrounding objects of the same type instead, which makes it easier to ensure that the offset looks correct in multiple rotations and positions.
  - Pressing the up, down, left and right keys moves the current action spot's position and holding shift moves the spot's visual position instead
  - Pressing the page up and page down keys moves the spot's y offset.
  - The resulting values are printed to the console every time a modification is made, so you can copy them and paste them into your action spot code.
- `DumpTexture` saves the game's texture packer's entire texture into the Tiny Life directory (which can be accessed through the options menu) as `_Packed.png`.
