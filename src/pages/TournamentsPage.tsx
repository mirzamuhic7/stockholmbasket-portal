import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";

type Tournament = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
};

export default function TournamentsPage() {
  const [data, setData] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/profixio");
        setData(res.data);
      } catch (err) {
        console.error("Fel vid hämtning av data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Namn</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>Slut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((tournament) => (
            <TableRow key={tournament.id}>
              <TableCell>{tournament.id}</TableCell>
              <TableCell>{tournament.name}</TableCell>
              <TableCell>{tournament.startDate}</TableCell>
              <TableCell>{tournament.endDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}