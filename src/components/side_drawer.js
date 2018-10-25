import React from "react"
import { withStyles, Drawer } from "@material-ui/core"

const drawerWidth = 240

const styles = (theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginRight: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
})

const SideDrawer = (props) => {
    return (
        <Drawer
            className={props.classes.drawer}
            anchor="left"
            variant="permanent"
        >
            {props.children}
        </Drawer>
    )
}

export default withStyles(styles)(SideDrawer)
