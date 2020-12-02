require('dotenv').config()

const axios = require('axios')

const token = process.env.GITHUB_ACCESS_TOKEN

const repo = process.argv[2]
const pull_number = process.argv[3]
const owner = process.argv[4] || 'dramancompany'

const SERVER_TEAM_DEVS = ['deopard', 'dizy64', 'ace9809', 'sallgoood', 'nasang88', 'taehwakang']

// POST /repos/:owner/:repo/pulls/:pull_number/requested_reviewers
axios.post(`https://api.github.com/repos/${owner}/${repo}/pulls/${pull_number}/requested_reviewers`, {
  reviewers: SERVER_TEAM_DEVS,
  team_reviewers: ['server']
}, { headers: { 'Authorization': `token ${token}`, 'Content-Type': 'application/json' } })
.then(res => {
  console.log('Success!!!')
  // console.log(res.data) // If needed.
})
.catch(console.error)
