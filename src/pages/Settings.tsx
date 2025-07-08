import React from "react";
import { Paper, Typography, Switch, FormControlLabel } from "@mui/material";

export default function Settings() {
  const [notifications, setNotifications] = React.useState(true);

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Inställningar
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        }
        label="Tillåt notiser"
      />
    </Paper>
  );
}