import * as React from "react"
import Aside from "./components/aside_container"
import Contents from "./components/contents_container"
import SideDrawer from "./components/side_drawer"
import styled from "react-emotion"
import { ApolloProvider } from "react-apollo"
import client from "./client/client"
import NavBar from "./components/navbar"
import "./styles.css"

const Container = styled("div")`
  display: flex;
  width: 100%;
`

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDj: "",
        }

        this.setDj = this.setDj.bind(this)
    }

    setDj(selectedDj) {
        this.setState({
            selectedDj,
        })
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <NavBar />
                    <Container>
                        <SideDrawer>
                            <Aside setDj={this.setDj} />
                        </SideDrawer>
                        <Contents selectedDj={this.state.selectedDj} />
                    </Container>
            </ApolloProvider>
        )
    }
}

export default App
