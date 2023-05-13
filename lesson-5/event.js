const path = require('path')
const os = require('os')
const fs = require('fs')

const School = require('./school')

const school = new School()

school.on('bellRing', ({period,text})=>{
    console.log(`Run please ${period} ${text}`)
})
school.startPeriod()

