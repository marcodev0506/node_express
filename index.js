const express = require('express')// Express sera el metodoto para construir la aplicación
const app = express ()
const port= 3000

app.get('/',(req,res)=> {
res.send('Server en Express')
})
app.get('/segunda-ruta',(req,res)=> {
  res.send('Segunda ruta')
})
app.get('/tercera-ruta',(req,res)=> {
  res.json({
    name: 'Producto 1',
    price: 1000

  })
    }
  )
  app.get('/cuarta-ruta',(req,res)=> {
    res.json([
      {
      name: 'Categoria 1',
      tipo: 'Admin'

    },
    {
      name: 'Categoria 2',
      tipo: 'Secretario'

    }
    ])
  })
  app.get('/cuarta-ruta/:id',(req,res)=> {
    const {id}= req.params
    res.json(

      {
        name: 'Categoria 2',
        tipo: 'Secretario'

      }
    )
  })


app.listen(port,()=>{
  console.log('Puerto' + port)

})

