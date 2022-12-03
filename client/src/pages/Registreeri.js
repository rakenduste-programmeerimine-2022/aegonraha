import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material"
import React from "react"

const Registreeri = () => {
  const paperStyle = { padding: " 30px 20px", width: 400, margin: "20px auto" }
  const headerStyle = { margin: 10 }
  return (
    <Grid>
      <Paper
        elevation={20}
        style={paperStyle}
      >
        <Grid align="center">
          <Avatar></Avatar>
          <h2 style={headerStyle}>Registreeri</h2>
          <Typography variant="caption">Lisa oma andmed</Typography>
        </Grid>
        <form>
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Eesnimi"
            placeholder="Sisesta oma eesnimi"
          />
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Perekonnanimi"
            placeholder="Sisesta oma perekonnanimi"
          />
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Kasutajanimi"
            placeholder="Sisesta oma kasutajanimi"
          />
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Email"
            placeholder="Sisesta oma email"
          />
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Parool"
            placeholder="Sisesta parool"
          />
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Kinnita parool"
            placeholder="Kinnita valitud parool"
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
          >
            Kinnita
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Registreeri
