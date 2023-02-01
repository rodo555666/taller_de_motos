const { Router } = require("express")

const router = Router()

router.get('/api/v1',  (req, res) =>  {
    console.log(req)
  res.json( {
    status:'success',
    message:'ROUTE - GET',
  } ) // __dirname + '/index.html' 


  router.post('//v1', (req,res) => {
 res.json({
    status:'success',
    message:'ROUTE - POST'
 })
 
  } )
  
  router.patch('/app/v1', (req,res) => {
 res.json({
    status:'success',
    message:'ROUTE - PATCH'
 })
} )

 router.app.put('/app/v1', (req,res) => {
 res.json({
    status:'success',
    message:'ROUTE - PUT'
 })
} )

 router.app.delete('/app/v1', (req,res) => {
 res.json({
    status:'success',
    message:'ROUTE - DELETE'
 })
} )


})

module.exports = {
    productRouter: router,
} 