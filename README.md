# Memenerator

Pick a meme background and overlay your own caption.

## Stack

- **Client**: React 18, react-router-dom 6, Sass, axios. Bootstrapped with Create React App.
- **Server**: Node + Express, JSON-file backed.

## Prerequisites

- Node 18+ (tested on 22)
- npm 9+

## Setup

```bash
git clone git@github.com:ashychiu/memes-generator.git
cd memes-generator
```

### Server

```bash
cd server
cp .env.example .env       # edit if you want to change PORT or allowed CLIENT_URL
npm install
npm run dev                # nodemon on :8080  (or: npm start)
```

### Client

```bash
cd client
cp .env.example .env       # optional; App.js falls back to http://localhost:8080
npm install
npm start                  # opens http://localhost:3000
```

## Project layout

```
memes-generator/
├── client/                  React app
│   └── src/
│       ├── App.js           Routes + memes fetch
│       └── components/
│           ├── MemesList/   Home grid of memes
│           ├── MemeCard/    Single thumbnail
│           └── MemePage/    Caption editor
└── server/
    ├── index.js             Express app
    ├── routes/memes.js      GET /memes
    └── data/memes.json      Seed data
```

## API

| Method | Path     | Description                |
| ------ | -------- | -------------------------- |
| GET    | `/memes` | Returns the list of memes. |
