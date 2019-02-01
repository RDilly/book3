

// Say Hello To The People!
// 1. - Populate the select options dynamically by iterating over the people array
//    - Create a template literal for an option element
//    - Append to the select element in the dom
// 2. Console.log "Hello[person's name]!" When a person is selected and the button is clicked!


const siteResponse = document.querySelector("#response")

const people = ["Meg", "Steve", "kimmy", "Madi", "Jisie", "Joe", "Emily", "Andy"]

let dropdownPrintingFunction = (name) => {return `
<option id="${name}" value="${name}">${name}</option>
`}

people.forEach(name => {
  document.querySelector("#people").innerHTML += dropdownPrintingFunction(name)
});

document.querySelector("#helloBtn").addEventListener("click", function (){ 
  let currentName = document.querySelector("#people").value
  console.log(currentName)
  siteResponse.innerHTML = `<h1>hello ${currentName}!</h1>`
})