#!/usr/bin/env node

// Making Fandom Quiz CLI in Node.js

// Importing the modules
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import readline from "readline";
import questions from "./questions.js";

const log = console.log; // alias for console.log

// readline module is used to read the input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Clear the console
clear();

// Display the title
log(
  chalk.yellow(figlet.textSync("Fandom Quiz CLI", { horizontalLayout: "full" }))
);

// Display the description
log(chalk.blue("This is a Fandom Quiz CLI made in Node.js"));

// Display the author
log(chalk.green("Author: Milind"));

// Initializing the score to 0
let score = 0;

// Creating the ask function
function ask(i) {
  rl.question(questions[i].question, (userInput) => {
    if (userInput.toLowerCase() === questions[i].answer.toLowerCase()) {
      log(chalk.green("Right!"));
      score++;
      log(chalk.blue("Yay score++, current score : ", score));
    } else {
      log(chalk.red("Wrong!"));
      log(chalk.red("The correct answer is: ", questions[i].answer));
      log(chalk.red("Your score remains: ", score));
    }

    if (i < questions.length - 1) {
      ask(i + 1);
    } else {
      log(chalk.yellow("Your final score is: " + score));
      rl.close();
    }
  });
}

// Calling the ask function
ask(0);
