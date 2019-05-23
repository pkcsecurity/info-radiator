#!/bin/bash

THINGS=(https://give.imb.org file:///home/pkc/radiatorimages/inarush.png https://pkc.io)

sleep 3

firefox --no-remote "${THINGS[@]/#/}" &
xdotool search --sync --onlyvisible --class "Firefox" windowactivate windowfocus key F11
xdotool mousemove --screen 0 0 0

while true
do
    xdotool key ctrl+Next sleep 10
done

