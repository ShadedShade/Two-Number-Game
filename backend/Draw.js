const random = require('random');


function GenerateRandomNumbersBounded(minimum,maximum)
{
    console.log(random.int ((min=minimum),(max = maximum)));    
}

// this is called 
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


// Test function
function ForceDraw()
{
    // Get draw ID, query it, query all bets on that draw ID, match it, query it on to the results

}

function Transact()
{
  // all inputs query it to this function
  // then call the store proc
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
// Since this is a mockup we can technically cheat and INSERT a Combination when inserting it.

//Since this is a mock-up we can INVOKE a Draw immediately, see results and check if we won. (probably a button press)

// Data Flow
// Get Login data from (Profile)
// Input new data to (Profile), Validate if Mobile No. Exists
// (GET) When A game will be drawn a Draw ID will be created (draw table) OR there is a DRAW ID with draw informations 

// (medyo not sure dito)
// Once a User (get from profile mobile, Money) bets a ticket will be created (ticket/transaction table) containing all information also deduct money from user (validate if user has enough money)
// Once a Ticket is received, Bets will be placed on Bets Table (rename to Bet history containing on what ticket are they part of)
//
// (When a game is Drawn, Check ALL bets (Bets history) placed under that DRAW, If any combination matches or a mechanic, matches the Draw combo, Place it in the Result Table, Where it can be queried later to see if the user 

// Generate