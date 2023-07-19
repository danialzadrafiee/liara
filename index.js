const express = require("express")
const fetch = require("node-fetch")
const app = express()
const port = 3000

app.get("/download", async (req, res) => {
  const url = req.query.url

  if (url) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "curl/7.64.1",
        },
      })
      const body = await response.text()

      // Setting the headers to indicate that this should be a downloaded file
      res.setHeader("Content-disposition", "attachment; filename=data.txt")
      res.setHeader("Content-Type", "text/plain")
      res.charset = "UTF-8"

      // Writing the body content to the response, which will be downloaded as a text file
      res.write(body)
      res.end()
    } catch (err) {
      res.status(500).send(`Error: ${err.message}`)
    }
  } else {
    res.send("No URL provided.")
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
