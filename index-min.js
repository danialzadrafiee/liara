const express = require("express"),
  fetch = require("node-fetch"),
  app = express(),
  port = 3e3
app.get("/download", async (e, t) => {
  const s = e.query.url
  if (s)
    try {
      const e = await fetch(s, { headers: { "User-Agent": "curl/7.64.1" } }),
        a = await e.text()
      t.setHeader("Content-disposition", "attachment; filename=data.txt"), t.setHeader("Content-Type", "text/plain"), (t.charset = "UTF-8"), t.write(a), t.end()
    } catch (e) {
      t.status(500).send(`Error: ${e.message}`)
    }
  else t.send("No URL provided.")
}),
  app.listen(3e3, () => {})
