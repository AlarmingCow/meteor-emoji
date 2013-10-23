# Meteor Emoji 

A simple [Meteor](http://www.meteor.com/) package to convert emoji symbols into images (Using Github/Campfire/etc. 
emoji convention). See http://www.emoji-cheat-sheet.com/ for a list of available emoji.

### Installation

Using [Meteorite](https://github.com/oortcloud/meteorite/), add the emoji package from 
[Atmosphere](https://atmosphere.meteor.com/):
```
mrt add emoji
```

### Usage

In your app, use `Emoji.convert(text)` to emojify strings. All substrings of the general form `:emoji_name:` will
be replaced with `<img>` tags that *should* 
[just work](http://codinghorror.typepad.com/.a/6a0120a85dcdae970b0128776ff992970c-pi). The converter isn't smart about
emoji that don't actually exist (yet).

### Styling

The `<img>` tags are conveniently adorned with the `emoji` class, so set emoji-specific styling through that.
