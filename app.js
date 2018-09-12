const express = require("express");
const queries = require('./queries')
const port = process.env.PORT || 3000
const app = express();


//routes
app.get("/", (request, response, next) => {
    queries.list().then(result => response.json({data: result}))
});

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
