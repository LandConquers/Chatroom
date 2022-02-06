const express = require('express')

const app = express()
const PORT = 1324 || process.env.PORT

app.listen(PORT, () => console.log(`App is live on port ${PORT}`))