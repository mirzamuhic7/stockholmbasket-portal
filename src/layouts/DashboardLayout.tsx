import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Box } from '@mui/material'

const DashboardLayout = ({ children }: any) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/players">Players</Button>
        <Button color="inherit" component={Link} to="/tournaments">Tournaments</Button>
        <Button color="inherit" component={Link} to="/settings">Settings</Button>
      </Toolbar>
    </AppBar>
    <Box p={3}>{children}</Box>
  </Box>
)

export default DashboardLayout