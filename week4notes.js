var x = 10;
{
     let x = 2; // because of let x only = 2 inside the block
}

let myString = `hello
world
back ticks allows for 
multi line
strings`;

/// promises





////////////// class notes
//const makes variable values permanent and can only be assigned once
// template literal `` has multi line support


let pokemon = {
     name: 'charmander'
     type: 'fire'
}

let evolveOrder = ['charmander', 'Charmelon']

let evolve = (poke) => {
     console.log(poke);
     for (let x = 0; x < evolveOrder.length; x++) { }
}


//promise
fetch(`https://pokeapi.co/api/v2/pokemon/aggron`)
     .then(res => res.json())
     .then(data => {
          let cleanobject = {};
          console.log()
     });

