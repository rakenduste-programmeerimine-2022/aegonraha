import { React, useState } from "react"
import TextField from "@mui/material/TextField"
import List from "./components/List"
import "./App.css"


function App() {
  return (
    <div className="main">
      <h1>SearchBar</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List />
    </div>
  );
}

export default App;
