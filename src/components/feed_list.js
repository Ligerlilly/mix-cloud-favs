import * as React from "react";
import styled from "react-emotion";
import { ListItem } from './favorites_list'
import CircularProgress from '@material-ui/core/CircularProgress';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_FEED = gql`
    query Feed($username: String!){
        cloudCasts(username: $username) {
            embedUrl
            title
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
            if (loading) return <CircularProgress />;
            if (error) return `Error!: ${error}`;

            return data.cloudCasts.map(({ embedUrl, title }, i) => {
                return (
                    <ListItem key={`${title}${i}`}>
                        <h2>{title}</h2>
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

const createEmbed = (embedUrl) => <StyledEmbed dangerouslySetInnerHTML={{ __html: embedUrl }}></StyledEmbed>

const StyledEmbed = styled("div")`
    margin-bottom: 5px;
`
