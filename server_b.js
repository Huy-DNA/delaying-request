import express from 'express';

const app = express();

console.log('Server B is listening on port 3001');

app.get('/', async (req, res) => {
  const id = req.query.id;
  console.log(Date.now(), id);
  res.sendStatus(200);
});

app.listen(3001);
