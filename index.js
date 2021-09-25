//classes
class Base {
    constructor(option, name,attempts){
    this.name=name;
    option={
        1:"rock",
        2:"paper",
        3:"scissors"
    }
    this.attempts=attempts
    }
}

class Human extends Base{
    constructor(name){
        super();
        this.name=name
    }
}

class Machine extends Base{
    constructor(attempts){
        super(attempts);
        this.name="Robot"
    }
    randomOption(){
        return Math.floor((Math.random() * (3 - 1)) + 1);
    }
};

let Play = function(option, option2,pointHuman,pointMachine){
    this.option=option
    this.option2=option2
    this.pointHuman=pointHuman
    this.pointMachine=pointMachine
};

//data validation
Play.prototype.check= function(){
    if(this.option===this.option2 && this.option===1){
        console.log("He plays rock!")
        console.log("It's a tie")
    }
    if(this.option===this.option2 && this.option===2){
        console.log("He plays paper!")
        console.log("It's a tie")
    }
    if(this.option===this.option2 && this.option===3){
        console.log("He plays scissors!")
        console.log("It's a tie")
    }
    if(this.option===2 && this.option2===1){
        console.log("He plays rock!")
        console.log("You win!")
        pointHuman++
    }
    if(this.option===3 && this.option2===1){
        console.log("He plays rock!")
        console.log("You loose!")
        pointMachine++
    }
    if(this.option===1 && this.option2===2){
        console.log("He plays paper!")
        console.log("You loose!")
        pointMachine++
    }
    if(this.option===3 && this.option2===2){
        console.log("He plays paper!")
        console.log("You win!")
        pointHuman++
    }
    if(this.option===1 && this.option2===3){
        console.log("He plays scissors!")
        console.log("You win!")
        pointHuman++
    }
    if(this.option===2 && this.option2===3){
        console.log("He plays scissors!")
        console.log("You loose!")
        pointMachine++
    }
};

//data collection
console.log("Run")
const prompt = require('prompt-sync')({sigint: true});
let nameHuman=prompt("Human player's name? ");
let points= Number(prompt("How many points to get the game? "))

//initial marker
let pointHuman=0;
let pointMachine=0;

let player1= new Human(nameHuman)
let player2= new Machine(points)

//loop
while(pointHuman<points && pointMachine <points ){
    let option=Number(prompt("Form? [1]Rock [2]Paper [3]Scissors "))
    console.log("Hands ready!")
    console.log("Hands ready!")
    let option2=player2.randomOption()
    let play= new Play(option, option2, pointHuman, pointMachine)
    play.check()
    console.log(player1.name, pointHuman)
    console.log(player2.name, pointMachine, "\n \n")
}







