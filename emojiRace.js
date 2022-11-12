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

/**
 * Race: instances of the class race store contestant values, raceWinner,
 * and raceTimerID. Stores functionality described in docstrings below.
 * 
 * contestants: instances of Contestant class
 */
class Race {
  //  each instance of race should have the following properties:
  //  - contestants: the race contestants[{}, {}] passed into constructor
  //  - raceWinner: the winner of the race (a contestant or null for none yet)
  //  - raceTimerId: a setIntervalID that will be used to clear timer (you'll
  //    assign this value in startRace)
  constructor(...contestants) {
    this.contestants = contestants;
    this.raceWinner;
    this.raceTimerId;
  }

  /** 
   * startRace: sets the timer interval for the racing method and stores it
   * in raceTimerID;
   */
  startRace() {
    // YOU'LL NEED TO IMPLEMENT THIS CODE IN ORDER FOR THE "Start Race" BUTTON
    // TO WORK

    // - use setInterval to schedule repeated execution of the racing method
    // - use TIME_BETWEEN_STEPS_MS global variable as the delay between
    //   execution of racing
    //
    // - the value of the raceTimerId property should be the setIntervalId
    //   (assign the value here)
    this.raceTimerID = setInterval(this.racing.bind(this),TIME_BETWEEN_STEPS_MS);
  }

  /** 
   * racing: If there is a winner, sets the raceWinner property and invokes endRace,
   * otherwise invokes move on both contestants.
   */
  racing() {
    // invoke the checkForWinner method to determine if there is a winner yet
    // - if there is a winner, update the raceWinner property with the
    //   contestant instance object, invoke the endRace method to end the race,
    //   and return from this function
    //
    // - if no winner yet, invoke the Contestant instance method
    //  "move" on both contestants to move them forward in the race
    const winner = this.checkForWinner();
    if (winner) {
      this.raceWinner = winner;
      this.endRace();
    } else {
      this.contestants[0].move();
      this.contestants[1].move();
    }
  }

  /**
   * checkForWinner; Checks if there is a winner and returns the winner contestant instance if so,
   * otherwise returns undefined.
   */
  checkForWinner() {
    const [c1, c2] = this.contestants;

    // have a winner if a contestant's stepsTaken is >= the finish line location
    const haveWinner = (
        c1.stepsTaken >= finishLineLocation ||
        c2.stepsTaken >= finishLineLocation);

    // MAKE SURE YOUR CODE GOES BELOW THIS LINE
    //
    // - check for winner and *return the contestant instance object*
    //   of winner (or undefined if no winner yet)
    if (haveWinner) {
      const greaterStepsContestant = (c1.stepsTaken > c2.stepsTaken) ? c1: c2;
      return greaterStepsContestant;
    }
  }

  /** endRace: Clears the delay interval for the race method and invokes announceWinner. */
  endRace() {
    // - use the raceTimerId to clear the interval that stops the racing method
    //   from being called
    clearInterval(this.raceTimerID);
    // - invoke announceWinner method (pass in the winner instance object) to
    //   display the winner of race in the DOM
    this.announceWinner(this.checkForWinner());
  }

  /** announceWinner: Announces the winner of the race in the DOM */
  announceWinner(contestant) {
    // - craft and display a message in the DOM announcing the winning emoji of
    //   race and number of steps taken by the winner (there is already an html
    //   element for this)
    //
    announcementArea.innerText = `${contestant.emoji} wins!`;
  }
}


/**
 * Contestant: instances of the contestant class contain properties for emoji,
 * htmlLocation, htmlStepDisplay (preceding must be passed in), and stepsTaken.
 * Displays the contestant emojis and associated step counter
 * 
 * emoji: string
 * htmlLocation: dom element
 * htmlStepDisplay: dom element
 */
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
    // - invoke the randomSteps method to generate a random number of steps to
    //   move a contestant forward
    // - add this random number of steps to the contestant's stepsTaken
    //   property
    this.stepsTaken += this.randomSteps();

    // MAKE SURE YOUR CODE GOES ABOVE THIS LINE
    this.htmlLocation.style.left = `${this.stepsTaken}px`;

    // update steps displayed in DOM
    this.updateHtmlSteps();
  }

  /** randomSteps: returns a random integer between pre-determined minimum and maximum steps */
  randomSteps() {
    // - return a random integer between the MIN_STEPS and MAX_STEPS global
    //   variables
    return Math.floor(Math.random() * (MAX_STEPS - MIN_STEPS + 1) + MIN_STEPS);
  }

  /** updateHtmlSteps: update a contestant's steps displayed in DOM. */
  updateHtmlSteps() {
    this.htmlStepDisplay.innerText = `${this.emoji} steps: ${this.stepsTaken}`;
  }
}

/** handleStartBtn: initializes the two new contestants and a new race, and starts the race */
function handleStartBtn() {
  const c1 = new Contestant("🎃", c1HtmlLocation, c1HtmlStepDisplay);
  const c2 = new Contestant("🐧", c2HtmlLocation, c2HtmlStepDisplay);
  const race = new Race(c1, c2);
  race.startRace();
}


/** 
 * resizeTrack: sets the width of the track and the finish line location and style
 * when the window size changes
 */
function resizeTrack() {
  raceTrackWidth = raceTrack.offsetWidth;
  finishLineLocation = raceTrackWidth - FINISH_LINE_OFFSET;
  finishLine.style.left = `${finishLineLocation}px`;
}


/** 
 * main: sets the default finish line position, adds an event listener on window
 * resizing to invoke resizeTrack, and adds an event listener to invoke 
 * handleStartBtn on click.
 */
function main() {
  // default position of html finish line: 200px before end of racetrack
  finishLine.style.left = `${finishLineLocation}px`;

  // update position of html finish line when window resized
  window.addEventListener("resize", resizeTrack);

  // create and setup a new race
  startRaceButton.addEventListener("click", handleStartBtn);
}


main();
