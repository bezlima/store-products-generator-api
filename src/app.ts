import express from 'express'
import { Router, Request, Response } from 'express'

const cors = require('cors')
const PORT = 8000
const app = express()
const StoreRoute = require('./routes/storeRoute')
const route = Router()

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}

app.use(StoreRoute)
app.use(express.json())
app.use(cors(corsOptions))

route.get('/', (req: Request, res: Response) => {
    res.send({
        message:
            'http://localhost:8000/api/store/options?amount=12&images=false&description=true&name=true&price=true&rating=true',
    })
})

app.use(route)

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`))
