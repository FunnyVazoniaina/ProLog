const express = require('express');
const cors = require('cors');
const { spawnSync } = require('child_process');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/check-guilty', (req, res) => {
  const { suspect, crimeType } = req.body;
  console.log('Received request:', { suspect, crimeType });

  if (!suspect || !crimeType) {
    return res.status(400).json({ error: 'Missing suspect or crimeType' });
  }

  const query = `(is_guilty(${suspect.toLowerCase()}, ${crimeType.toLowerCase()}) -> write(guilty) ; write(not_guilty)), nl, halt.`;
  const prologFile = path.join(__dirname, 'investigation.pl');

  console.log('Executing Prolog query:', query);
  const result = spawnSync('swipl', [
    '-q',
    '-f',
    prologFile,
    '-g',
    query
  ]);

  console.log('Prolog output:', result.stdout.toString());
  console.log('Prolog warnings/errors:', result.stderr.toString());

  const output = result.stdout.toString().trim();
  const error = result.stderr.toString().trim();

  if (result.status !== 0) {
    console.error('Prolog execution failed:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }

  res.json({ verdict: output });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
