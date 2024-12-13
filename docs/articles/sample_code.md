# Sample Code for Modders
This page collects various sample code snippets intended to help modders get started with more complex pieces of code like furniture that produces light, social actions, and more.

If you'd like for more examples of specific content pieces to be added to this list, don't hesitate to [ask on the Discord](https://link.tinylifegame.com/discordweb) or [open an issue](https://github.com/Ellpeck/TinyLifeWeb/issues) about it.

Feel free to copy these examples into your own mods and modify them as needed. Please note that this is not allowed for parts of the game's code that aren't listed here, as they are protected by the game's license.

## Furniture

### Furniture With Light
The Sleek Floor Lamp item's code:
```cs
public static readonly FurnitureType SimpleLamp = FurnitureType.Register(new TypeSettings("SimpleLamp", new Point(1, 1), ObjectCategory.Lamp, 80, ColorScheme.Grays, ColorScheme.MutedPastels) {
    ElectricityRating = 1,
    LightSettings = {
        CreateLights = f => [
            new Light(f.Map, f.Position, f.Floor, Light.CircleTexture, new Vector2(6, 8), Color.LightYellow) {
                VisualWorldOffset = new Vector2(0.5F)
            }
        ]
    }
});
```

The Paper Lantern Fairy Lights item's code, which is a bit more complex since they're attached to walls:
```cs
public static readonly FurnitureType BulbFairyLights = FurnitureType.Register(new TypeSettings("BulbFairyLights", new Point(1, 1), ObjectCategory.Lamp | ObjectCategory.WallHanging | ObjectCategory.NonColliding | ObjectCategory.CanCoverWindow, 25, ColorScheme.White) {
    DecorativeRating = _ => 1,
    Tab = Tab.Decoration | Tab.Lighting,
    LightSettings = {
        CreateLights = f => f.AttachedWall == null ? [] : [
            new Light(f.Map, f.Position, f.Floor, Light.CircleTexture, new Vector2(1), Color.LightGoldenrodYellow) {
                PositionOffset = WallLike.GetCenterBottomPos(f.AttachedWall.Positions[0], f.AttachedWall.Positions[1]) - f.Position,
                VisualWorldOffset = new Vector2(1.6F),
                Rotation = MathHelper.ToRadians(25 * (WallLike.IsVerticalForCamera(WallLike.IsVertical(f.AttachedWall.Positions[0], f.AttachedWall.Positions[1])) ? -1 : 1))
            }
        ]
    }
});
```

## Fences
The EzTown Metal Fence's code:
```cs
FenceType.Register(new FenceType("ModernMetalFence", 40, null, TextureHandler.FenceTextures, new Point(0, 0), ColorScheme.MutedPastels));
```

## Openings
Openings holes in walls that are usually filled with windows or doors. 

### Windows
Here's the code for the Small Wooden Window:
```cs
OpeningType.Register(new OpeningType("SmallWoodWindow", TextureHandler.OpeningTexture, new Point(0, 0), WallMode.SmallWindow, 650, ColorScheme.DyedWood, 0.5F));
```

### Doors
To create different types of openings, like arches and doors, the `construct` parameter in the constructor can be used. All opening types that the game currently supports, such as [`WalkableOpening`](xref:TinyLife.World.WalkableOpening), [`AnimatedDoor`](xref:TinyLife.World.AnimatedDoor) and [`LockableAnimatedDoor`](xref:TinyLife.World.LockableAnimatedDoor), have a static `Construct` method, a reference to which can simply be passed to the `construct` parameter:
```cs
OpeningType.Register(new OpeningType("SmallArch", TextureHandler.OpeningTexture, new Point(2, 0), WallMode.Door, 900, ColorScheme.DyedWood, 1, WalkableOpening.Construct));
OpeningType.Register(new OpeningType("SmallWoodDoor", TextureHandler.OpeningTexture, new Point(6, 0), WallMode.Door, 950, ColorScheme.DyedWood, 0, LockableAnimatedDoor.Construct));
```

### Wall Modes
Notably, opening types can specify the wall mode that they want to use, which determines the cutout shape that the opening will create in the wall. A set of existing wall modes can be found in the [`WallMode` class](xref:TinyLife.World.WallMode). If required, you can also add new wall modes through the `WallMode.Register` method, in which case you additionally have to specify a white texture that is transparent where the wall should be cut out.

## Actions

### Simple Social Actions (Talk Actions)
The `TalkAction` class supplies a set of factory methods that allow easily creating social actions between Tinies which generally only involve talking and have a chance to succeed or fail, yielding friendship or romance gains or losses in return.

This is the most basic social action in the game, the Chat action:
```cs
public static readonly ActionType Talk = ActionType.Register(TalkAction.Create("Friendly/Talk", _ => 90, new TalkSettings {
    GoBadlyChance = _ => 0.01F, TalkMinutes = 10, FriendshipGain = _ => 1600,
    EmoteCategory = EmoteCategory.General, SpeakStyle = SpeakStyle.Neutral | SpeakStyle.Happy | SpeakStyle.Questioning
}));
```

Here is an example of a more complex talk action:
```cs
public static readonly ActionType AskAboutParenting = ActionType.Register(TalkAction.Create("Friendly/AskAboutParenting", _ => 50, new TalkSettings {
    FriendshipGain = _ => 3000, GoBadlyChance = _ => 0.02F, TalkMinutes = 15,
    EmoteCategory = EmoteCategory.General | EmoteCategory.Travel, SpeakStyle = SpeakStyle.Questioning | SpeakStyle.Confused | SpeakStyle.Scared,
    PartnerSpeakStyle = SpeakStyle.Confident | SpeakStyle.Affirmative | SpeakStyle.Happy | SpeakStyle.Neutral,
    Settings = {
        RequiredAges = AgeGroup.AdultOrOlder, RequiredPartnerAges = AgeGroup.AdultOrOlder,
        CanExecute = (i, _) => ActionType.Partner(i)?.Relationships.Any(r => r.Genealogy == GenealogyType.Parent) == true ? CanExecuteResult.Valid : CanExecuteResult.Hidden
    }
}));
```

## Life Goals (and Daily Tasks for Jobs)
Here are some examples of how the `GoalSet` system can be used:
```cs
// execute the research business plans action for half an hour
AutoGoalInfo.Timed<Action>("ResearchBusinessPlans", TimeSpan.FromMinutes(30), a => a.Type == ActionType.ResearchBusinessPlans, GoalTrigger.ActionUpdate)

// complete the read action 10 times
AutoGoalInfo.Amount<ReadAction>("Read10Times", 10, triggers: GoalTrigger.ActionCompleted))

// talk to 10 distinct people
AutoGoalInfo.Distinct<TalkAction>("TalkTo10People", 10, a => a.Partner.Id.ToString(), triggers: GoalTrigger.ActionCompleted)

// earning tb3000 in any way
AutoGoalInfo.Amount<object>("Earn3000TinyBucks", 3000, triggers: GoalTrigger.EarnMoney)

// earning money through creating the painting furniture specifically
AutoGoalInfo.Amount<Painting>("Earn1000FromPaintings", 1000, triggers: GoalTrigger.EarnMoney)

// earning money through a book project specifically
AutoGoalInfo.Conditioned<Project>("EarnRoyalties10Books", p => p.Person.Projects.Count(pr => pr.Type == "Book" && pr.DailyPay > 0) >= 10, GoalTrigger.EarnMoney)
```

Here is the full code for the game's Household Hero life goal as a reference:
```cs
public static readonly LifeGoal HouseholdHero = LifeGoal.Register(new LifeGoal("HouseholdHero", PersonalityType.HouseholdHero,
    new GoalSetInfo(
        AutoGoalInfo.Amount<Action>("Clean5Objects", 5, a => a.Type == ActionType.Clean || a.Type == ActionType.CleanDish, GoalTrigger.ActionCompleted),
        AutoGoalInfo.Conditioned<Person>("CleaningLevel3", p => p.HasSkillLevel(SkillType.Cleaning, 3), GoalTrigger.PersonUpdate)),
    new GoalSetInfo(
        AutoGoalInfo.Amount<RepairAction>("Repair3Objects", 3, triggers: GoalTrigger.ActionCompleted),
        AutoGoalInfo.Conditioned<Person>("RepairLevel5", p => p.HasSkillLevel(SkillType.Repair, 5), GoalTrigger.PersonUpdate)),
    new GoalSetInfo(
        AutoGoalInfo.Conditioned<Person>("CleaningLevel5", p => p.HasSkillLevel(SkillType.Cleaning, 5), GoalTrigger.PersonUpdate),
        AutoGoalInfo.Conditioned<Person>("RepairLevel10", p => p.HasSkillLevel(SkillType.Repair, 10), GoalTrigger.PersonUpdate))) {
    AllowedAges = AgeGroup.OlderThanChild
});
```

For more info on goal sets and how they can be used for life goals and job daily tasks, see [this Discord discussion](https://discord.com/channels/181435613147430913/981562300592947220/1281723775586406411).
