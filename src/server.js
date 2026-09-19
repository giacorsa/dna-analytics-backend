import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = 3001;

app.use(cors());

const BASE_URL =
  "https://raw.githubusercontent.com/Anita-Liberatore/dna-analytics-api/master/analytics.json";

app.get("/api/metrics", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    res.json(response.data);
  } catch (error) {
    console.error("Errore nel recupero dati:", error.message);
    res.status(500).json({ error: "Errore nel recupero dei dati" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend DnA analytics in ascolto su http://localhost:${PORT}`);
});
