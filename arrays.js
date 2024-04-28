const fruits=["Apple","Banana","Orange","Pineappl","Watermelon"];
console.log(fruits);
// Finding the length of array
console.log(fruits.length)
// Accessing and modifying array items
console.log(fruits[2])
// also you can try
fruits[0]="Peach";
console.log(fruits)

// For multidimensional arrays
const random = ["tree", 795, ["cat","school"]];
console.log(random[2][1])

// Finding the indexOf items in Array
console.log(fruits.indexOf("Orange"));

// Adding Items

const cities=["livepool","Manchester"];
cities.push('London')
console.log(cities)

// To add an item in the start of array we use unshift
cities.unshift("Bristol");
console.log(cities)
// Removing Items

const pc=["Monitor","CPU","Mouse"];
pc.pop();
console.log(pc)
// to remove an item from start of array we use shift
pc.shift();
console.log(pc)

// If you know the index of item you can remove item by using slice

const boys=["Ali","Ahmad","Salman","Noman"]

console.log(boys.slice(2))

// Accessing Every Item in Array we use for ..of

const pets=["Cow","Goat","Dog","Camel","Lion"]
for(let pet of pets){
    console.log(pet)
}
