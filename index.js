require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData={
  "login": "JainSwasti31",
  "id": 148178401,
  "node_id": "U_kgDOCNUF4Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/148178401?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/JainSwasti31",
  "html_url": "https://github.com/JainSwasti31",
  "followers_url": "https://api.github.com/users/JainSwasti31/followers",
  "following_url": "https://api.github.com/users/JainSwasti31/following{/other_user}",
  "gists_url": "https://api.github.com/users/JainSwasti31/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/JainSwasti31/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/JainSwasti31/subscriptions",
  "organizations_url": "https://api.github.com/users/JainSwasti31/orgs",
  "repos_url": "https://api.github.com/users/JainSwasti31/repos",
  "events_url": "https://api.github.com/users/JainSwasti31/events{/privacy}",
  "received_events_url": "https://api.github.com/users/JainSwasti31/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-10-17T03:48:50Z",
  "updated_at": "2025-08-26T09:21:29Z"
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('SwastiJain3112')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at swasti aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
