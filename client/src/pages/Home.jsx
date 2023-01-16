import { Stack } from "@mui/material"
import React from "react"
import Feed from "../components/Feed"
import Rightbar from "../components/Rightbar"
import Sidebar from "../components/Sidebar"
import Login from "../components/Login"

const Home = () => {
  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Login />
    </div>
  )
}

export default Home
