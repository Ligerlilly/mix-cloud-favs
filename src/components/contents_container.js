import * as React from "react"
import styled from "react-emotion"
import Divider from "@material-ui/core/Divider"
import Feed from "./feed_list"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"

const ContentsContainer = styled("section")`
  height: 100vh;
  width: 66%;
  margin-top: 73px;
  padding: 0px 10px;

  h2 {
    color: #1A3937;
    margin-bottom: 0;
    min-height: 35px;
  }
`

const Contents = ({ selectedDj, selectedDisplayName, isOpen, classes }) => {
    return (
        <ContentsContainer
            className={classNames(classes.content, {
                [classes.contentShift]: isOpen,
            })}
        >
            <h2>{selectedDisplayName}</h2>
            <Divider />
            {selectedDj && <Feed username={selectedDj} />}
        </ContentsContainer>
    )
}

const drawerWidth = 240

const styles = (theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
})

export default withStyles(styles)(Contents)
