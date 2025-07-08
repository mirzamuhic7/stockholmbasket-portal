import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  TextField,
  Button,
} from "@mui/material";

type Player = {
  id: number;
  name: string;
  position: string;
  points: number;
};

export default function Players() {
  const [data, setData] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);
  const [teamId, setTeamId] = useState("");

  const fetchPlayers = async () => {
    if (!teamId) return;
    setLoading(true);
    try {
      const res = await axios.get(`/api/players?teamId=${teamId}`);
      setData(res.data);
    } catch (err) {
      console.error("Fel vid hämtning av spelare:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <TextField
        label="Team ID"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={fetchPlayers}>
        Hämta Spelare
      </Button>

      {loading ? (
        <CircularProgress sx={{ display: "block", margin: "20px auto" }} />
      ) : (
        <TableContainer sx={{ marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Namn</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Poäng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((player) => (
                <TableRow key={player.id}>
                  <TableCell>{player.id}</TableCell>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>{player.position}</TableCell>
                  <TableCell>{player.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
}