const random = require('random');


function GenerateRandomNumbersBounded(minimum,maximum)
{
    console.log(random.int ((min=minimum),(max = maximum)));    
}
function GenerateRandomNumbers(count,minimum,maximum)
{
    let values = [];
    for (let index = 0; index < count; index++) {
        values[index] = random.int((min=minimum),(max=maximum));        
    }
    for (let index = 0; index< values.length; index++)
    {
        console.log(values[index]);
    }
    return values.toString();
}




module.exports = {GenerateRandomNumbersBounded,GenerateRandomNumbers};

// IF the game will have multiple Types of game 
// we can have a base Random Generator Function which will only take a parameter of 
// the numbers to be drawn, Range of the numbers e.g (1-40)

// We cam say that Each Draw is an event that will be called on certain times,
// Selecting a game technically means this is the combination, range of numbers, and here's the mechanics of winning. We can use Draw ID for this, which contains draw date, shift, combinations, and the ID
// Fetch this ID check the date and time, and length of the combo, a corresponding game mechanic is matched then each bet will be analyzed for a winning pattern. 
// then after the draw all bets registered to that draw will be analyzed to check if there is a winning combo.
// Game mechanics will be invoked IF a game mechanic tied in to the  game is matches a bet combinations.

//Since this is a mock-up we can INVOKE a Draw immediately, see results and check if we won. (probably a button press)