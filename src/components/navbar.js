import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { withStyles } from '@material-ui/core/styles';

const NavBar = (props) => {
    return (
        <AppBar className={props.classes.appBar}>
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
     );
}

const styles = {
    root: {
        flexGrow: 1,
      },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
  };

export default withStyles(styles)(NavBar);