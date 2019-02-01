

// Some starter code
document.querySelector("#lego__save").addEventListener("click", event => {
    const creator = document.querySelector("#lego__creator").value
    const colorKey = document.querySelector("#lego__color").value
    const shape = document.querySelector("#lego__shape").value
    const creation = document.querySelector("#lego__creation").value
    
  
    fetch("http://localhost:3000/colors") // Replace "url" with your API's URL
        .then(response => response.json())
        .then(colors => {
            ggg= colors[colorKey]
            let legoToSave = {
                "creator": `${creator}`,
                "color": `${ggg}`,
                "shape": `${shape}`,
                "creation": `${creation}`
            }
        fetch("http://localhost:3000/legoCreation", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
        
    })
})})

