let dog = {
    type: "Snips",
    numLegs: 4,
    sayLegs: function(){ return "This dog has " + this.numLegs + " legs."}
   
};

console.log(dog.sayLegs());


document.getElementById("dog").innerHTML = "Snips has 4 legs"; 