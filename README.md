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
git clone git@github.com:ashychiu/memes-generator.git

## Screenshots

![Memenerator-1](https://user-images.githubusercontent.com/32230130/157367905-36df750d-23ef-4b76-bc21-c4615fcc7966.png)
![Memenerator-2](https://user-images.githubusercontent.com/32230130/157367916-d8aad499-786d-46a4-a156-b4c09521929c.png)
![Memenerator-3](https://user-images.githubusercontent.com/32230130/157367934-ae4f48a2-c57b-45d5-a321-6cd49dfde84d.png)
![Memenerator-4](https://user-images.githubusercontent.com/32230130/157367940-c17c9658-9603-422f-85e2-c4ee35e77014.png)
![Memenerator-5](https://user-images.githubusercontent.com/32230130/157367950-3a312735-967e-4996-8a3c-84dae2f9bd1e.png)
