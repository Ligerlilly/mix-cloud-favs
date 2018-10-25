import * as React from "react";
import styled from "react-emotion";
import Divider from "./divider";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_DJS = gql`
  {
    djs {
      username
      display_name
    }
  }
`;

const List = styled("ul")`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0px 10px;

  .list-title {
    color: #1A3937;
    margin-bottom: 0;
    min-height: 35px;
  }
`;

export const ListItem = styled("li")`
  color: #000000;
  font-size: 12px;
  font-weight: 200;
  display: block;
  padding: 8px 0 8px 30px;
  background-color: rgba(255,255,255,0.3);
  border: 2px solid #76678A;
  margin-bottom: 15px;
  margin-top: 15px;
  cursor: pointer;
`;

const DjList = ({ djs, setDj }) => {
    return djs.map(({ display_name, username }) => (
        <ListItem
            onClick={setDj.bind(setDj, display_name)}
        >
            {display_name}
        </ListItem>
    ));
};

const FavoritesList = ({ setDj }) => (
    <Query query={GET_DJS}>
        {({ loading, error, data: { djs } }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <List>
                    <h2 className="list-title">
                        Favorites
                    </h2>
                    <Divider />
                    <DjList
                        djs={djs}
                        setDj={setDj}
                    />
                </List>
            )
        }}
    </Query>
);

export default FavoritesList;
