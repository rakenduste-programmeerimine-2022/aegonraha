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

const Login = () => {
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
              Join AegOnraha community!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Find products with best prices. Compare prices and availability!
              Add products to favorites and more.
            </Typography>
            <Paper
              elevation={10}
              sx={loginStyle}
            >
              <form>
                <TextField
                  style={{ margin: 10 }}
                  label="Kasutanimi"
                  placeholder="Enter your username"
                ></TextField>
                <TextField
                  style={{ margin: 10 }}
                  label="Parool"
                  placeholder="Enter your password"
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
                    Log in
                  </Button>
                </Link>
              </form>
            </Paper>
            <Link
              to="/register"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                color="primary"
              >
                Register here
              </Button>
            </Link>
          </Container>
        </Box>
      </main>
    </>
  )
}

export default Login
