const prompt = require('prompt-sync')({sigint: true});

let userPrompt = Number(prompt("Pick a number: "));


if (userPrompt){

    console.log(Math.ceil(Math.random()* userPrompt));
}