import { Mail, Notifications, Savings } from "@mui/icons-material"
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography
} from "@mui/material"

import React, { useState } from "react"
import { Link } from "react-router-dom"

//customer toolbar
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Link to="/">
          <Typography
            variant="h6"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "white",
                textDecoration: "none"
              }
            }}
          >
            Shop
          </Typography>
          <Savings sx={{ display: { xs: "block", sm: "none" } }} />
        </Link>
        <Stack
          spacing={1}
          direction="row"
        >
          <Link to="viewproducts/">
            <Button variant="contained">Products</Button>
          </Link>
        </Stack>
        <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search>
        <Icons>
          <Badge
            badgeContent={4}
            color="error"
          >
            <Mail></Mail>
          </Badge>
          <Badge
            badgeContent={4}
            color="error"
          >
            <Notifications></Notifications>
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            onClick={e => setOpen(true)}
          ></Avatar>
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          ></Avatar>
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
