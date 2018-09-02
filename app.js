'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

// app.get('/', (req, res) => {
// //	res.status(200).send('Hello, index!');
// 	console.log('rendering index to client');
// 	res.render('index');
// });
// 
// app.get('/.*', (req, res) => {
//   res.status(200).send('Hello, any other page!');
// });

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
