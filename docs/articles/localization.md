# Contributing Localizations

![](https://translate.ellpeck.de/da5ba3ec-ab26-4ff2-a1ff-24b817c2f7f6/translations_badge.svg)
![](https://translate.ellpeck.de/da5ba3ec-ab26-4ff2-a1ff-24b817c2f7f6/percentage_reviewed_badge.svg)

If you're interested in contributing new languages to Tiny Life's localization or editing the text of existing translations, it is greatly appreciated! Sadly, I don't have the ability to pay translators right now, so any work you do will be volunteer-based. That being said, you will, of course, be credited in the game's Credits Menu with a link to a social media profile of your choice, and you will greatly contribute to the game's community!

If you want to join the team of translators, the first step is to message Ellpeck, either privately after joining [the Discord server](https://link.tinylifegame.com/discord), or in the `#tinylife` channel. You'll also need an account on [the translation site](https://translate.ellpeck.de/), where you can log in directly with a GitHub or Discord account.

## General Notes
The following list contains a few bits of additional information that you should keep in mind when translating:
- You don't need any kind of programming or advanced file editing experience, since you'll be translating on the previously mentioned translation site. When translating, you should set an existing language as your `reference locale` (preferably English), since most of the term names don't give much information about the actual content of the text they represent.
- In this document, I'm using the words "translate" and "localize" semi-interchangeably, but it should be noted that this is a **localization**, meaning any jokes or references that don't make sense in the language you're translating for should be edited to make them sound logical.  
  *For example, a pun like `Standing Up to Sitting` might not work well in other languages, where "standing up to something" is not a valid figure of speech. As a result, the translation shouldn't literally reference the act of standing up if it doesn't also mean "making a defense against something".*
- I know that this is difficult to accomplish in some languages, but please try to keep gender-specific language to a minimum. If this is entirely impossible in your language, please try to use constructs that your place of residence usually sticks to, similar to the English "Latinx" or the German "Mitarbeiter:in".
- Tiny Life is an inclusive game, for all genders, sexualities, and identities. Even if the language you translate for is used by a country where you fear that certain aspects of the game might be ill-received, translations **should not be altered** to remove references to any such things.
- Tiny Life should be suitable for as many audiences as possible, so please avoid using sexually explicit terms and stick to innuendo when it comes to *fooling around* and the like. In a lot of cases, this is less of a concern about the game's audience and more of a concern about the game's age ratings in stores. 
- There are several placeholders and formatting codes that **should not be deleted or changed**, notably:
  - `{0}`, `{1}`, etc. are placeholders for text that is fed into the localized term dynamically. The order of these placeholders is not important, but the number that they contain is.  
  *For example, in `Should {0} really scrap their book {1}?`, the `{0}` will be replaced with the person's name, and the `{1}` will be replaced with the name of a book. If your localization requires that the book's name is placed before the person's name in the sentence, all you have to do is swap the order of these placeholders.*
  - `<tb>`, `<i ...>` and other constructs that are surrounded by `<` and `>` are formatting codes. These should be kept in place, and any additional text between the `<` and `>` should also be kept in place.  
  *For example, in `You can rotate furniture by pressing <k Rotate>.`, the formatting code will be replaced with the key value of the keybind to rotate furniture and other objects. If the word `Rotate` in it was changed (or translated), the link to the keybind would be broken.*
- The proper noun for a person in the game is "a Tiny", with the English plural being "Tinies". This term can be slightly or heavily varied based on the language, as long as it's kept consistent. *For example, German words adapted from English usually don't use `ie` instead of `y` for plural, so the German plural is "Tinys".*
- To get started translating, simply select the "Review" section in the left sidebar of the project, and then select the language you're working on from the dropdown at the top. All the strings that are either untranslated, or whose English versions have changed, will be listed here. Once you're happy with a string's translation, you can press the green checkmark button to mark it as completed.
- To test your translation, you can export it and put it into the game. To export it, head to the "Files" section in the left sidebar, and then press the `Localization.json` file's export button, which looks like a little cardboard box. In the menu that comes up, select the language you're working on from the dropdown, and leave everything else the same. Now, you can put the exported file into the `Content/Localization` directory of the game's installation. If it's not part of it already, its name also has to be added to the `LanguageNames.json` file.
- You don't need to finish the translation to your language, by any means! Since you're doing this for free, I don't expect you to, either. An incomplete translation means that some in-game text will be translated, and it also means that anyone who comes along after you will have less work to do!

## Language Overrides
Strings that begin with `Overrides` are part of the overrides section, which is a set of settings that determine the way parts of the game operate when a language is applied. These should not be translated, and set to the appropriate values instead.
- `DisplayLastNameFirst` determines the order that a Tiny's first and last names are displayed in. Set this to `true` to display last names first.
- `HasGenderedPronouns` determines whether the pronoun customization menu, as well as Tinies' pronouns, should be displayed in-game. Set this to `false` for languages that don't have gendered pronouns, or languages that don't have pronouns at all. **Do not change this value for any other reason.**

## Notes for Specific Languages
### English
- The names of achievements in the English versions are references to popular culture. In other languages, they can be pretty much anything else, including popular culture references that make sense in the context of the language, provided they also abide by the information above.

### German
- The German localization uses gender-neutral language (*Geschlechtergerechte Sprache*) for its translations. The following spellings are used:
  - "Er/sie", "sein/ihr" and other pronouns that can't be appreviated neatly are combined using a forward slash.
  - "Mitarbeiter:in", "Partner:in" and other words that have the same structure are abbreviated using a colon (*Gender-Doppelpunkt*) if possible.
  - The word "Tiny" is gender-neutral: "ein:e Tiny", "der/die Tiny".
- The plural of "Tiny" is spelled with a `y`, in keeping with other words borrowed from English: "die Tinys".
- Achievement names in the German localization are just brief, funny descriptions of the achievement.

### Italian
- The Italian localization uses gender-neutral language for its translations. The following spellings are used:
  - "Il/la", "tuoi/tue" and other words that change according to their gender and that can't be abbreviated neatly are combined using a forward slash.
  - "Su*, bambin* and other words that have the same structure are abbreviated using an asterisk if possible.
  - The word "Tiny" is gender-neutral: "un* Tiny", "il/la Tiny".
- The plural of foreign words that have no translation follows this rule:
  - If the word is already in common use in Italian, its plural will be the same as the singular form: "film", "bar".
  - If the word is new or highly specialized, its plural will be the same as it is in its origin language: "Tinies".
