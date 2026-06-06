// server.js – minimal Express server to serve the static SPA
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the project root (where index.html lives)
app.use(express.static(__dirname));

// For any unknown route, send back index.html (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Astro by Neetu is running on port ${PORT}`);
});
