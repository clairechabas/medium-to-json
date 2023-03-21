import express, { Express, Request, Response } from 'express'
import { parse } from 'rss-to-json'
const PORT = process.env.PORT || 8081

const app: Express = express()

app.get('/', (req: Request, res: Response) => res.send('Hey there 👋'))

app.get('/api/medium-posts/:username', async (req: Request, res: Response) => {
  const getFeed = async () => {
    let rss = await parse(`https://medium.com/feed/@${req.params.username}`)

    return JSON.stringify(rss, null, 3)
  }

  const json = await getFeed()
  const posts = JSON.parse(json).items

  res.send({ posts })
})

app.listen(PORT, () => console.log(`🚀 Listening on port ${PORT}`))
