"use strict";

/** Emoji Race
 *
 * Two emojis race one another when "Start Race" button clicked; they race
 * until one of them crosses the finish line. The winner should be the emoji
 * that covered the most distance at the end of the race.
 *
 * The amount of steps a contestant takes when racing is random each time.
 * The location of the finish line is determined by the window size.
 */

// DO NOT CHANGE THESE VARIABLES
const FINISH_LINE_OFFSET = 200;
const TIME_BETWEEN_STEPS_MS = 100;
const MIN_STEPS = 5;
const MAX_STEPS = 20;

const finishLine = document.getElementById("finish-line");
const raceTrack = document.getElementById("race-track");
const startRaceButton = document.getElementById("start-race");
const c1HtmlLocation = document.getElementById("contestant-1");
const c2HtmlLocation = document.getElementById("contestant-2");
const c1HtmlStepDisplay = document.getElementById("contestant-1-steps");
const c2HtmlStepDisplay = document.getElementById("contestant-2-steps");
const announcementArea = document.getElementById("winner-announcement");

let raceTrackWidth = raceTrack.offsetWidth;
let finishLineLocation = raceTrackWidth - FINISH_LINE_OFFSET;


class Race {
  //  TODO:
  //  each instance of race should have the following properties:
  //  - contestants: the race contestants[{}, {}] passed into constructor
  //  - raceWinner: the winner of the race (a contestant or null for none yet)
  //  - raceTimerId: a setIntervalID that will be used to clear timer (you'll
  //    assign this value in startRace)

  startRace() {
    // YOU'LL NEED TO IMPLEMENT THIS CODE IN ORDER FOR THE "Start Race" BUTTON
    // TO WORK

    // TODO:
    // - use setInterval to schedule repeated execution of the racing method
    // - use TIME_BETWEEN_STEPS_MS global variable as the delay between
    //   execution of racing
    //
    // - the value of the raceTimerId property should be the setIntervalId
    //   (assign the value here)
  }

  racing() {
    //
    // TODO:
    // invoke the checkForWinner method to determine if there is a winner yet
    // - if there is a winner, update the raceWinner property with the
    //   contestant instance object, invoke the endRace method to end the race,
    //   and return from this function
    //
    // - if no winner yet, invoke the Contestant instance method
    //  "move" on both contestants to move them forward in the race
  }

  checkForWinner() {
    const [c1, c2] = this.contestants;

    // have a winner if a contestant's stepsTaken is >= the finish line location
    const haveWinner = (
        c1.stepsTaken >= finishLineLocation ||
        c2.stepsTaken >= finishLineLocation);

    // MAKE SURE YOUR CODE GOES BELOW THIS LINE
    //
    // TODO:
    // - check for winner and *return the contestant instance object*
    //   of winner (or undefined if no winner yet)
  }

  endRace() {
    // TODO:
    // - use the raceTimerId to clear the interval that stops the racing method
    //   from being called
    // - invoke announceWinner method (pass in the winner instance object) to
    //   display the winner of race in the DOM
  }

  announceWinner(contestant) {
    // TODO:
    // - craft and display a message in the DOM announcing the winning emoji of
    //   race and number of steps taken by the winner (there is already an html
    //   element for this)
    //
  }
}


class Contestant {
  constructor(emoji, htmlLocation, htmlStepDisplay) {
    this.emoji = emoji;
    this.htmlLocation = htmlLocation;
    this.htmlStepDisplay = htmlStepDisplay;
    this.stepsTaken = 0;

    htmlLocation.innerText = emoji;
    this.updateHtmlSteps();
  }

  /** move: makes contestant take a random number of steps (pixels). */
  move() {
    // TODO:
    // - invoke the randomSteps method to generate a random number of steps to
    //   move a contestant forward
    // - add this random number of steps to the contestant's stepsTaken
    //   property

    // MAKE SURE YOUR CODE GOES ABOVE THIS LINE
    this.htmlLocation.style.left = `${this.stepsTaken}px`;

    // update steps displayed in DOM
    this.updateHtmlSteps();
  }

  randomSteps() {
    // TODO:
    // - return a random integer between the MIN_STEPS and MAX_STEPS global
    //   variables
  }

  /** updateHtmlSteps: update a contestant's steps displayed in DOM. */
  updateHtmlSteps() {
    this.htmlStepDisplay.innerText = `${this.emoji} steps: ${this.stepsTaken}`;
  }
}


function handleStartBtn() {
  const c1 = new Contestant("🎃", c1HtmlLocation, c1HtmlStepDisplay);
  const c2 = new Contestant("🐧", c2HtmlLocation, c2HtmlStepDisplay);
  const race = new Race(c1, c2);
  race.startRace();
}


function resizeTrack() {
  raceTrackWidth = raceTrack.offsetWidth;
  finishLineLocation = raceTrackWidth - FINISH_LINE_OFFSET;
  finishLine.style.left = `${finishLineLocation}px`;
}


function main() {
  // default position of html finish line: 200px before end of racetrack
  finishLine.style.left = `${finishLineLocation}px`;

  // update position of html finish line when window resized
  window.addEventListener("resize", resizeTrack);

  // create and setup a new race
  startRaceButton.addEventListener("click", handleStartBtn);
}


main();
