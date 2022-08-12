const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config()
require('./Helpers/mongodb')
const { verifyAccessToken } = require('./Helpers/jwthelpers')
require('./Helpers/redis')

const AuthRoute = require('./Routes/auth')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', verifyAccessToken, async (req, res, next) => {
  res.send('Hello from express.')
})

app.use('/auth', AuthRoute)

app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const sgMail = require('@sendgrid/mail') 68.5K (gzipped: 20K)
const API_KEY =
'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' ;
sgMail.setApiKey(API_KEY){
  const message = {
to: ['recievermail@gmail.com', 'xyz@gmail.com'],
from: {
name: 'xyz',
email: 'xyz@gmail.com',
},
subject: 'Hello from sendgrid' ,
text: 'Hello from sendgrid',
html: '<h1>Hello from sendgrid</h1>',
};
sgMail
.send(message)
.then((respose)=> console.log('Email sent ...'))
.catch((error)=> console.log(error.message));
}