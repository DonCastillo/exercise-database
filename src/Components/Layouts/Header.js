import React from "react";
import {AppBar, Toolbar, Typography} from '@material-ui/core';


function Header(props) {
	return (
		<AppBar position="static">
        <Toolbar>
			<Typography variant="h6" color="inherit">
				Exercise Database
			</Typography>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
	);
}

export default Header;
