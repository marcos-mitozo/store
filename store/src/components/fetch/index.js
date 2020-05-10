export async function getData(collection, method, param) {
    console.log("Buscando pela collection: ", collection)
    console.log("Nome do metodo: ", method)
    console.log("Parametro: ", param)
    const response = await fetch("http://localhost:4000/" + collection + "/" + method + "/" + param, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    const result = await response.json()
    return result
}

export async function postData(collection, body) {
    console.log("Buscando pela collection: ", collection)
    console.log("Body: ", body)
    const response = await fetch("http://localhost:4000/" + collection, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
    const result = await response.json()
    console.log("resultado: ", result)
}
