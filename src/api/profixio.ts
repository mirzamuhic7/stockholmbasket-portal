import axios from "axios";

export default async function handler(req: any, res: any) {
  try {
    const response = await axios.get(
      "https://profixio-api.stockholmbasket.se/organisations/SBBF.SE.BB/tournaments"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Fel vid hämtning av data:", error);
    res.status(500).json({ message: "Kunde inte hämta data från Profixio." });
  }
}