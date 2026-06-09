// server.js – minimal Express server to serve the static SPA
const express = require('express');
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' cdnjs.cloudflare.com; " +
        "frame-src 'self' www.youtube-nocookie.com; " +
        "style-src 'self' 'unsafe-inline' cdnjs.cloudflare.com; " +
        "img-src 'self' data: https:; " +
        "font-src 'self' cdnjs.cloudflare.com"
    );
    next();
});
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Add this at the TOP of server.js, after const app = express();



// Serve static files from the project root (where index.html lives)
app.use(express.static(__dirname));

// For any unknown route, send back index.html (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Astro by Neetu is running on port ${PORT}`);
});
