#!/bin/bash

awk -f update.awk | \
    sed '/^>/s/\.\\ /\.\n> /g' | \
    sed 's/\.\\ /\/\n/g' | \
    sed '/^>/s/\. \([A-Z]\)/\.\n> \1/g' | \
    sed 's/\. \([A-Z]\)/\.\n\1/g'
