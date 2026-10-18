const express = require('express');
const path = require('path');
const app = express();
app.disable('x-powered-by');
app.use((req, res, next) => { res.set({ 'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'DENY' }); next(); });
app.get('/healthz', (_req, res) => res.send('ok'));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7d' }));
app.listen(process.env.PORT || 3000, () => console.log('Elite Unisex Salon running'));
