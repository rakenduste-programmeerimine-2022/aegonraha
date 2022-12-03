import { Link } from "react-router-dom"
import {
  Typography,
  Paper,
  CssBaseline,
  Container,
  Button,
  TextField
} from "@mui/material"
import Box from "@mui/material/Box"

const sxStyle = {
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4
}

const loginStyle = { padding: " 20px 20px", width: 350, margin: "30px auto" }

const Kodu = () => {
  return (
    <>
      <CssBaseline />
      <main>
        <Box sx={sxStyle}>
          <Container
            maxWidth="sm"
            style={{ marginTop: "50px" }}
          >
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Liitu Aeg on Raha keskkonnaga!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Leia huvitavaid tooteid, võrdle hindu, lisa oma profiili alla
              lemmiktooteid. Kõigi funktsionaalsuste kasutamiseks registreeri
              kasutaja ning logi sisse
            </Typography>
            <Paper
              elevation={10}
              sx={loginStyle}
            >
              <form>
                <TextField
                  style={{ margin: 10 }}
                  label="Kasutanimi"
                  placeholder="Sisesta kasutajanimi"
                ></TextField>
                <TextField
                  style={{ margin: 10 }}
                  label="Parool"
                  placeholder="Sisesta parool"
                ></TextField>
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                  >
                    Logi sisse
                  </Button>
                </Link>
              </form>
            </Paper>
            <Link
              to="/registreeri"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                color="primary"
              >
                Registreeri
              </Button>
            </Link>
          </Container>
        </Box>
      </main>
    </>
  )
}

export default Kodu
