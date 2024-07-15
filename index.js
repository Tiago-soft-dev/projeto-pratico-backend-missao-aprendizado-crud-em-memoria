const express=require('express')
const app=express()

app.use(express.json())

const nomes = ['Carlos', 'Tiago', 'Izabel']

//endpoint GET/personagem
app.get('/personagem', (req,res)=>{
    res.send(nomes)
})

//endpoint GET/personagem/id
app.get('/personagem/:id', (req,res)=>{
    const id = req.params.id

    //validação
    if (nomes[id - 1]){
        res.send(nomes[id - 1])
    }
    else {
        res.send('Item não encontrado.')
    }
})

//endpoint POST/personagem
app.post('/personagem', (req,res)=>{
    const item = req.body.nome
    if(!item){
        res.send('Item inválido')
    } else {
        nomes.push(item)
        res.send(`O nome ${item} foi adicionado com sucesso.`)
    }
})


app.listen(3000)