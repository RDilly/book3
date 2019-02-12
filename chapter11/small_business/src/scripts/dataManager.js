const dataManager = {
    getData() {
        return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
        .then(res => res.json())
}
}
export default dataManager