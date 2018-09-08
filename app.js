'use strict';

// const Storage = require('@google-cloud/storage');
// const storage = Storage();
// const bucket = storage.bucket('primordial-saga-207919.appspot.com');
// const downloadOptions = {destination : 'public/game_data/beauties-and-the-beast/Build/beauties-and-the-beast.data.unityweb'}
// 
const express = require('express');
const app = express();

app.use(express.static('public'));

if (module === require.main) {
	// Download the big juicy beauty and the beast data file from GCS
//	bucket.file('beauties-and-the-beast.data.unityweb').download(downloadOptions)
//	.then(() => {
//		console.log('Downloaded the big data file');
//	})
//	.catch(err => {
//		console.error('ERROR:', err);
//	});
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
