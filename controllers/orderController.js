

const getAllOrders = async() =>{
    res.send("get all orders")
}

const getSingleOrder = async() =>{
    res.send("get single orders")
}

const getCurrentUserOrders = async() =>{
    res.send("get current user orders")
}

const createOrder = async() =>{
    res.send("create orders")
}

const updateOrder = async() =>{
    res.send("update orders")
}

module.exports = {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder,
}