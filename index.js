const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send("Thank you")
})

app.listen(3000, () => console.log('Listing to port 3000'));