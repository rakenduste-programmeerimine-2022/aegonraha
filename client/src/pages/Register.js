import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material"
import React from "react"

const Register = () => {
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
          <h2 style={headerStyle}>Register</h2>
          <Typography variant="caption">Add your information</Typography>
        </Grid>
        <form>
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Eesnimi"
            placeholder="Your first name:"
          />
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Perekonnanimi"
            placeholder="Your last name:"
          />
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Kasutajanimi"
            placeholder="Your account name"
          />
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Email"
            placeholder="Your email:"
          />
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Parool"
            placeholder="Your password"
          />
          <TextField
            style={{ margin: 10 }}
            fullWidth
            label="Kinnita parool"
            placeholder="Validate password"
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Register
