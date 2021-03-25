import admin from 'firebase-admin';
import express from 'express';
import bodyParser from 'body-parser';


const serviceAccount = require("../webdev_02/service-account.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });


const db = admin.firestore();
const app = express();
const port = 8080;
app.use(bodyParser.json());

app.get('/', (_, res) => {
  res.send('connected!');
})

const songCollections = db.collection("songs")

app.post('/createSong', async function (req, res) {
  const song = req.body;
  const songDoc = songCollections.doc();
  await songDoc.set(song);
  res.send(songDoc.id);
})

app.get('/getSongs', async (req, res) => {
  const songsSnapshot = await songCollections.orderBy('name', 'asc').get();
  const allSongs = songsSnapshot.docs;
  const songs = [];
  for (let doc of allSongs) {
    const song = doc.data();
    song.id = doc.id;
    songs.push(song);
  }
  res.send(songs);
})

app.post('/updateRating', async (req, res) => {
  const id = req.body.id;
  const songDoc = await songCollections.doc(id).update(req.body);
  res.send(`Updated Song rating for ${id}`)
})

app.delete('/deleteSong', async (req, res) => {
  const id: any = req.query['id'];
  await songCollections.doc(id).delete();
  res.send(`Deleted song with id: ${id}`)
})

app.listen(port, function () {
  console.log('server started!');
});