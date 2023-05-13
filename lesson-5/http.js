const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello Programmers');
        res.write('How are yous d');
        res.end()
    }else if(req.url === '/about'){
        res.write('How are yous d');
        res.end()
    }else{
        res.write('Not Found');
        res.end()
    }
    
})

// server.on('connection', (socket)=>{
//     console.log('New Connection')
// })

server.listen(3000)

console.log('listen on port 3000')