const express = require('express')
const app = express()
const axios = require('axios')

app.get('/happy', (req, res)=>{
    res.status(200).send('I am happy')
})

app.get('/frontend-happy', async(req, res)=>{
    const response = await axios.get('http://frontend_cont:9601/happy') //using domain name
    // const response = await axios.get('http://172.0.0.:9601/happy') using IP
    const data = {
        data: response.data,
        status: response.status
    }
    res.status(200).json(data)
})

app.listen(9600, ()=>{
    console.log("Server running on 9600")
})