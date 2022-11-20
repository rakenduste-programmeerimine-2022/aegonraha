import { Route, Routes } from "react-router-dom"
import { React, useState } from "react"
import ResponsiveAppBar from "./components/Nav"
import Kodu from "./pages/Kodu"
import Lemmikud from "./pages/Lemmikud"
import Tooted from "./pages/Tooted"
import Registreeri from "./pages/Registreeri"
// import TextField from "@mui/material/TextField"
// import List from "./components/List"
import "./App.css"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route
          path="/"
          element={<Kodu />}
        />
        <Route
          path="/tooted"
          element={<Tooted />}
        />
        <Route
          path="/lemmikud"
          element={<Lemmikud />}
        />
        <Route
          path="/registreeri"
          element={<Registreeri />}
        />
      </Routes>
      {/* <h1>SearchBar</h1> */}
      {/* <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div> */}
      {/* <List /> */}
    </div>
  )
}

export default App
