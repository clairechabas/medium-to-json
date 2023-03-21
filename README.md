# 📰 Medium To JSON

Turn any Medium feed into a JSON object you can consume on your own site.

<br />

## Getting Started
1. Clone this repo
2. Install dependencies by running `npm install`
3. Start the serer by running `npm start`
4. Open your favorite API client (Postman or Insomnia for instance) or just open up a browser tab to make a GET request to 'http://localhost:8081/api/medium-posts/<MEDIUM_USERNAME>' to fetch the posts from a specific Medium user.

<br />

## Implement In Your Front End App
To use this in your own application, just install the `rss-to-json` package:

```bash
npm install rss-to-json
```


And adapt the following logic from the endpoint to your needs:

```javascript
import { parse } from 'rss-to-json'

const fetchPosts = async (username) => {
  const getFeed = async () => {
    let rss = await parse(`https://medium.com/feed/@${username}`)

    return JSON.stringify(rss, null, 3)
  }

  const json = await getFeed()
  const posts = JSON.parse(json).items

  return posts
}
```

Enjoy!

<br />

*Credit: This project is using the [rss-to-json](https://www.npmjs.com/package/rss-to-json) library.*