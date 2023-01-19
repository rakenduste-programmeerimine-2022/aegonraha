import {
  Avatar,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material"
import React from "react"

const Rightbar = () => {
  return (
    <Box
      bgcolor="lightgray"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Box
        position="relative"
        width={300}
      >
        <Typography
          variant="h6"
          fontWeight={100}
          mt={2}
        >
          Latest products
        </Typography>
        <ImageList
          cols={3}
          rowHeight={100}
          gap={5}
        >
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography
          variant="h6"
          fontWeight={100}
          mt={2}
        >
          Latest posts
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="How to find products?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Person 1:
                  </Typography>
                  {"Sometimes you need to filter the products"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider
            variant="inset"
            component="li"
          />

          <Divider
            variant="inset"
            component="li"
          />
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
