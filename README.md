# Virtual Dog Park

Virtual Dog Park is a dog encyclopedia and virtual pet website built for AIE1101 with HTML, CSS, and vanilla JavaScript.

## Features

- Read about the size, personality, and daily care of the Beagle, Golden Retriever, and Poodle.
- Adopt one dog, give it a name, and care for it with Feed and Play.
- Advance time with Next Day and watch the growth bar change.
- Resume your progress after a refresh or clear it with Start Over.

The three local SVGs are illustrations created for this project.

## Run locally

1. Open the project folder in VS Code.
2. Install the Live Server extension if it is missing.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Keep the same browser and local server address when testing saved progress.

## Game rules

- Choose a breed and enter a name of 1–20 characters. Leading and trailing spaces are removed, and spaces inside the name are kept.
- A newly adopted dog starts on Day 1 as a Puppy with 50 happiness.
- Feed and Play each add 10 happiness, up to 100.
- Next Day advances one simulated day and subtracts 5 happiness, down to 0.

| Day | Growth stage |
| --- | --- |
| 1 | Puppy |
| 2–3 | Young Dog |
| 4 onward | Adult Dog |

The dog's name, breed, day, and happiness are saved in browser `localStorage` after adoption and every Feed, Play, and Next Day action. Progress stays in the browser on the current device and local address. GitHub hosts the project files. Start Over asks for confirmation before deleting the saved dog and reopening the adoption form.

## Manual testing checklist

- Check that all three breed cards and illustrations appear. At a narrow width, confirm that the cards stack without horizontal scrolling.
- Try a blank or whitespace-only name, a name longer than 20 characters, and a name such as `  <Buddy Dog>  `. Check the length limit, trimming, and text display.
- Adopt a dog and check Day 1, Puppy, and 50 happiness. Try Feed and Play and verify the 100-point cap.
- Advance to Days 2, 3, and 4. Check the stage text, the growth bar, and the 5-point decrease. Keep advancing to check the zero floor.
- Refresh after adoption and after using Feed, Play, and Next Day. Check that the latest state returns.
- Cancel Start Over and confirm the dog remains. Confirm Start Over, then refresh and check that the adoption form remains visible.
