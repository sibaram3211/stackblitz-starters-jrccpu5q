const express = require('express');
const cors = require('cors');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

// ✅ Add this — allows all origins (fine for dev/demo)
app.use(cors({
  origin: '*',
  methods: ['GET'],
}));


const DEADLINE = new Date('2026-12-31T23:59:59Z');

app.get('/api/deadline', (req, res) => {
  const secondsLeft = Math.max(0,Math.floor((DEADLINE.getTime() - Date.now()) / 1000));
  res.json({ secondsLeft });
});

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 
