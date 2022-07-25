require("dotenv").config()
require("express-async-errors")

// express
const express = require("express")
const app = express()

// Other packages
const morgan = require("morgan")

// database
const connectDB = require("./db/connect")

// routers
const authRouter = require("./routes/authRoutes")

//middleware
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

app.use(morgan('tiny'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("E-commerce project")
})
app.use('/api/v1/auth', authRouter)





app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
// spin the server
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, ()=>
            console.log(`Server listening on port ${port}`)
        )
    } catch (error) {
        console.log(error)
    }
}
start()
