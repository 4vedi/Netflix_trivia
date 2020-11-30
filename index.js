var readlineSync = require('readline-sync');
const chalk = require('chalk');
var username = readlineSync.question("What is your name? ");
console.log("--------------")
console.log(chalk.yellowBright.bold("Welcome " + username + " to the NETFLIX Trivia. \n \n Enter 'a' to select option a \n Enter 'b' to select option b \n Enter 'c' to select option c \n Enter 'd' to select option d \n"));

var score = 0;
var highscore = [
  {
    name: 'Yash',
    score: '4',
  },

]
function play(question, answer){
  var user_answer = readlineSync.question(question);
  if(user_answer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.greenBright(" \n You are correct \n"));
    score = score + 1;
  }
  else{
    console.log(chalk.redBright(" \n You are wrong! The correct answer is " + answer + ". \n"));
  }
}
var question_list = [{
  question: "Which of these is NOT the name of one of a character on Netflix's Stranger Things? \n a)Will Byers \n b)Erica Sinclair \n c)Joe Lamb \n d)Mike Wheeler \n",

  answer: "c"
},
{
  question: "Name the Netflix anthology series that has an episode starring Miley Cyrus as a pop star named Ashley O? \n a)Black Mirror \n b)You \n c)Breaking Bad \n d)Orange is the new black \n ",
  answer: "a"
},
{
question: "Season one of You sees Joe Goldberg meet Guinevere Beck at his place of work, but what job does he do? \n a)Chef \n b)Bookstore Manager \n c)Pilot \n d)Cab Driver \n ",
  answer: "b"
},
{
question: "Where do Hannah and Clay work in 13 Reasons Why? \n a)cinema \n b)Bookstore \n c)Hospital \n d)Restaurant \n ",
  answer: "a"
},
{
question: "The Black Hood is a villain in which series? \n a)OZark \n b)Stranger Things \n c)Cursed \n d)Riverdale  \n ",
  answer: "d"
},

]

for(i = 0; i<question_list.length; i++){
  play(question_list[i].question, question_list[i].answer)
  console.log("\n");
}

console.log(chalk.bgMagentaBright.bold("Your total score is " + score));
if(highscore[0].score < score){
  console.log(chalk.bold("You have made a new High score!"));
  highscore[0].name = username;
  highscore[0].score = score;
}
