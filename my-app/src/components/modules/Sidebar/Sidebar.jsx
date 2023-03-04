import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import { getNotesData } from '../../../redux/action/authAction';
import ListItemText from "@mui/material/ListItemText";
import { useDispatch } from "react-redux";
import { getBoxbyColor } from "../../../redux/action/authAction";
// import { useDispatch, useSelector } from 'react-redux';
// import Main from '../Main';

export const Sidebar = () => {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.note);
  // useEffect(() => dispatch(getNotesData()), [dispatch]);
  // console.log(data);
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  const dispatch = useDispatch();
  const getColorbyId = async (text) => {
    await dispatch(getBoxbyColor({ color: text }));
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem
          sx={{
            background:
              "linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(121,9,112,1) 25%, rgba(155,7,121,1) 61%, rgba(255,0,243,1) 100%)",
          }}
        >
          <ListItemText primary={"Filter"} />
        </ListItem>
        <ListItem
          button
          sx={{ backgroundColor: "hotpink" }}
          // onClick={() => Main(data.notes)}
        >
          <ListItemText primary={"Select All"} />
        </ListItem>

        {["#4c7ead", "#a1589e", "#c44633", "#77c433", "#c79e2e", "#33b8c4"].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              sx={{ backgroundColor: text }}
              onClick={() => getColorbyId(text)}
            >
              <ListItemText primary={"Select"} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>{"left"}</Button>
      <SwipeableDrawer
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
};
