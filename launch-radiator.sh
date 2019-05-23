#!/bin/bash

THINGS=(https://give.imb.org https://pkc.io)

shopt -s nullglob
shopt -s nocaseglob
for file in /home/pkc/info-radiator/images/*.{png,jpg,jpeg,gif}
do
    THINGS+=("file://$file")
done
shopt -u nullglob
shopt -u nocaseglob

sleep 3

firefox --no-remote "${THINGS[@]/#/}" &
xdotool search --sync --onlyvisible --class "Firefox" windowactivate key F11
xdotool mousemove --screen 0 0 0

while true
do
    xdotool key ctrl+Next sleep 10
done

