let boxes = document.getElementsByClassName("box")
console.log(boxes)

// boxes[2].style.backgroundColor = "red";

document.getElementById("box2").style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(e=>{
    e.style.color = "orange";
})

