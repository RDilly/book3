const paperFactory = (entry) => {
    return `<h2>${entry.companyName}</h2>
            <span>${entry.addressFullStreet}</span>
            <span>${entry.addressCity}, ${entry.addressStateCode} ${entry.addressZipCode}</span>
            <hr/>`
}

const papermaker = (paperHTML, domItem) => document.querySelector(domItem).innerHTML += paperHTML


const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false

    if (business.addressStateCode === "NY") {
        inNewYork = true
    }

    return inNewYork
})

const manufacturing = businesses.filter(business => {
    let manff = false

    if (business.companyIndustry === "Manufacturing") {
        manff = true
    }

    return manff
})

const agents = businesses.map(business => {
    return business.purchasingAgent
})

console.table(agents)

businesses.forEach(entry => {    
    let paperHTML = paperFactory(entry)
    papermaker(paperHTML, "#response")
})


newYorkBusinesses.forEach(entry => {    
    let paperHTML = paperFactory(entry)
    papermaker(paperHTML, "#response__NY")
})

manufacturing.forEach(entry => {    
    let paperHTML = paperFactory(entry)
    papermaker(paperHTML, "#response__manufacturing")
})

agents.forEach(agent => {
    document.querySelector("#response__agents").innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
    document.querySelector("#response__agents").innerHTML += "<hr/>";
  });