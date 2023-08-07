export const Orders = async () => {
    //fetch orders array
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    //convert orders to json
    const orders = await fetchResponse.json()
    let orderString = ""
    let ordersHTML = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `<div> Order ${order.id} cost ${orderPrice} </div>`
        }
    )
    orderString += ordersHTML.join(" ")

    return orderString
}