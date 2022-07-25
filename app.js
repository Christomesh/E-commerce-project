require("dotenv").config()
require("express-async-errors")

// express
const express = require("express")
const app = express()

// Other packages




// spin the server
const port = process.env.PORT || 5000

const start = async () =>{
    try {
        app.listen(port, ()=>{
            console.log(`Server listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()
