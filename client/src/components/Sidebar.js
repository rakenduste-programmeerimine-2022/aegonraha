import { Home } from "@mui/icons-material"
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material"
import React from "react"

const Sidebar = () => {
  return (
    <Box
      bgcolor="white"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="relative">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="viewproducts"
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="PC components" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="viewproducts"
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Monitors " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="viewproducts"
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="PC accessories" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
