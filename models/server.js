const express = require('express')
const { productRouter } = require('../routes/products.routes')

class Server { 
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3000

        this.paths = { 
            products: '/api/v1/products'
        }

        this.milddlewares()
        this.routes()
    }

    milddlewares() { 
        this.app.use(express.json())
    }

    routes() {
        this.app.use( products, productRouter)
       }

listen(){
    this.app.listen(this.port, () => { 
console.log("que tal rodo, funciona", this.port)
    })
}



}

module.exports = Server