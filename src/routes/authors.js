import express from 'express'
import Author from '../models/Author'

const router = express.Router()

router.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find()

    res.send({ authors })

    console.log('authors find successfully')
  } catch (err) {
    res
      .status(400)
      .send({
        error: `searching fail, ${err}`,
      })

    console.log(err)
  }
})

router.post('/authors', async (req, res) => {
  try {
    const author = await Author.create(req.body)

    res.send({ author })

    console.log('author created successfully')
  } catch (err) {
    res
      .status(400)
      .send({
        error: `create author fail, ${err}`,
      })

    console.log(err)
  }
})

export default router
