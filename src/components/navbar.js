import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import classNames from "classnames"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { withStyles } from "@material-ui/core/styles"

const NavBar = (props) => {
    const { classes, isDrawerOpen } = props
    return (
        <AppBar className={classNames(classes.appBar, {
            [classes.appBarShift]: isDrawerOpen,
          })}>
            <Toolbar disableGutters={props.isDrawerOpen}>
                <IconButton onClick={props.toggleDrawer} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const drawerWidth = 240

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
})

export default withStyles(styles)(NavBar)
