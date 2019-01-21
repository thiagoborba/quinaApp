import app from './config/express';

const port = 3000;

app.get('/', (req, res) => {
  res.send('adfnasjdhjasgjsghag')
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
});