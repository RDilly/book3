
function carFactory(x, y){
    return `
        <section>
            <div> 
                <h1>${y}</h1>
                <p> year:  ${x[0]} <br>
                    model: ${x[1]} <br>
                    make:  ${x[2]} <br>
                    color: ${x[3]} <br>
                </p>
            </div>
            <hr/>
        </section>
        `
}

function renderCar(x){
    document.querySelector("#carCar").innerHTML += x
}


salesByWeek.forEach(sale => {
    let fullName = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`
    let carInfo = Object.values(sale.vehicle)
    console.log(carInfo)



    let carHTML = carFactory(carInfo, fullName)
    renderCar(carHTML)

})