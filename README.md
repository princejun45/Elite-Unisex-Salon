# Elite Unisex Salon website
Static site in `public/`, served by a tiny Express server (`server.js`). WhatsApp is the only way to book.

Run: `npm install && npm start` (http://localhost:3000)
Deploy: any Node host (Render, Railway, Fly.io, VPS) or Docker. Build `npm install`, start `npm start`, no env vars needed.
Static hosting also works: upload the `public/` folder to Netlify, Cloudflare Pages, etc.
Change the WhatsApp number in `public/script.js` (`WA`) and the links in `index.html`.
