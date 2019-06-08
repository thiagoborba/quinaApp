import app from './config/express'

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
