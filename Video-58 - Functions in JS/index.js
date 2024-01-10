function nice(name) {
    console.log("Hey " +name + " you are Nice")
    console.log("Hey " +name + " you are good")
    console.log("Hey " +name + " you are great")
}


nice("Satvik")
nice("Shahid")

function sum(a,b,c=1) {
    return a + b + c;
}

result = sum(-70,138)
console.log(result)

const func1 = (x)=>{
    console.log("I am an arrow function ",x)
}

func1(420)