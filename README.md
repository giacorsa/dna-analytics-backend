# DnA Analytics Backend

````text
Lightweight backend built with **Node.js + Express**, acting as a **proxy server** for the DnA Analytics Dashboard.  It retrieves analytical data from a public GitHub API and exposes a clean endpoint consumed by the Vue frontend.  This backend is part of the final project for the Star2Impact Full Stack Developer Master Program.

---

## 🚀 Purpose of the Backend

- Fetch analytical data from a public GitHub JSON API .
- Expose a local endpoint `/api/metrics` for the Vue frontend .
- Prevent CORS issues and simplify data handling.
- Provide a stable, controlled data structure to the frontend.

---

## 🔌 Source API  Data is fetched from:

[Visualizza il file JSON](https://raw.githubusercontent.com/Anita-Liberatore/dna-analytics-api/master/analytics.json)

The backend uses **Axios** to retrieve the data and forwards it to the frontend.

## 📁 Project Structure

```text
backend/
   package.json
   server.js


### `server.js` Responsibilities

- Configure Express server
- Enable CORS
- Fetch analytics data from GitHub
- Expose `/api/metrics` endpoint

---

## ▶️ Running the Backend

### 1. Install dependencies

```bash
npm install

2. Start the server

npm start

Backend runs at:

http://localhost:3001

📡 Available Endpoint

GET /api/metrics

Returns the analytics data retrieved from the GitHub source.

Example response:

{
  "subscriptions": {
    "total": 4821,
    "data": [ ... ]
  },
  "impressions": {
    "total": 344820,
    "data": [ ... ]
  }
}

🔧 Technologies Used

- Node.js
- Express
- Axios
- CORS

🌐 Frontend Integration

The Vue frontend uses a proxy defined in vite.config.js:

server: {
  proxy: {
    '/api': 'http://localhost:3001'
  }
}

This allows the frontend to call:

GET /api/metrics

without CORS issues.

👨‍💻 Author

Gianni — Full Stack Developer (Star2Impact)

📄 License

MIT License

````
