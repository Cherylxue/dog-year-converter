/*
DESCRIPTION:
In this challenge, you are curious about how old you would be in dog years.
You are expected to write JavaScript code that will convert any human age 
to dog years. When a user enters a human age into the calculator and pressed 
‘convert me to dog years’, the new dog years age should show up in the space 
below it.

On average, a dog’s first year on the planet worth is the equivalent of 10.5 
human years.

event listeners, getElementById, operators

*/


// Write your code here 👇

function handleClick(){
    var humanYear = document.getElementById("input").value
    var dogYear = humanYear *10.5
    document.getElementById("year-result").innerHTML = dogYear + " years"
    document.getElementById("month-result").innerHTML = dogYear * 12 + " months"
    document.getElementById("day-result").innerHTML = dogYear * 365 + " days"
    }

/*



DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. use the input value and convert it into dog years on 'click'
3. display the result in the h1 tag

STRETCH GOALS:
- Can you convert your age into dog years, months and days? 
- Can you improve the overall design?

*/
