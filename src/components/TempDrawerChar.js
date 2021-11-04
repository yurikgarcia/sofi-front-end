import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import { flexbox } from '@mui/system';

import {Link} from 'react-router-dom';


export default function TempDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

    

  <List>
    
   <Link to="/characters" style={{ textDecoration: 'none', color: 'black'}}>
          <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'center'}}> 
                <h3>Characters</h3>
          </ListItem>
      </Link>

  </List>


      <Divider />

    </Box>
  );

  return (
    <div>

      <Box>
        <h2> See Full List</h2>

      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ViewListOutlinedIcon sx={{ fontSize: 100 }} color ="disabled" onClick={toggleDrawer(anchor, true)}>{anchor}</ViewListOutlinedIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
          </Box>
    </div>

  );
}