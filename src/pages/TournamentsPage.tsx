import React, { useEffect, useState } from 'react'
import { fetchTournaments } from '../api/profixio'
import { DataGrid } from '@mui/x-data-grid'
import { Card, CardContent, Typography, Box } from '@mui/material'

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([])

  useEffect(() => {
    fetchTournaments().then(setTournaments).catch(console.error)
  }, [])

  return (
    <Box sx={{ p: 4, background: '#f4f7fe', minHeight: '100vh' }}>
      <Card sx={{ maxWidth: 900, mx: 'auto', boxShadow: 3, borderRadius: 4 }}>
        <CardContent>
          <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
            Tournaments
          </Typography>
          <Box sx={{ height: 400, width: '100%', background: '#fff', borderRadius: 2, boxShadow: 1 }}>
            <DataGrid
              rows={tournaments}
              columns={[
                { field: 'id', headerName: 'ID', width: 90 },
                { field: 'name', headerName: 'Name', width: 200 },
                { field: 'startDate', headerName: 'Start Date', width: 150 },
                { field: 'endDate', headerName: 'End Date', width: 150 }
              ]}
              pageSize={5}
              sx={{
                border: 0,
                fontFamily: 'inherit',
                '& .MuiDataGrid-columnHeaders': {
                  background: '#e9ecef',
                  fontWeight: 700,
                  fontSize: 16,
                },
                '& .MuiDataGrid-row': {
                  fontSize: 15,
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}