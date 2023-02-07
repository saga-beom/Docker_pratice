'use strict';

const express = require('express');

// 상수
const PORT = 8080;

// 앱
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, console.log(`Running on http://localhost:${PORT}`));