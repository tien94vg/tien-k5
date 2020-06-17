var fs = require('fs')
var express = require('express')
var app = express()
var path = require('path')


app.use('/cookie', express.static(path.join(__dirname, './publict')))

app.get('/', function(req,res) {
    var link = path.join(__dirname, './htmlsv.html')
    res.sendFile(link)
})
app.listen(process.env.PORT, function(params) {
    
})