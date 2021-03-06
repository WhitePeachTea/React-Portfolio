const express = require("express");

const port = process.env.PORT || 3000;
var app = express();

app.get('/*', (req, res) => {
    let url = path.join(__dirname, '../client/build', 'index.html');
    if (!url.startsWith('/app/')) // we're on local windows
      url = url.substring(1);
    res.sendFile(url);
  });

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});