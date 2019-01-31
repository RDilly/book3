

// Say Hello To The People!
// 1. - Populate the select options dynamically by iterating over the people array
//    - Create a template literal for an option element
//    - Append to the select element in the dom
// 2. Console.log "Hello[person's name]!" When a person is selected and the button is clicked!

let dropdownPrintingFunction = (name) => {return `
<option id="${name}" value="${name}">${name}</option>
`}

const people = ["Meg", "Steve", "kimmy", "Madi", "Jisie", "Joe", "Emily", "Andy"]

people.forEach(person => {
  document.querySelector("#people").innerHTML += dropdownPrintingFunction(person)
});