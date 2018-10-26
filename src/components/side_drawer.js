import React from "react"
import { withStyles, Drawer } from "@material-ui/core"

const drawerWidth = 240

const styles = (theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        transition: theme.transitions.create([ "margin", "width" ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create([ "margin", "width" ], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
          width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
})

class SideDrawer extends React.Component {
    render() {
        return (
            <Drawer
                className={this.props.classes.drawer}
                anchor="left"
                variant="persistent"
                open={this.props.isOpen}
                classes={{
                    paper: this.props.classes.drawerPaper,
                }}
            >
                {this.props.children}
            </Drawer>
        )
    }
}

export default withStyles(styles)(SideDrawer)
