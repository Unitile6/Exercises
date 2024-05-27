import React from "react"

// Week 8 / 9

export default function Callbacks(){

// Voorbeeld 1: Synchroon simpel A
// f(x) -> f(x, f(x))

const names = ["James", "Elisa", "Mirriam", "Lexter"]

setTimeout(() => {console.log("Vanuit directe callback"); console.log(names)},100)


// Voorbeeld 2: Synchroon simpel B. Beide varianten werken hetzelfde
const logNames = () => {
    console.log("Vanuit logNames:")
    console.log(names)
} 

function logNamesB(){
    console.log("Vanuit logNamesB")
    console.log(names)
}

setTimeout(logNamesB, 100);


// Voorbeeld 3: Synchroon forEach
const names2 = ["Elijah", "Franklin", "Bestien", "Jesuis"]

console.log("doing forEach...")
names2.forEach((name) => console.log(name))


// Voorbeeld 4: Synchroon eigen forEach.
const myForEach = (arr: string[], cb: Function) => {
    console.log("myForEach entered...")
    for(let i=0; i < arr.length; i++){
        const element = arr[i];
        cb(element) // calls callback on passed element.
    }
}
// f(x, f(x))
myForEach(names2,(name: string)=>{console.log(name)})


// Voorbeeld 5: Asynchroon.

const loadPokemon = (id: number, cb: Function) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)  
    .then(response => response.json())  
    .then(data => {cb(data)})}

loadPokemon(56, (pkmn: string) => console.log(pkmn))


// Om er een component van te maken:

return(<>Welkom bij callbacks. Druk op F12 om details te zien.</>)
}