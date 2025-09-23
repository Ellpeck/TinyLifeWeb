# Cheats
You can open up the game's cheat menu by pressing the `F1` key on your keyboard. Starting with Tiny Life version 0.47.5, when playing with a controller, you can also press `Start` while holding both the left and right triggers to cycle between the debug and cheat menus.

Here is a list of some of the more useful cheats for mod development and testing. Keep in mind that `[arguments]` need to be replaced with your custom value, and the brackets `[]` need to be omitted. For a full list of cheats, you can also use the `Help` cheat, which prints out every cheat's [regex](https://en.wikipedia.org/wiki/Regular_expression).

## In-game Cheats
- `ShowDebugActions` will enable a set of debug actions you can always select in-game, including teleporting to a certain location, adding people to your household, and more.
- `ShowNonBuyable` allows you to buy plates, pots and the like.
- `Need [name] [percentage between 0 and 1]` changes the current person's needs.
  - `NoNeed` stops need reduction for everyone.
  - `Needless` fills all needs back up for the current person.
- `IgnorePlacementRules` allows you to place colliding furniture. Note that, in this mode, it is very easy to place furniture in a way that looks incorrect or overlaps when rotating the camera.
- `EditPerson` opens a character editor for the current household, with all functionality enabled.
- `Money [amount]` sets your current household's tiny bucks amount.
  - `Gib` gives you 10,000 tiny bucks.
- `ExtremelyFast` allows you to select the 15x speed option all the time, regardless of whether people in the active household are sleeping or out of town.
- `Skill [name] [level]` changes the current person's skill level. You can find a list of all skill names [in the API docs](xref:TinyLife.Skills.SkillType).
- `AddJob [name] [level]` adds the given job to the current person at the given level You can find a list of all job names [in the API docs](xref:TinyLife.Goals.JobType).
  - `RemoveJob [name]` removes the given job from the current person.
- `Die` kills the current person. This cheat is also available as a debug action (`ShowDebugActions`).
- `Emotion [modifier name] [level] [seconds]` adds an emotion modifier to the current person. You can find a list of all emotion modifiers [in the API docs](xref:TinyLife.Emotions.EmotionModifier).
- `Friendship [name without spaces] [percentage between -1 and 1]` sets the friendship level between the named partner and the current person to the given percentage.
- `Romance [name without spaces] [percentage between -1 and 1]` sets the romance level between the named partner and the current person to the given percentage.
- `Forget [name without spaces]` deletes any active relationships between the named partner and the current person.
- `Revive [name without spaces]` revives a person who has died and adds them to your household.
- `FreeLots` makes creating and importing households onto lots free.
- `BigScreenshot` takes a full-size screenshot of the entire map, which might take a few seconds to save, during which the game will be stalled.
- `LifeGoal [goal] [stage]` sets the current person's life goal to the goal and stage number.
  - `LifeGoal Advance` advances the current person's current life goal by one stage.
- `Time [time]` sets the game's current time to the given number of hours. The current day will remain the same.
- `Day [weekday name]` sets the game's current weekday to the given day by advancing time until the day is reached. Weekday names have to start with an uppercase letter.
- `AgeUp` will cause the selected person to age up if possible.
- `RemoveRandos` will remove any randomly generated people from the map and regenerate them.
- `Pregnancy [amount of hours]` will make the selected Tiny pregnant with the given amount of hours before likely going into labor.
- `ClearActions [name without spaces]` will clear the action queue and current actions of the given person. This cheat is also available as a debug action (`ShowDebugActions`).
- `GoHome [name without spaces]` will clear the action queue of the given person and enqueue the appropriate type of "Go Home" action, causing them to make their way home immediately. This cheat is also available as a debug action (`ShowDebugActions`).
- `ResetLocation [name without spaces]` will clear the action queue of the given person and teleport them to their default location. For Tinies who live on a map, this is a location around their home. For lot staff or regular visitors, this is the closest exit road. This cheat is also available as a debug action (`ShowDebugActions`).
- `Find [name without spaces]` causes the camera to focus on the person with the given name.

## Modding and Debug Cheats
- `EditWorld` allows you to place things outside of lots and adds the ability to add new lots to the world. You can find out more about editing the world in the [custom maps tutorial](custom_maps.md).
- `Held [object name or null]` sets the current person's held object. You can find a list of all object names [in the API docs](xref:TinyLife.Objects.FurnitureType).
- `EditCurrentActionSpot` turns on action spot edit mode, which allows you to easily edit the properties of the selected person's current action spot.
  - The person's animation stops, but they are drawn on all surrounding objects of the same type instead, which makes it easier to ensure that the offset looks correct in multiple rotations and positions.
  - Pressing the up, down, left and right keys moves the current action spot's position and holding shift moves the spot's visual position instead
  - Pressing the page up and page down keys moves the spot's y offset.
  - The resulting values are printed to the console every time a modification is made, so you can copy them and paste them into your action spot code.
- `DumpTexture` saves the game's texture packer's entire texture into the Tiny Life folder (which can be accessed through the options menu) as `_Packed.png`.
- `DumpObjectInfo [person name without spaces or object guid]` prints a person's or map object's current state to the log file as JSON. This cheat is also available as a debug action (`ShowDebugActions`).
- There are various cheats that print organized debug information to the console, which can be useful for debugging and balancing mods. These include `TalkActions`, `AverageTalkActions`, `ActionPriorities`, `AverageActionPriorities`, `NeedStats`, `HouseholdStats`, `SkillStats`, and `ActionStats`.

Any boolean cheats can also be enabled on game startup by using the `--cheats` or `-c` argument with a list of cheats separated by spaces. For example, to always have debug actions available, add `-c ShowDebugActions` to the game's launch options.
