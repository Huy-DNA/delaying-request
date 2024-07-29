import express from 'express';

const app = express();

console.log('Server A is listening on port 3000');

function deepSleep (duration) {
  const start = new Date().getTime();
  while (true) {
    const current = new Date().getTime();
    if (current - start > duration) break;
  }
}

app.get('/', async (req, res) => {
  const id = req.query.id;

  console.time(id);

  deepSleep(2000);
  await fetch(`http://localhost:3001/?id=${id}`)

  res.sendStatus(200);

  console.timeEnd(id);
});

app.listen(3000);
