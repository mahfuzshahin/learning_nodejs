const path = require('path')
const os = require('os')
const fs = require('fs')
const EventEmitter = require('events');

const myPath = 'D:/learning_nodejs/index.js'

//console.log(os.cpus())

// const data = fs.readFile('myFile.txt', (err, data)=>{
//     console.log(data.toString());
// });
// console.log('Hello')
const emitter = new EventEmitter();

emitter.on('bellRing', ({period,text})=>{
    console.log(`Run please ${period} ${period}`)
})

//raise an event
setTimeout(()=>{
    emitter.emit('bellRing',{
        period: 'second',
        text: 'period ended'
    } );
},2000)
//emitter.emit('bellRing')