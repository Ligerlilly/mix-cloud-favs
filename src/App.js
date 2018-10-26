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
            isDrawerOpen: true,
        }

        this.setDj = this.setDj.bind(this)
        this.toggleDrawer = this.toggleDrawer.bind(this)
    }

    setDj(selectedDj) {
        this.setState({
            selectedDj,
        })
    }

    toggleDrawer() {
        this.setState((prevState) => ({
            isDrawerOpen: !prevState.isDrawerOpen,
        }))
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <NavBar
                    toggleDrawer={this.toggleDrawer}
                    isDrawerOpen={this.state.isDrawerOpen}
                />
                <Container>
                    <SideDrawer isOpen={this.state.isDrawerOpen}>
                        <Aside setDj={this.setDj} />
                    </SideDrawer>
                    <Contents
                        selectedDj={this.state.selectedDj}
                        isOpen={this.state.isDrawerOpen}
                    />
                </Container>
            </ApolloProvider>
        )
    }
}

export default App
