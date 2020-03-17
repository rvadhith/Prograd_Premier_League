//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var array = [managerName, managerAge, currentTeam, trophiesWon];
  return array;
}

//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation){
  if(formation.length == 0){
    return null;
  }
  else {
    let data = {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2]
    }
    return data;
  }
}

//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let players_debuted_that_year = [];
  for(var i = 0; i < players.length; i++){
    if(players[i].debut == year){
      players_debuted_that_year.push(players[i]);
      return players_debuted_that_year;
    }
  }
}

console.log(filterByDebut(2005));

//Progression 4 - Filter players that play at the position _______
var players_in_the_position = [];
function filterByPosition(position){
  for(var i =0 ; i < players.length; i++){
    if(players[i].position == position){
      players_in_the_position.push(players[i]);
      }
  }
  return players_in_the_position;
}

console.log(filterByPosition(position));

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  let player_with_awards = [];
  for (var i = 0; i < players.length; i++){
      for (var j = 0; j < players[i].awards.length; j++){
          if (players[i].awards[j].name == awardName){
            if (!(player_with_awards.includes(players[i]))){
              player_with_awards.push(players[i])
            }
          }
      }
  }
  return player_with_awards;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  let awards_no_of_times = [];
  var count = 0;
  for (var i = 0; i < players.length; i++){
      for (var j = 0; j < players[i].awards.length; j++){
        if (players[i].awards[j].name == awardName){
          count = count + 1;
          if(count == noOfTimes){
            awards_no_of_times.push(players[i])
          }
        }  
      }
  }
return awards_no_of_times;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  let awards_per_country = [];
  for (var i = 0; i < players.length; i++){
      for (var j = 0; j < players[i].awards.length; j++){
        if (players[i].awards[j].name == awardName && players[i].country == country){
          awards_per_country.push(players[i])
        }  
      }
  }
return awards_per_country;

}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let players_data = [];
  for (var i = 0; i < players.length; i++){
      for (var j = 0; j < players[i].awards.length; j++){
        if (players[i].awards[j].length >= awardName && players[i].team == team && players[i].age < age){
          players_data.push(players[i])
        }  
      }
  }
  return players_data;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
