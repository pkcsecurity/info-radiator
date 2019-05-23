PKC Information Radiator
=====
We do cool stuff! Let's share it with each other!

## How to add an image/screenshot
Just drop it in [the `images` folder](https://github.com/jming422/info-radiator/tree/master/images), and that's it! The next time the `launch-radiator` script is started, the images will be loaded into Firefox to be cycled through.
Images must be either png, jpg, or gif.

## How to add a webpage/app
Edit [`launch-radiator.sh`](https://github.com/jming422/info-radiator/blob/master/launch-radiator.sh), and add your URL of choice to the initial value of the `THINGS` array at the top. Entries are space-separated, no quotes required.

## What else can it do?
Since this app is just automating Firefox via keystrokes, it can display anything Firefox can. You can add any resource URI that Firefox is capable of displaying to `THINGS`, and it should "just work."
