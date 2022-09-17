# 0.25.2
> Fixes and Improvements for 0.25

Improvements
- Also follow a person when left-clicking their button again while they're already selected
- When saving custom households, files will now append a number rather than a large amount of dashes if they conflict
- Animate notifications when they appear and disappear (0.25.1)
- Allow clicking on notifications to make them go away (0.25.1)
- Search for custom content recursively, rather than in just the topmost folder (0.25.1)
- Increased rendering performance, especially when rotating and moving the camera while zoomed out (0.25.1)

Fixes
- Fixed a rare crash when opening an interaction menu too fast
- Fixed the skill book action not being able to be loaded from disk, causing an exception
- Fixed options not saving when pressing the X button on them
- Fixed roofs being duplicated when undoing and redoing (0.25.1)
- Fixed a rare crash when a Tiny tries to face another Tiny in a conversation (0.25.1)

API
- Added the ability for mods to add an options file and menu (0.25.1)
- Added a proper build script to the Example Mod, allowing for more control and ease of use when modding (0.25.1)

# 0.25.0
![](media/changelog/0.25.0.png)

> Water, Stuff and Skill Books

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/424507/0250-water-stuff-and-skill-books) or [on Steam](https://store.steampowered.com/news/app/1651490/view/3360269804911051302).

Additions
- Added the ability for primary school students to study at a bookshelf
- Added the ability to get raises after reaching level 10 of a career
- Added some decorations, including maple fairy lights, three rocks, a shelf with three layers, big bushes
- Added some wooden siding wallpaper
- Added water, grassy dirt and stone ground tiles
- Added large glass windows and a large glass door
- Added skill books for every skill in the game
- Added businessperson, retail worker, doctor, and scientist daily tasks
- Added required promotion skills for primary school students
- Added icons for jobs
- Added the ability to disable newspaper deliveries at mailboxes
- Added a keybind to change wall modes

Improvements
- Extended the map with a house by Macy and a household by Vortis
- Adjusted death emotions to be less severe for acquaintances
- Adjusted the introvert personality to get less overstimulated less quickly
- Slightly rebalanced energy and entertainment need gain
- Made higher job levels require higher amounts of performance to be promoted again
- Expanded the color palette for sofas and some wallpapers
- Made lot boundaries display with proper depth related to objects intersecting them
- Improved rendering performance by drawing some objects in a static batch, rather than every frame
- Order keybind menu by name
- Display a notification when a lot can't be imported due to an error
- Display portraits of people who are out of town as slightly transparent

Fixes
- Fixed an exception when trying to load mail from disk
- Fixed being unable to put the homework book away
- Fixed a rare exception when creating a painting
- Fixed undo/redo hints not displaying in keyboard mode
- Fixed various objects still executing an in-world action when in the household storage
- Fixed a rare exception when a Tiny tries to pick up an object that has been removed
- Fixed visitors not going home properly after being out of town sometimes
- Fixed an exception when trying to make fun of people who don't have a job
- Fixed an incomplete options file causing the game to crash on startup
- Fixed border tiles not being added to the static sprite batch properly, causing rendering issues
- Fixed an exception when trying to take an object from the fridge that has already been removed
- Fixed keyboard camera movement not allowing diagonal movement
- Fixed the feedback form not working when the log file is large and a lot of info has been input
- Fixed the job tab displaying a dollar sign in addition to the tiny bucks sign
- Fixed the ability to place walls without enough money

API
- Allow furniture to specify whether it should fit in an object spot or not
- The game version that a save was saved with is now stored

# 0.24.1
> Various Fixes and Improvements

Improvements
- Made randomly generated outfits match their intention better
- Made lots replace the ground with their default tile type rather than grass when moving them
- Added info text to homes that are too expensive for starter households
- Added a notification for when a mod fails to load

Fixes
- Fixed mods being unable to contain custom furniture

# 0.24.0
![](media/changelog/0.24.0.png)

> Undo, Redo, Fridge Achievements

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/409590/0240-undo-redo-fridge-achievements) or [on Steam](https://store.steampowered.com/news/app/1651490/view/3370399657483457677).

Additions
- Added the ability to store leftovers in the fridge
- Added the ability to undo and redo actions in build mode
- Added achievements
- Added a paper lantern furniture item
- Added the reasoning skill
- Added some facial hair
- Added the ability to adopt children using the computer

Improvements
- Display a notification when first acquiring a new skill
- Display a button in the job panel for going to work
- Clarify when you can click on a person to head to work
- Randomly generate new people for regular visitors and lot employments if exported ones run out
- Allow children to be regular visitors too
- Added a lot more random names, including various international ones
- Improved performance of saves with a lot of people in them
- Automatically set transitive genealogies when changing the genealogy of a relationship in the character creator

Fixes
- Fixed an exception when getting a job from a newspaper after it has already been removed
- Fixed lot employment navigation on lots being incorrect when using a gamepad
- Fixed new notifications not being added to the top of the notification queue
- Fixed a rare exception when displaying interactions with multiple pages
- Fixed death notifications not having an icon
- Fixed keyboard camera movement not clearing the following person
- Fixed children being able to get the capable carpenter life goal
- Fixed ordering from lot staff not working correctly
- Fixed being unable to click in the world when the cheats menu is open

API
- Objects in a person's hand or in the household storage will now also have their Update methods called
- Improved auto-goal triggering system
- Added the ability to change an action spot's main direction
- Made time a map-based property rather than a game-based one

# 0.23.0
![](media/changelog/0.23.0.png)

> Job Choices, Aging Up and Furniture Fun

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/400497/0230-job-choices-aging-up-and-furniture-fun) or [on Steam](https://store.steampowered.com/news/app/1651490/view/3344500789303904087).

Additions
- Added choice prompts for jobs and students, which appear randomly and allow the player to influence the situation
- Added the ability for children to age up into adults
- Added a baking skill and several food items that can be baked
- Added the ability to add candles to cake to celebrate someone's birthday
- Added a bigger version of the fitness rug
- Added a cheaper computer
- Added two new chairs
- Added four new flower vases
- Added two new small lamps
- Added a taller wooden fence
- Added a small coffee table and a new TV stand
- Added two new roof textures
- Added the ability to rummage through trash to dig up thrown away items
- Added kissing
- Added a search bar to the hint history menu
- Added more actions for people that have diet personalities
- Added decorative power poles to the default map

Improvements
- Clarify that puddles on natural ground can't be mopped
- Allow wall sinks to get dirty
- Display some important tooltip information properly when using a gamepad
- Disallow sleeping when stunned
- Go back to the starting location after jogging
- Improve the action variety screen when other people are involved by increasing the size of their portrait
- Allow using WASD to control the camera by default
- Made trash cans fill up with trash
- Order action varieties by name
- Display learned recipes and woodworking recipes when leveling up the cooking and woodworking skills
- Display a security disclaimer when enabling mods
- Play sounds for broken objects

Fixes
- Fixed people's shoes rendering above the picnic table when sitting
- Fixed lights being clipped early, causing them to disappear visually
- Fixed people sometimes putting objects down on surfaces with the wrong rotation
- Fixed some issues on the default map, including walden household duplications and a missing chair
- Fixed diet personalities not being incompatible with each other
- Fixed issues with the smoke particle displaying behind objects
- Fixed people doing the walking animation while their pathfinding is still calculating
- Fixed people sometimes not leaving a lot when asked to
- Fixed "got food somewhere else" notifications being displayed for every household
- Fixed emotion stings playing if the same person is selected again
- Fixed children being able to tinker with stuff
- Fixed being unable to place rugs under tables that have something on them
- Fixed lamps in storage lighting up the place they used to occupy when reloading a save

# 0.22.2

> Small Improvements, Important Fixes

Improvements
- Deliver newspapers to new households on the first day
- Slightly reduced passive toilet and energy need reduction
- Moved weekly bills to Friday
- Display clothes occasions in the outfit tooltip in the character creator
- Added a lot staff in-game hint when opening the menu
- Made people lose energy more slowly if they're feeling energetic

Fixes
- Fixed pathfinding sometimes failing for long distances
- Fixed outfit tooltip not displaying in the character creator
- Fixed a crash when a person that doesn't have a household dies (0.22.1)

# 0.22.0
![](media/changelog/0.22.0.png)

> Some Pride and Some Diet Choices

No devlog this time, but we want to take this moment to wish you all a Happy Pride Month! If you're in a position to, please consider donating to charities like [The Trevor Project](https://www.thetrevorproject.org/) which make an effort to support LGBTQIA+ people.

Additions
- Added four new window designs
- Added a few additional Pride flags
- Added three curtain/blind furniture items
- Added paper lantern fairy light furniture
- Added pescetarian, vegetarian and vegan personality types
- Added a lot of food types to accomodate the new personality types
- Added uneasy and relaxed emotion types

Improvements
- Speed up game launch by improving texture packing performance
- Made drywall a bit less ugly in terms of decorative rating
- Added particles for death-related emotions, as well as showers
- Added protein shakes for creative and relaxed emotions
- Improved the look of the corners on grassy auto-tiles
- Renamed Options button to Options and Hints
- Allow cleaning dishes for the household hero life goal's first stage

Fixes
- Fixed a crash with gamepad controls and in-game hints
- Fixed rendering issues with wall-hanging objects that were placed off the grid
- Fixed a crash when all household members die and UI animations are enabled
- Fixed objects not being able to get dirty

API
- Added the ability for map objects to influence need regeneration speed

# 0.21.3

> Small Additions to the Two Year update

Improvements
- Skip packing empty wallpaper textures unnecessarily, improving load times
- Display an on-screen keyboard for input fields when playing on the Steam Deck (0.21.2)
- Added a padding to the wallpaper texture to reduce graphical issues with odd screen sizes (0.21.2)

Fixes
- Fixed a crash when using a mouse button that has no icon in the game
- Fixed rare exceptions with the Add a Little Something, Cook, and Ask to Taste actions
- Fixed a rare crash when opening the in-game menu
- Fixed Thomas Walden spawning in the wall on the default map
- Fixed woodworking actions not saving and loading properly (0.21.2)
- Fixed a rare crash with the "Ask to Taste" action (0.21.2)
- Fixed in-game news being impossible to navigate to using a gamepad (0.21.2)
- Fixed public street lamps not working when updating an older map (0.21.1)
- Fixed a crash when trying to start a woodworking action on an unfinished woodwork (0.21.1)

# 0.21.0
![](media/changelog/0.21.0.png)

> Two Years of Tiny Life: Cafés, Gamepad Controls and More

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/384666/0210-two-years-of-tiny-life-cafs-gamepad-controls-and-more) or [on Steam](https://store.steampowered.com/news/app/1651490/view/3189123589808204255).

Additions
- Added the ability to control the entire game using a gamepad
- Added newspapers, and the ability to get jobs from them
- Added two street lamps, a stone wall fence, a coffee machine, a food display case, a staff-only door, a café sign, big and small glass dinner tables, a small wooden dinner table, a modern chair, a coat rack, a wall-attached shower
- Added a café lot type, a playground lot type, and a barista lot employment
- Added the Coffees and Trees Café to Maple Plains City
- Added some additional sweet speech sounds
- Added controls hints, which display useful controls in the bottom right corner (and can be disabled in the hints options)
- Added the ability to tinker with objects to increase repair skill
- Added the foodie personality
- Added the ability to "add a little something" to food with cooking level 8 or higher
- Added the ability to create and share custom maps with the community (this is not documented yet, however)
- Added the ability for children to run around for fun
- Added the ability to add a second binding for each keybind
- Added the ability to clear the notification history

Improvements
- Hide the mouse cursor after five seconds of movement inactivity
- Reduced the tooltip delay from half a second to a quarter of a second
- Made grass tiles have visual variations
- Moved portraits down to avoid them being hidden by the emotion name
- Improved the way wall-hanging objects are rendered, causing them to look wrong less often
- Show the amount of items in the household storage on the icon
- Added particles for grilling, being stinky, chimneys, and breaking things in build mode
- Added an option to allow or disallow loading mods (which is disabled by default)
- Added a tooltip displaying who claimed a bed
- Made stunned emotion go away when showering rather than sleeping
- Added a deselect button to the move tool
- Display a link to the game's roadmap in the main menu
- Added a protective wear clothes intention that gets used when driving on an e-scooter for kids

Fixes
- Fixed a crash with regular visitors if there are broken exported households
- Fixed debug food items crashing the game
- Fixed children being able to do lot employments
- Fixed the game crashing when the OS doesn't allow opening folders in the explorer
- Fixed large benches occluding walls
- Fixed a crash that sometimes occured when deleting the last tiny in the character creator
- Fixed people trying to sleep in beds that other people had claimed
- Fixed some issues with Vortis' households and lots
- Fixed people holding paint brushes wrong in some rotations
- Fixed a rare crash when grabbing a serving from a nonexistent platter
- Fixed notifications forgetting their icons when quitting and reloading a save

API
- Converted a lot of enumerations to other types, allowing for custom values to be added
- Allow openings to have multiple layers

# 0.20.4
> Fix Me, Please!

Improvements
- Moved portraits down a bit to avoid them occluding the current emotion
- Made it twice as likely for objects to break during use
- Added proper error handling to action display names, which avoids unnecessary crashes
- Made required match percentage for clothes occasions much less severe

Fixes
- Fixed mailbox sounds not playing in various circumstances
- Fixed projects being removed by daily pay before they are finished
- Fixed a crash when no front door is found on a lot
- Fixed items on the cursor being deleted when selecting an item from the household storage
- Fixed saves not being deleted correctly when Steam is open
- Fixed a crash when grabbing a serving from a platter on the ground
- Fixed the "pay bills" action causing a crash if someone else already paid them
- Fixed the "go to work" action causing a crash if the person doing so doesn't have a job anymore
- Fixed body parts counting towards the clothes occasions match percentage

API
- Allow adding new colors into existing color schemes

# 0.20.3
> More Fixes and Fancier Grass

Here's another small set of bugfix updates, along with a nice visual improvement that makes the world's grassy ground look a little more interesting.

Improvements
- Reduced the delay at which tooltips display to a quarter of a second
- Added variations to grass tiles

Fixes
- Fixed a crash when people are told to leave a very tiny room
- Fixed paintings being too expensive to buy sometimes at the easel
- Fixed brazillian portuguese not being recognized on some computers, causing a crash
- Fixed a rare exception when a chair is deleted while someone is occupying it
- Fixed actions sometimes being disallowed with a "??Actions.??" tooltip

API
- Added a debug option to skip preloading pathfinding data when entering a save

# 0.20.2

> Small Fixes and Improvements

This small set of bugfix updates also brings a few small improvements with it, which make it a little less infuriating to use a computer while guests or other household members are around.

Improvements
- Don't force-cancel any actions of the currently selected person when someone tries to socialize with them

Fixes
- Fixed the emergency food mail crashing the game if retrieved after a game relaunch (0.20.2)
- Fixed roof-attached objects being removed when a roof is replaced with a new one (0.20.2)
- Fixed the household panel not updating when a household is deleted (0.20.2)
- Fixed actions that can be multitasked being force-canceled when other people try to socialize
- Fixed the character creator's "take off" button don't scrolling properly

# 0.20.0
![](media/changelog/0.20.0.png)

> The Children Update, it's finally here!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/355830/0200-the-children-update-its-finally-here) or [on Steam](https://store.steampowered.com/news/app/1651490/view/3100171001731828571).

Additions
- Added the Children age group, which includes several new gameplay features, including new interactable furniture items, school, homework and the start of parenting interactions
- Added the Familiar Attire set with art by [Tector](https://www.instagram.com/tector_pixel/), which includes several new clothing items and accessories for children and adults
- Added multiple new furniture items, including three plants, two decorative objects, a smaller picnic table, a sandbox, a jigsaw puzzle, a stove for kids, and a toy box
- Added a top hat clothing item
- Added two new personality types: Family-Focused and Hates Children
- Added a speech type system which includes a more feminine voice style spoken by [SyrinixSoul](https://https://www.twitch.tv/syrinixsoul)
- Added an option to allow complex social relationships between AI Tinies
- Added a grid to build mode (which can be toggled using the G key)
- Added keybinds to move the camera (arrow keys by default, but can be changed to WASD in the controls menu)
- Added a crash detection system which displays a notification when the game starts up the next time
- Added a world selection to the "New Game" menu

Improvements
- Added the "failed joke" emotion modifier to all jokes
- Organized the gameplay options menu better
- Increased the default brightness increase to 25%
- Moved the notification history button to where options and build mode are
- Display a warning when a save is loaded with missing mods
- Bundle all errors into one notification when loading or saving
- Display the reason that actions in a subcategory are unavailable straight away if they are all the same
- Made accessories less likely to be randomly generated on newly created people
- Some memory usage improvements
- Ordered the furniture tool's "All" tab by the category that furniture items are in
- Added notifications for when cheats are turned on or off
- Allow Tinies to get jobs automatically if important actions are enabled
- Display which color scheme is currently selected
- Allow using ALT for objects that are attached to walls
- Display the loading progress in the loading screen
- Allow stoves to get dirty
- Allow editing and changing outfits at mirrors

Fixes
- Fixed a rare exception when people grabbed a serving of food
- Fixed camera rotation buttons not having a highlight color
- Fixed a crash when trying to talk to a person who just died
- Fixed an exception that occurred when there was no mailbox on a residential lot
- Fixed lot imports breaking if the import button is pressed too many times in a row
- Fixed the household preview being too wide for large households

API
- Added Harmony, allowing for mods to inject custom code into the game

# 0.19.2
![](media/changelog/0.19.1.png)

> Better Hints, Better Food, Better Names

This is a small (devlog-less) update that fixes some issues and adds some small features. Enjoy!

Additions
- Added the ability to create and sell apps with a high Programming skill
- Added an emergency food system where rations are delivered to a household whose funds are very low

Improvements
- Improved in-game hints by turning them into a popup and adding icons
- Restore Entertainment need for skills based on how high the skill level is
- Display the names of food plates and woodworking objects in the action and hover descriptions
- Made the lot movement tool less scary when first opened
- Always auto-save, even when lot or character creator conditions are unmet

Fixes
- Fixed a crash when opening the woodworking menu (0.19.2)
- Fixed a rare crash when changelog images fail to download
- Fixed being able to pick up food plates that other Tinies are currently eating
- Fixed ambient sounds not fading properly between day and night
- Fixed the sell action not being saved and loaded properly
- Fixed the ability to create new outfits even when funds are too low to do so

# 0.19.0
![](media/changelog/0.19.0.png)

> Ui, Sound and Improvements Abound

Happy new year! Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/330680/0190-ui-sound-and-improvements-abound) or [on Steam](https://store.steampowered.com/news/app/1651490/view/3109171219652255208).

Additions
- Added carpet and puzzle piece floorings
- Added a cloud wallpaper
- Added UI transitions when switching between game modes
- Added ambient sounds which play based on where the camera is
- Added sounds for fireplaces as well as lamp, trash can and woodworking interactions
- Added additional colors for skin, eyes, as well as pastel and modern furniture and clothes
- Added a "Store in Household Storage" action to paintings
- Added a splash screen at the start of the game

Improvements
- Changed all cases of "person" and "people" in the game's text to "Tiny" and "Tinies", respectively
- Display a fade animation when a person dies
- Allow setting desired occasions for each outfit manually
- Made natural tiles (dirt, path, grass) connect to grass smoothly
- Only spawn particles if they'll be visible on screen
- A lot of performance improvements in various areas of the game

Fixes
- Fixed unfinished woodwork items escaping the action preview area
- Fixed additional VRAM being used the more tiles are edited during a single play session
- Fixed the high bun hairstyle not having the workout set icon
- Fixed colors overflowing out of the character creator screen for complex clothing items
- Fixed an exception when trying to fool around in occupied beds
- Fixed some actions throwing an exception when their action object is removed before the action starts

# 0.18.1
> Changelog Images, News Panel for Main Menu

Improvements
- Added images to the changelog that also display in-game
- Added a news panel to the bottom left corner of the main menu, which will be used for game-related announcements and updates
- Added a cheat to display a list of all cheats (Help, Cheats or List)

API
- Replaced most GameSpeed usage with a speed multiplier float
- Turned some Action methods into properties

# 0.18.0
![](media/changelog/0.18.0.png)

> Animations, Food and Sources

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/317472/0180-animations-food-and-sources) or [on Steam](https://store.steampowered.com/news/app/1651490/view/3111419849470831533).

Additions
- Added emotion sources that display when hovering over an emotion modifier
- Added cool UI animations
- Added a hint history menu to the options
- Added a tab to the character creator which allows writing custom descriptions for people and households
- Added a scientist job
- Added keybinds for zooming in and out
- Added a button to delete a household entirely
- Added some more emotion modifiers that trigger in social situations
- Added some more breakfast foods
- Added a lovely flowery grass tile
- Added a cute scarf

Improvements
- Made skill building activities fun if the skill level is high enough
- Improved memory usage in various cases
- Improved the way relationships between imported people are handled
- Dispose raw versions of packed textures, which reduces VRAM usage
- Limit the length of the notification history to 1024 entries
- Added the website's scrolling background to the main menu
- Replace all natural tiles with concrete when creating a room (not just grass)
- Replace alpha-based particles with scale-based particles to avoid rendering issues
- Also allow AI skill building when a person's job requires it
- Rebalanced job payouts and bills slightly
- Allow loading mods from a zip archive
- Made sounds in hidden rooms quieter
- Improved the look of the mouse cursor

Fixes
- Fixed daily job tasks not working correctly in some cases
- Fixed introverts being happy about being at home when they're not actually at home
- Fixed interaction menus displaying partly off-screen when opened sometimes
- Fixed chatting with people displaying the friendship particle constantly
- Fixed particles being lit from the outside despite being inside in some cases

# 0.17.5
Apologies for the many hotfix updates recently. If you encounter any more bugs, don't hesitate to let us know using the [report form](https://tinylifegame.com/bugreport).

Improvements
- Move natural objects to household storage when new room is built (0.17.4)
- Default names of lots on the map are now localized when creating a new save (0.17.3)
- Added an option to disable camera rounding, which helps with visual fragments on some screen sizes (0.17.3)
- Turned the mac build into an app bundle (0.17.2)
- Improved video ram usage of outside tiles (0.17.2)

Fixes
- Fixed mods crashing the game on startup
- Fixed inside tiles being hidden for newly built rooms until the game is restarted (0.17.4)
- Fixed a crash when rotating the camera on some machines (0.17.3)
- Fixed visual fragments on the terrain on some screen sizes (0.17.3)
- Fixed an exception when putting away books (0.17.1)

# 0.17.0
![](media/changelog/0.17.0.png)

> Life Goals, Reward Personalities and Daily Tasks

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/303915/0170-life-goals-reward-personalities-and-daily-tasks) or [on Steam](https://store.steampowered.com/news/app/1651490/view/4244072077610086379).

Additions
- Added Life Goals
- Added 5 new personality types that can be obtained by completing life goals
- Added a Daily Task system to some jobs
- Added Dutch translation ([Alexander Stekelenburg](https://twitter.com/superaxander))

Improvements
- Added an in-game hint that explains out of town actions
- Made pivot points pixel-perfect for people to avoid visual alignment inconsistencies
- Added Twitter button to main menu
- Improved GPU memory usage for tiles
- Improved the visual layout of the credits menu
- Added a minor personality types system and moved asexuality and aromance from separate properties to minor personalities
- Renamed Lazy personality to Laid-Back
- Automatically fill empty lot employments and only bring up the menu if there are no available exported people
- Made the language menu display the completion of localizations

Fixes
- Fixed newly placed tiles looking weird sometimes
- Fixed an action exception when someone is fired while at work
- Fixed character creator crashing when someone is bald
- Fixed the scrap action being shown as unavailable on all objects if a person is holding an item
- Fixed scrapping an object failing if the item is held
- Fixed three-seater sofas not actually having three seats
- Fixed food items missing creator information in their tooltip
- Fixed concurrency issues when saving occasionally
- Fixed people displaying particles when hidden

# 0.16.1
Additions
- Added "[Give Feedback or Report Bug](https://ell.lt/tlfeedback)" buttons to the in-game and main menus
- Added [a cheat](https://docs.tinylifegame.com/articles/cheats.html) to take a full-size screenshot of the map
- Added a Distant Relative genealogy
- Added a tooltip for when buttons are grayed out due to lot requirements being incomplete in build mode
- Added dutch translation ([Alexander Stekelenburg](https://twitter.com/superaxander))

Improvements
- Made reporting non-crashing exceptions easier by pre-filling the form automatically
- Allow pressing Escape to open and close menus
- Allow scrapping objects by clicking their parents (the woodworking table or the easel) too
- Allow removing the last person from the household in the character creator to delete it
- Improved depth calculations of roof-attached objects
- Moved wisteria to the Outside tab in the furniture tool
- Improved the visuals of the cheat ui
- Renamed "Disable Hints" to "Skip Hints" in the options

Fixes
- Fixed color selector not updating when cloning wallpaper, openings, tiles or roofs
- Fixed some table and desk positions causing chairs to be seen as invalid or unavailable

# 0.16.0
![](media/changelog/0.16.0.png)

> Woodlands and Visitors

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/289260/0160-woodlands-and-visitors) or [on Steam](https://store.steampowered.com/news/app/1651490/view/2949282742498975401).

Additions
- Added the Woodlands Set with art by [faellynna](https://www.instagram.com/faellynna/), which includes a Woodworking skill and a large variety of new build mode items:
  - 34 new furniture items, including the woodworking table and new types of decorative items
  - 4 flooring tiles
  - 5 wallpapers
  - 2 roof styles
  - 8 character creator items
- Added a large new forested area with dirt footpaths to the eastern part of town, along with some new houses and empty lots
- Added emotion sting sound effects by the lovely [Jamal Green](https://jamalgreenmusic.com)
- Added a regular visitors system that allows for people from exported households to visit and interact with the town without living there
- Added a few households that are exported by default to populate the visitors system
- Added the ability for furniture to get dirty and having to be cleaned
- Added an "Invite into Household" interaction
- Added a way to scrap other people's crafts on public lots
- Added italian translation ([SchiavoAnto](https://twitter.com/schiavoanto))

Improvements
- Improved the chatting interaction on the computer, now allowing people to chat with specific people
- Added more in-game hints for various build mode tools
- Added a configurable keybind for increasing and decreasing game speed
- Cleaned up the localization of money and always display money amounts with decimals
- Allow easily deleting items in the move tool by pressing the Del key when hovering over them
- Split the Import menu into custom and default content and improved the household import menu
- Move invalidly placed objects into the furniture storage instead of selling them
- Made people leave the room on their own if they see someone being inappropriate
- Rebalanced bills slightly
- Made people tell others to leave the room when they start fooling around
- Disallow trees from being placed below roofs
- Made trees have a minimum distance from walls
- More gracefully handle Steam cloud sync exceptions
- Color lots on the map based on whether people live there
- Added the ability to clone roofing, openings, wallpapers and tiles in build mode

Fixes
- Fixed paintings being placed on easels incorrectly at fast game speeds
- Fixed a crash when hovering over people with lot employments whose personality is known
- Fixed 3D sounds breaking on camera rotation
- Fixed depth calculations being incorrect for larger and oddly-shaped objects
- Fixed the ability to hack yourself
- Fixed roofing having incorrect display names
- Fixed a crash when exiting the move tool with an item from storage selected
- Fixed hidden (out of town) people still spawning particles and emotes
- Fixed the ability to ask lot employment people to leave not working
- Fixed furniture with parents sometimes not being imported correctly
- Fixed people turning around visually for a single frame when starting social actions while sitting
- Fixed roofs having incorrect depth calculations in some camera rotations
- Fixed people not leaving occasionally when being asked to leave
- Fixed money not being subtracted when importing new households
- Fixed practice speech and jokes actions going on forever if done automatically

# 0.15.0
> Barbecue Trash Cleaning

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/277913/0150-barbecue-trash-cleaning) or [on Steam](https://store.steampowered.com/news/app/1651490/view/2968419780808932932).

Additions
- Added a barbecue and some grillable food items
- Added a picnic table with attached benches
- Added a new nature-style park with picnic tables and barbecues to the map
- Added an outdoor trash can and a Throw Away interaction
- Added a cleaning skill and some new, related actions
- Added chinese translation ([Rosareven](https://github.com/rosareven))
- Added multiple new funny actions
- Added a few personality-related emotions and actions
- Added a trash collector global employment which will go around public lots and clean up trash that was left behind

Improvements
- Made off the grid (ALT) furniture placement pixel-based
- Improved font smoothing, making small text and tooltips easier to read
- Made sounds in hidden rooms a lot quieter
- Made households on the default map know the personality types of their members
- Don't let people that are hidden from the player starve to death
- Rebalanced jobs, making them give you less ridiculous amounts of money
- Made people with global lot employments have slower need decay, stopping the mail deliverer from passing out constantly
- Made tooltips on invalid actions display instantly

Fixes
- Walls will now only be removed using the Remove tool when there is a line drawn through them, or when both sides are contained in a rectangle
- Disallow wall hanging objects from being placed off the grid
- Fixed paintings on easels being hidden with the Hide Hanging Objects option enabled
- Fixed people trying to get ingredients to cook when there were no available counters to prepare the food on
- Fixed people stuttering visually when on their way to social actions
- Fixed cars being spawned erroneously when the map is loaded

# 0.14.0
> Lamps, Lot Movement, Speech Sounds!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/274082/0140-lamps-lot-movement-speech-sounds) or [on Steam](https://store.steampowered.com/news/app/1651490/view/4430963222678444595).

Additions
- Added dynamic lighting and two lamps, a ceiling and a floor one
- Added speech sounds and a way to change a person's voice pitch in the character creator
- Added skill requirements for job promotions
- Added information to skill levelup notifactions that lists what actions are now unlocked
- Added an option to increase the overall brightness of the world at night
- Added an option to hide objects attached to walls and ceilings

Improvements
- Overhauled the Move Lot tool, allowing for much easier lot movement and rotation
- Made it likelier for people to pay the bills if their needs are extremely low
- Improved performance of in-world rendering
- Require the "Allow AI Important Actions" option to be turned on for people to repair things automatically in the active household
- Made hints and loading screen info display the current keybind for actions, not the default one
- Made puddles evaporate and disallowed mopping on natural ground
- Improved the volume of in-world audio (temporarily, there are still [more issues to fix](https://github.com/MonoGame/MonoGame/issues/7532))

Fixes
- Fixed the ring menu breaking with a single action on the second page
- Fixed romantic actions displaying for family members if someone is too sad (yikes)
- Fixed incorrect furniture collisions between wall- and floor-based objects
- Fixed action prompts having close buttons when not exitable
- Fixed some visual inconsistencies with particles that are attached to objects
- Fixed held items being deleted when switching out of the Move tool
- Fixed corner-based furniture being able to connect incorrectly, especially counters
- Fixed a wall rendering inconsistency in some camera rotations

# 0.13.1
> It's the little things

Additions
- Added the ability to ask people about their personalities

Improvements
- Wait longer until a partner is ready for social actions if the action was invoked by the player
- Improved positioning of some objects

Fixes
- Fixed the visual position being incorrect when running on treadmills
- Fixed most foods not having to be cooked
- Fixed some actions not completing correctly, causing cars to get left behind after traveling
- Fixed an action exception if a chair becomes occupied

# 0.13.0
> Camera Rotation and a Larger Map!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/271199/0130-camera-rotation-and-a-larger-map) or [on Steam](https://store.steampowered.com/news/app/1651490/view/2967291343236374275).

Additions
- Added camera rotation, which can be used using the C key or the rotation buttons in the top right
- Added a new, more commercial-looking area to the game's map that currently features a park and a new resident
- Added Steam cloud syncing when playing while Steam is open
- Added some more social actions, especially ones related to emotions and skill levels
- Added a proper logo to the game, created by [Tector](https://www.instagram.com/tector_pixel/)
- Added getting water and washing your hands at sinks

Improvements
- Improved action navigation by adding pages to the ring menu
- Added some more plant and wood color schemes
- Added an "are you sure" screen for map employment changes
- Made objects be worth less when sold after being used
- Improved the roofing tool by displaying what's going on
- Made people a little less fast when feeling energetic
- Handle more action-related issues gracefully by displaying a notification about them
- Improved the options menu by adding tabs to it
- Made all emotion modifiers have higher values by default to allow for more nuanced emotions
- Improved rendering performance
- Added more info about the progress of map loading to the loading screen
- Added food preview icons to the food creation menu
- Made people display emotes while practicing speech or jokes
- Order stuff in the buy menu ascending by price
- Added some error handling for loading broken save games

Fixes
- Fixed a crash if asexual people tried to start new relationships
- Fixed a crash when modded furniture is removed from the world
- Fixed people being able to "go here" into walls
- Fixed some furniture items always reverting to their default colors when loading a save
- Fixed people being able to place wall-hanging items like paintings on the ground
- Fixed placing computers on desks (and similar stuff) being difficult
- Fixed some depth inconsistencies with rugs and wall-hanging objects like paintings

# 0.12.2
This is a small update that features several accessibility features based on information gathered in the [Tiny Life Roadmap Survey](https://ell.lt/tinysurvey). If you haven't taken part in the survey yet, you can still do so now!

Additions
- Added lot rotation to the Move Lot tool
- Added an in-game hints system, which can be disabled in the options for more experienced players
- Added a chance for angry people to autonomously do mean actions
- Added a Controls section to the options
- Added an X button to menus to make it clear that you can close them
- Added an error handler for when actions break, causing them to display a notification instead of crashing the game
- Added a way to delete the held object in build mode (by pressing the delete key)

Improvements
- Improved the saves menu by adding rename and delete buttons
- Improved visual feedback on the household selection ui
- Improved the way furniture looks when not placeable
- Increased the size of notification text

Fixes
- Fixed relationship changes being displayed for both people involved
- Fixed the top right corner of the screen not allowing for in-world interactions
- Updated German localization

# 0.12.1
- Fixed Make Mod and Write Book actions crashing the game
- Updated German localization

# 0.12.0
> The Fitness Set

Watch [the trailer](https://www.youtube.com/watch?v=e86RRKPNLv0) and read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/264773/0120-the-fitness-set) or [on Steam](https://store.steampowered.com/news/app/1651490/view/2990934608186477339).

Additions
- Added the Fitness Set, with art by [Tector](https://www.instagram.com/tector_pixel/), which includes a fitness skill and several new furniture and clothing items:
  - Five new hairstyles
  - One new pair of pants and shoes
  - Three new tops
  - 11 new furniture items, including a treadmill, a standing desk, a protein shaker and some decorative items
- Added aromance and asexuality, both of which can be set in the character creator
- Added two additional windows and one additional door
- Added an outfit system that allows you to create multiple outfits for a person and switch between them anywhere

Improvements
- Made social actions less likely to be executed by the AI if they've been done recently
- Made people mop more puddles after mopping a puddle automatically
- Made people more likely to do the dishes, so that they actually do the dishes
- Fixed a few memory leaks that caused more RAM to be used the more saves were loaded/exited in one session
- Improved map rendering performance

Fixes
- Fixed some visual inconsistencies with the in-game ui
- Fixed held items being on a lower layer, causing them to look incorrect
- Fixed negative social actions taking away from relationships too little
- Fixed the ability to place ground objects on other ground objects
- Fixed the position of the coffee table being slightly off in one rotation
- Fixed covered tiles not being included in a lot's covered area
- Fixed people going to weird locations when visiting non-residential lots

# 0.11.0
> More Actions, More Skills, More Personalities, More Pride!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/260838/0110-more-actions-more-skills-more-personalities-more-pride) or [on Steam](https://store.steampowered.com/news/app/1651490/view/3028088035178415265).

Additions
- Added a lot more social actions in various categories
- Added Introverted, Extroverted and Thinker personality types
- Added a Gaming skill and associated actions
- Added an Angry emotion
- Added doors, and the ability to lock them
- Added several LGBT flags as wall decorations
- Added multiple TV stations which each have their own effects
- Added Brazillian Portuguese localization (PinguinAnimation)
- Added a Credits menu
- Added the ability for people to put items on the ground

Improvements
- Made using the same social actions over and over get boring
- Made people hold a mop when mopping floors
- Made people display emotes when waking someone up
- Made people's current emotions be displayed under their portrait
- Replaced all frames on new saves with doors
- Slightly rebalanced Writing royalties

Fixes
- Fixed people making group meals too often
- Fixed people using objects in different rooms if they're technically closer
- Fixed people cleaning up in-progress food automatically
- Fixed being unable to move objects if the furniture storage contains furniture
- Fixed people getting up from chairs for one frame inbetween actions
- Fixed smelly particles appearing below objects
- Fixed hair changing colors when selecting a different hairstyle
- Fixed multiple invalid game states which could cause crashes

# 0.10.1
> In-depth writing skill and more AI depth!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/256150/0101-in-depth-writing-skill-and-more-ai-depth).

Additions
- Added an option that causes people in unplayed households to do skill building activities automatically (if their personality or existing skills allow it)
- Added a confirmation prompt for quitting your job

Improvements
- Rebalanced some actions and skills, especially in respect to skill building speed
- Made people clean more dishes automatically after cleaning a dish
- Updated the descriptions of all personality types
- Updated the map (when creating a new save file) to give every household jobs by default

Fixes
- Fixed mirrored objects (like paintings) looking incorrect
- Fixed issues with migrating from older save files
- Fixed sitting on sofas and benches looking wrong
- Updated German localization

# 0.10.0
> New colors, clothes and many fixes!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/254608/0100-new-colors-clothes-and-many-fixes).

Additions
- Added two new tops, four new bottoms, and four new hairstyles
- Added keyboard lighting for logitech, razer and corsair keyboards
- Added various new color schemes to objects

Improvements
- Made more emotions influence social actions
- Made wallpapers and windows easier to apply by highlighting any part of the wall
- Made drywall free, but ugly to people

Fixes
- Fixed people queueing up actions with people who have already gone home
- Fixed importing households doubling their money
- Fixed the ability to have infinitely large households when importing
- Fixed a crash when grabbing an empty serving
- Fixed various depth rendering issues with small objects
- Fixed family meals costing the same as single servings
- Fixed people being able to talk through walls and doors

API
- Simplified clothing textures by removing redundant frames
- Added various events for people and actions

# 0.9.0
> Kick Out Your Annoying Aunt and Sofas

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/248431/090-kick-out-your-annoying-aunt-and-sofas).

Additions
- Added new furniture: A sofa, a coffee table, and a bathroom sink
- Added tabs to the furniture tool
- Added the ability for food to expire
- Added a food platter and a "call to meal" action for large households
- Added an option to allow people to do important actions, like paying the bills, automatically
- Added an option to merge and split households (from and to exported households)

Improvements
- Improved zoomed out rendering performance by hiding small items like grass
- Improved exported households, which will now contain the furniture storage and maintain relationships with other people
- Improved the build tool and lot outlines (to be isometric)
- Improved the color picking abilities of the bookshelf
- Updated German localization

Fixes
- Fixed an issue on some operating systems where textures were mixing visually
- Fixed the Paint action being on too many objects when a person is uncomfortable

# 0.8.2
Fixes
- Fixed a crash if an object had no default rotation assigned
- Fixed a hang when loading a game with an object of invalid rotation
- Fixed a crash when picking up non-rotating furniture

# 0.8.1
Fixes
- Fixed in-world sounds being a lot quieter than menu sounds
- Fixed a rare crash on load when removing outdated objects
- Fixed a crash with the skills menu on certain window sizes

# 0.8.0
> Mail Carriers, Bills and New Screenshots

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/236301/080-mail-carriers-bills-and-new-screenshots).

Additions
- Added a mail carrier that delivers mails daily
- Added bills that are delivered and need to be paid
- Added a water and electricity rating system that determines how expensive bills are
- Added bar counters that can be sat and worked at
- Added game hints to the loading screen
- Added dirt flooring and two new wallpapers

Improvements
- Made power and water be shut off if bills are not paid, disabling many actions
- Made job levelups give an additional monetary bonus

Fixes
- Fixed walls not having their shadow
- Fixed the bookshelf intersecting with another texture
- Fixed some crashes related to loading and saving
- Fixed camera scaling being incorrect when launching in fullscreen

# 0.7.0
> Breaking Furniture, Programming, and Many Improvements!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/223659/070-breaking-furniture-programming-and-many-improvements).

Additions
- Added food quality, which is influenced by the cooking skill
- Added object reliability, objects breaking and a repair skill
- Added a programming skill and some related actions
- Added the ability to try to gauge the relationship level of others
- Added Focused and Creative emotions
- Added a furniture storage to build mode
- Added a TV furniture item
- Added a "fool around" action for people who are romantic with each other
- Added a large amount of new food types
- Added a white outline around highlighted objects
- Added visual borders to the map
- Added an option to change the auto-save interval
- Added a few new flooring options
- Added the modern single bed
- Added the ambitious personality type
- Added three more job types
- Added two default exported households that ship with the game
- Added a button to choose a random first and last name for a person
- Added hotkeys for switching people (tab) and opening different tabs (number keys)
- Added the ability to give lots names

Improvements
- Made the last played household display in the Load Game menu
- Made clothing cost money
- Made computer screens display images for each action
- Made Uncomfortable emotion get worse the lower a need is
- Improved some existing personality types

Fixes
- Fixed getting embarrassed at yourself when showering or on the toilet
- Fixed non-sellable objects like gravestones being removed when importing a lot
- Fixed people placing items far away on large tables
- Fixed the sleeping pose displaying in the wrong location in beds sometimes
- Fixed being able to sell other people's paintings
- Fixed some sounds being too quiet or too loud
- Fixed being able to take food that someone else is currently eating
- Fixed off-the-grid objects (placed using Alt) having incorrect visual depth

API
- Allow mods to have icons
- Allow clothes to have multiple texture layers

# 0.6.0
> Romance, Sounds and a Lot More!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/216521/060-romance-sounds-and-a-lot-more).

Additions
- Added romance, romantic interactions and the Frisky emotion
- Added sound effects to various actions and objects
- Added job leveling based on work performance
- Added trees and grass patches and a new house to the map
- Added actions to wake someone up and quit your job
- Added some more positive emotions
- Added working animations
- Added a lot of skin and hair colors

Improvements
- Improved the lot and household import and export menus
- Notification history is now saved to file per save
- People can now only sleep in the same bed as someone they're romantic with
- Gameplay options are now stored per save
- Made it less likely for people to visit other lots at night

Fixes
- Fixed being able to remove openings and walls on other lots
- Fixed portraits not updating in the charcter creator
- Fixed plants not being removed when placing concrete or wood tiles
- Fixed being able to do several things (like showering) while holding something
- Fixed positive emotions taking precedence over negative ones if their total amounts are equal

# 0.5.2
Improvements
- Improved the changelog panel on the main menu
- Made the current emotion be more logically based on modifiers (by separating emotions into general categories)

Fixes
- Fixed people getting stuck in social actions occasionally
- Fixed unplayed disbanded households kicking you to the map select screen
- Some performance and RAM usage improvements

# 0.5.1
Improvements
- Improved the Person AI to drastically decrease the chance of people passing out and dying from low needs

# 0.5.0
> Emotions!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/212031/050-emotions).

Additions
- Added emotions
  - Added 7 emotion types
  - Made 22 events cause emotions
  - Made some actions and skills be affected by emotions
- Added a new family and house to the map
- Added genealogy (which has no effect yet)

Improvements
- Improved the look of the character creator's icons
- People will now leave the room when someone uses toilets or showers

Fixes
- Fixed the console displaying when launching the game
- Fixed a crash when launching the game for the first time

API
- Added some events

# 0.4.1
Fixes
- Fixed phantom cars when starting a new game

# 0.4.0
> Consequences! Death!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/210682/040-consequences-death).

Additions
- Added low need consequences:
  - Passing out from low energy need
  - Peeing yourself from low toilet need
  - Starving from low hunger need
- Added death and gravestones
- Added a tool to move the contents of a lot
- Added some mean actions and action icons
- Added various particles, including for sleep
- Added an in-game menu and a ui scale option
- Added a tool to move existing furniture

Improvements
- Changed the game's currency to "Tiny Bucks"

# 0.3.1
> Jobs! Hyperspeed!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/206044/031-jobs-hyperspeed).

Additions
- Added jobs: You can get a job at the computer and earn money by going to work
- Added negative relationships
- Added an extreme speed setting that can be used when everyone is sleeping or working
- Added texture packing to increase rendering performance

Fixes
- Fixed some crashes and deadlock issues involving actions and pathfinding

API
- Finished documentation
- Texture packing introduces a breaking change

# 0.3.0
> More skills, more stuff to do!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/203072/030-more-skills-more-stuff-to-do).

Additions
- New skills: Painting, charisma and humor
- New furniture: Mirror, bookcase and books
- Added descriptions for needs and skills
- Added a destruction tool for build mode
- Added action categories

Improvements
- Back up the save file before loading

# 0.2.3
> Personality Types!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/201694/023-personality-types).

Additions
- Added painting and selling paintings
- Added personality types. To add personality types to your existing people, press F1 and type "EditPerson"
- Added a visual effect for money gain/loss

Improvements
- Increased the starting funds
- Improved the map by adding a park

Fixes
- Various action bugfixes

API
- More documentation

# 0.2.2
> Nicer menus, more mod abilities!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/199801/022-nicer-menus-more-mod-abilities).

Additions
- Added mod list and "Open Game Folder" button to Options menu
- Added a long hairstyle

Improvements
- Improved some menus visually
- Allow for mods to add tiles and wallpapers

API
- Started on modding API documentation

# 0.2.1
Fixes
- Fixed a launch crash that was affecting some people

# 0.2.0
> Custom Mods!

Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/198831/020-custom-mods).

Additions
- Added the ability to create mods!
- Added more social actions
- Added a system for public spaces (currently only parks)
- Added household exporting and importing
- Added the easel and (secret) paintings, neither of which do anything yet

Improvements
- Show particles when the friendship status changes

Fixes
- Fixed a few minor bugs

# 0.1.2
Additions
- Added an options menu, including a language selection
- Added lot exporting and importing, allowing you to share lots

Improvements
- Made lots have value: Families can now only be created for cheap enough lots
- Some visual improvements, including a new font
- When searching for spots to put down items, people now look for closest locations correctly

Fixes
- Fixed being able to cheat money by deleting rooms

# 0.1.1
Read the devlog [on itch](https://ellpeck.itch.io/tiny-life/devlog/193425/version-011).

Additions
- Added gridless placement by holding the alt key
- Added furniture picking using the middle mouse button

Improvements
- Made certain actions count as inappropriate on other lots (like sleeping and showering)
- Made social actions and notifications display portraits
- Made objects slotted into object spots not count for path finding
- Moved the game directory to local app data

Fixes
- Fixed the current household data persisting when going to build on another map
- Fixed an issue with driving causing crashes occasionally

# 0.1.0
- Initial alpha release
