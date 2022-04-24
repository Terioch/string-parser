# String Parser

A program that interpolates object data into marked placeholders within a string of text. Unit tests were implemented with Jest.

## Install and run

Download this repository to your local machine and install the project dependencies. Then proceed to open the apps html file within your browser and execute the 'test' script to run all test suites.

## Technical Overview

I approached this problem by converting the text input into an array of characters and then identifying each subsequent placeholder in an iterative fashion. For each iteration, I chose to append the current character to a new text string representing my final output, but upon arriving at a placeholder, I proceeded to append the corresponding object value instead.

I identified the beginning of a new placeholder by simply checking for two consecutive opening braces, but with additional time I would have opted for a more sophisticated approach that involves checking for a specific pattern that more accurately matches a placeholder.

I decided to implement a more brute-force, linear solution, but with additional time I would have attempted to reduce the overall time complexity, if it meant a cleaner and more robust implementation or if the expected inputs were very large. This may involve splitting the text string into an array of space-separated words rather than individual characters.

## Contact Information

Email: riostockton@gmail.com
