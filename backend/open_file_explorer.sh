#!/bin/bash

if [[ $1 = "Linux" ]]
then
    xdg-open $2
elif [[ $1 = "Darwin" ]]
then
    open $2
elif [[ $1 = "Windows" ]]
then
     start $2
fi
