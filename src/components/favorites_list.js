import * as React from "react"
import styled from "react-emotion"
import Divider from "@material-ui/core/Divider"
import AddArtistField from "./add_artist"
import AddCircle from "@material-ui/icons/AddCircle"
import CircularProgress from "@material-ui/core/CircularProgress"
import gql from "graphql-tag"
import { Query } from "react-apollo"

export const GET_DJS = gql`
    query {
        dJs {
            id
            username
            display_name
        }
    }
`

const List = styled("ul")`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0px 10px;

  .list-title {
    color: #1A3937;
    margin-bottom: 0;
    min-height: 35px;
    display: grid;
    grid-template-columns: 1fr auto;

    h2 {
        grid-column-start: 1;
        grid-row-start: 1;
        margin: 0;
    }
    .circle-icon {
        grid-column-start: 2;
        grid-row-start: 1;
        align-self: center;
        cursor: pointer;
    }

    .artist-field {
        grid-row-start: 2;
        grid-colum-start: 1;
    }

    form {
        margin-top: 10px;
        grid-column-start: 1;
        grid-column-end: 3;
    }
  }
`

export const ListItem = styled("li")`
  color: #000000;
  font-size: 14px;
  font-weight: 200;
  display: block;
  padding: 8px 15px;
  background-color: rgba(255,255,255,0.9);
  border: 3px solid #083F5C;
  border-radius: 3px;
  margin-bottom: 15px;
  margin-top: 15px;
  cursor: pointer;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

const DjList = ({ djs, setDj }) => {
    return djs.map(({ display_name, username }) => (
        <ListItem onClick={setDj.bind(setDj, username, display_name)}>
            {display_name}
        </ListItem>
    ))
}

class FavoritesList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isMakeArtist: false,
        }

        this.toggleShowMakeArtist = this.toggleShowMakeArtist.bind(this)
    }

    toggleShowMakeArtist() {
        this.setState((prevState) => ({
            isMakeArtist: !prevState.isMakeArtist,
        }))
    }

    render() {
        const { setDj } = this.props
        const { isMakeArtist } = this.state
        return (
            <Query query={GET_DJS}>
                {({ loading, error, data: { dJs = [] } }) => {
                    if (loading) return <CircularProgress />
                    if (error) return `Error! ${error.message}`
                    return (
                        <List>
                            <div className="list-title">
                                <h2>Djs</h2>
                                <AddCircle
                                    onClick={this.toggleShowMakeArtist}
                                    className="circle-icon"
                                />
                                {isMakeArtist && (
                                    <AddArtistField
                                        className="artist-field"
                                        toggleShowMakeArtist={
                                            this.toggleShowMakeArtist
                                        }
                                    />
                                )}
                            </div>
                            <Divider />
                            <DjList djs={dJs} setDj={setDj} />
                        </List>
                    )
                }}
            </Query>
        )
    }
}

export default FavoritesList
