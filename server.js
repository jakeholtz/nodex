const app = require('express')();
const client = require('path').join(__dirname + '/client.html');

app.get('/', (req, res) => res.sendFile(client));

app.listen(3000, () => console.log("Listening in on port 3000"));