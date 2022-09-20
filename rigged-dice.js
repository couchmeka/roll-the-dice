const prompt = require('prompt-sync')({sigint: true});

let userPrompt = Number(prompt("Pick a number between 1 and 6: "));


if (userPrompt === 6)
{
    let dicePrompt = Math.ceil(Math.random()*8);


    if (dicePrompt === 7 || dicePrompt === 8)
    {
        console.log(Number(6));

    } else { console.log(dicePrompt)}

} else if (userPrompt === 5)
{
    let dicePrompt = Math.ceil(Math.random()*8);


    if (dicePrompt === 7 || dicePrompt === 8)
    {
        console.log(Number(5));

    } else { console.log(dicePrompt)}

} else if (userPrompt === 4)
{
    let dicePrompt = Math.ceil(Math.random()*6);


    if (dicePrompt === 7 || dicePrompt === 8)
    {
        console.log(Number(4));

    } else { console.log(dicePrompt)}

} else if (userPrompt === 3)
{
    let dicePrompt = Math.ceil(Math.random()*6);


    if (dicePrompt === 7 || dicePrompt === 8)
    {
        console.log(Number(3));

    } else { console.log(dicePrompt)}
}else if (userPrompt === 2)
{
    let dicePrompt = Math.ceil(Math.random()*6);


    if (dicePrompt === 7 || dicePrompt === 8)
    {
        console.log(Number(2));

    } else { console.log(dicePrompt)}
} else if (userPrompt === 1)
{
    let dicePrompt = Math.ceil(Math.random()*6);


    if (dicePrompt === 7 || dicePrompt === 8)
    {
        console.log(Number(1));

    } else { console.log(dicePrompt)}
}