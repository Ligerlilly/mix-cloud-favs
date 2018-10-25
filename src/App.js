import * as React from 'react'
import Aside from './components/aside_container'
import Contents from './components/contents_container'
import styled from 'react-emotion'
import { ApolloProvider } from 'react-apollo'
import client from './client/client'
import './styles.css'

const Container = styled('div')`
  display: flex;
  width: 100%;
`

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedDj: '',
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
				<Container>
					<Aside setDj={this.setDj} />
					<Contents selectedDj={this.state.selectedDj} />
				</Container>
			</ApolloProvider>
		)
	}
}

export default App