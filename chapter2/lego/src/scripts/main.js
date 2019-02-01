

// Some starter code
document.querySelector("#lego__save").addEventListener("click", event => {
    const creator = document.querySelector("#lego__creator").value
    const color = document.querySelector("#lego__color").value
    const shape = document.querySelector("#lego__shape").value
    const creation = document.querySelector("#lego__creation").value


    // Once you have collected all the values, build your data structure
    let legoToSave = {
        "creator": `${creator}`,
        "color": `${color}`,
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
})
