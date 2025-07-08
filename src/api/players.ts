import axios from "axios";

export default async function handler(req: any, res: any) {
  const { teamId } = req.query; // t.ex. /api/players?teamId=123
  try {
    const response = await axios.get(
      `https://profixio-api.stockholmbasket.se/teams/${teamId}/players`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Fel vid hämtning av spelare:", error);
    res.status(500).json({ message: "Kunde inte hämta spelardata." });
  }
}