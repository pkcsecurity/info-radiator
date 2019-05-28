PKC Information Radiator
=====
We do cool stuff! Let's share it with each other! This repo is for the `launch-radiator.sh` script, which runs on the PC hooked up to the TV downstairs.

## How to add an image/screenshot
Just drop it in [the `images` folder](https://github.com/jming422/info-radiator/tree/master/images), and that's it! The next time the script is restarted, the images will be loaded into Firefox to be cycled through.

**Note:** Images must be either png, jpg, or gif.

## How to add a webpage/app
Edit [`launch-radiator.sh`](https://github.com/jming422/info-radiator/blob/master/launch-radiator.sh), and add your URL of choice to the initial value of the `THINGS` array at the top. Entries are space-separated, no quotes required.

## What else can it do?
Since this app is just automating Firefox via keystrokes, it can display anything Firefox can. You can add any resource URI that Firefox is capable of displaying to `THINGS`, and it should "just work."

## Details about the Radiator PC
The PC hooked up to the TV downstairs has the following commands:
  - `radiate` - runs `git pull` on this repo and then runs the `launch-radiator.sh` script.
  - `stop` - kills any existing instances of any radiator scripts and Firefox
  - `restart` - an alias for `stop && radiate`

If you have SSH access to the PC, you can use this syntax to quickly restart the radiator:
```bash
ssh pkc@10.59.1.119 "DISPLAY=:0 nohup restart > /dev/null 2>&1 &"
```
Feel free to replace `restart` with `radiate` or `stop` as necessary!

The PC has also been configured to automatically run `radiate` on system boot. Note: if you quit the script at any point, be sure all instances of Firefox are closed too before running the script again.

If you'd like SSH access to the PC, shoot a Slack message to Jonathan and he'll get you in.
