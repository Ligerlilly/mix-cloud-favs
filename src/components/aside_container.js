import * as React from 'react'
import styled from 'react-emotion'
import FavoritesList from './favorites_list'

const AsideContainer = styled('aside')`
  display: flex;
  margin-top: 100px;
  height: 100vh;
  width: 33%;
`

const Aside = ({ setDj }) => {
	return (
		<AsideContainer>
			<FavoritesList setDj={setDj} />
		</AsideContainer>
	)
}

export default Aside
