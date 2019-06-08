import express from 'express'
import Author from '../models/Author'

const router = express.Router()

router.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find()

    res
      .status(200)
      .json({
        success: true,
        acquired: true,
        message: `Authors find successfully`,
        data: authors,
      })
  } catch (err) {
    res
      .status(404)
      .json({
        success: true,
        acquired: false,
        message: `Authors not found ${err}`,
      })
  }
})

router.post('/authors', async (req, res) => {
  try {
    await Author.create(req.body)
    const authors = await Author.find()

    return res
      .status(200)
      .json({
        success: true,
        created: true,
        message: `author created successfully`,
        data: authors,
      })
  } catch (e) {
    if (e.code === 11000) {
      const { name, email } = req.body
      return res
        .status(400)
        .json({
          success: false,
          created: false,
          message: `author ${name} not created, email ${email} already exist`,
        })
    }
    return res
      .status(500)
      .json({
        success: false,
        created: false,
        message: `Author not created, ${e.message}`,
      })
  }
})

export default router
