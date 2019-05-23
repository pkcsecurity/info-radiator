PKC Information Radiator
=====
We do cool stuff! Let's share it with each other!

## How to add an image/screenshot
Just drop it in [the `images` folder](https://github.com/jming422/info-radiator/tree/master/images), and that's it! The next time the `launch-radiator.sh` script is started (i.e. the next time the radiator PC is rebooted), the images will be loaded into Firefox to be cycled through.

**Note:** Images must be either png, jpg, or gif.

## How to add a webpage/app
Edit [`launch-radiator.sh`](https://github.com/jming422/info-radiator/blob/master/launch-radiator.sh), and add your URL of choice to the initial value of the `THINGS` array at the top. Entries are space-separated, no quotes required.

## What else can it do?
Since this app is just automating Firefox via keystrokes, it can display anything Firefox can. You can add any resource URI that Firefox is capable of displaying to `THINGS`, and it should "just work."

## Details about the Radiator PC
The PC hooked up to the TV downstairs has a command called `radiate` - that command runs `git pull` on this repo and then runs the `launch-radiator.sh` script. The PC has also been configured to automatically run `radiate` on system boot. Note: if you quit the script at any point, be sure all instances of Firefox are closed too before running the script again.

If you'd like SSH access to the PC, shoot a Slack message to Jonathan and he'll get you in. If you do SSH into the PC, note that the `radiate` command **will not work**, since it'll try to start automating the nonexistant X-window system in your terminal. `radiate` can only be started from the PC's window system. The best way to restart the `radiate` process via SSH is to simply `reboot now` and let the window manager's autostart launch the radiator for you.
