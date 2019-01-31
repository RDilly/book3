// Create a function that will toggle the classes for the puppy!

let puppy = document.querySelector("#pup-img");
document.querySelector("#toggle-btn").addEventListener("click", () => {
    if(puppy.className === "hidden"){
        // make puppy visible
        puppy.setAttribute("class", "visible");
    } else {
        // make puppy disappear
        document.querySelector("#pup-img").setAttribute("class", "hidden");
    }
    // }

})

document.querySelector("#toggle-big").addEventListener("click", () =>{
    document.querySelector("#pup-img").setAttribute("class", "big")
})
