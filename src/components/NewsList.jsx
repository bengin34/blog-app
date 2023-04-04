import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { border } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewsList = ({ news }) => {
  const navigate = useNavigate();
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Typography
        variant="h5"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderBottom="1px solid "
        marginBottom="10px"
      >
        Latest Technology News
      </Typography>
      {news?.map((item) => (
        <>
          {" "}
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={item?.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item?.creator}
                  </Typography>
                  -- {item?.description.slice(0, 120)}...
                  <Button onClick={() => navigate({ to: item.link })}>
                    Read News
                  </Button>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
};

export default NewsList;
