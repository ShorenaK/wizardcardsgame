// object  hero
const hero = {
    elementId: "hero", 
    name: "Wizard", 
    avatar: "images/wizard.png", 
    health: "60", 
    diceCount: 3
}
// object  hero
const monster = {
    elementId : "monster", 
    name : "Orc", 
    avatar : "images/orc.png", 
    health : "10", 
    diceCount: 1
}
function getDiceRollArray(diceCount){
       // let newDiceRolls = [];
    // for (let i = 0; i < diceCount; i++) {
    //     newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
    // }
    // return newDiceRolls;
    
   return  new Array(diceCount).fill(0).map(function(){
      return Math.floor(Math.random() * 6 +1 )
    })
} 

// function for maping to map over the getDiceRollArray function
function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(function(num){
        return `<div class="dice">${num}</div>`
    }).join('')
}
// function to render character cards
function renderCharacter(data){
    const {elementId, name, avatar, health, diceCount }= data

    let diceHtml = getDiceHtml(diceCount)
    document.getElementById(elementId).innerHTML = 
    `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>`   
}

// render hero and monster character cards
renderCharacter(hero)
renderCharacter(monster)


const animalForRlease1 = {
    name: 'Tilly', 
    species: 'tiger', 
    weghtKg: 56, 
    age: 2, 
    dataOfRelease: '03-02-2022'
}
const animalForRlease2 = {
    name: 'Nelly', 
    species: 'elephant', 
    weghtKg: 320, 
    age: 16, 
    dataOfRelease: '03-02-2022'
}
function Animal(data){
    this.name = data.name
    this.species = data.species
    this.weightKg = data.weghtKg
    this.age = data.age
    this.dataOfRelease = data.dataOfRelease
    this.summeriseAnimal = function(){
        console.log(`${this.name} is a ${this.age} 
        year old ${this.species} which weighs 
        ${this.weghtKg} release into the wild on
        ${this.dataOfRelease}`)
    }
}
const tillyThetiger = new Animal(animalForRlease1)
const nellyTheElephant = new Animal(animalForRlease2)

console.log(tillyThetiger)
console.log(nellyTheElephant)
tillyThetiger.summeriseAnimal()
nellyTheElephant.summeriseAnimal()


const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
	costPerNightAdult: 240,
}

const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
	costPerNightAdult: 120,
}

function NationalParkHotels(data){
    this.name = data.name
    this.rooms = data.rooms
    this.starts = data.stars
    this.costPerNightAdult = data.costPerNightAdult
   
}
// creating instance of NarionalParkHotles for each o
// object (hotle )
const hotel1class = new NationalParkHotels(hotel1)
const hotel2class = new NationalParkHotels(hotel2)
console.log(hotel1)
console.log(hotel2)
