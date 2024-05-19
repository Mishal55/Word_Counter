#!/usr/bin/env node
//This is the file of words counter in typescript By Mishal Nadeem
import inquirer from "inquirer";
let my_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "Enter your sentence:"
});
let words_count = my_ans.words.trim().split(" ").length;
console.log(`Your sentence has ${words_count} words.`);
