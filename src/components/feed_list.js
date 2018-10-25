import * as React from "react";
import styled from "react-emotion";
import { ListItem } from './favorites_list'
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_FEED = gql`
    query Feed($username: String!){
        cloudCasts {
            embedUrl
            title
            creator(where: {username: $username}) {
              username
            }
        }
    }
`;

const FeedContainer = styled('ul')`
    list-style-type: none;
    padding: 0;
`

const FeedList = ({ username }) => (
    <Query query={GET_FEED} variables={{ username }}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error!: ${error}`;

            return data.cloudCasts.map(({ embedUrl, title }, i) => {
                return (
                    <ListItem key={`${title}${i}`}>
                        <h3>{title}</h3>
                        <span>{createEmbed(embedUrl)}</span>
                    </ListItem>
                )
            })
        }}
    </Query>
)

const Feed = ({ username }) => {
    return (
        <FeedContainer>
            <FeedList username={username} />
        </FeedContainer>
    )
}

export default Feed;

const createEmbed = (embedUrl) => <div dangerouslySetInnerHTML={{ __html: embedUrl }}></div>