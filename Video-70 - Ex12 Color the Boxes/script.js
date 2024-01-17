let colors = ["red", "green", "yellow", "blue", "orange"]
let random_color = Math.floor(Math.random() * colors.length)
let random_bgcolor = Math.floor(Math.random() * colors.length)

let color = colors[random_color]
let bgcolor = colors[random_bgcolor]

document.querySelectorAll(".box").forEach(e=>{
    e.style.color = color;
    e.style.backgroundColor = bgcolor;
})

console.log(color);
console.log(bgcolor);