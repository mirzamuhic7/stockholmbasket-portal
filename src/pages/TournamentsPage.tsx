import React, { useEffect, useState } from 'react'
import { fetchTournaments } from '../api/profixio'
import { DataGrid } from '@mui/x-data-grid'

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([])

  useEffect(() => {
    fetchTournaments().then(setTournaments)
  }, [])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Tournaments</h2>
      <DataGrid
        rows={tournaments}
        columns={[
          { field: 'id', headerName: 'ID', width: 90 },
          { field: 'name', headerName: 'Name', width: 150 },
          { field: 'startDate', headerName: 'Start Date', width: 150 },
          { field: 'endDate', headerName: 'End Date', width: 150 }
        ]}
        pageSize={5}
      />
    </div>
  )
}