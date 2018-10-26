import React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const SAVE_DJ = gql`
    mutation CreateDj (
        $username: String!
        $feed_url: String!
        $display_name: String!
    ) {
        createDJ(
            data: {
                username: $username
                feed_url: $feed_url
                display_name: $display_name
            }
        ) {
            username
            feed_url
            display_name
        }
    }
`

const AddArtistField = () => {
    return (
        <Mutation mutation={SAVE_DJ}>
            {({ CreateDj  }) => {
                return (
                    <input />)
            }}
        </Mutation>
    )
}

export default AddArtistField
