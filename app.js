'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

if (module === require.main) {
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
