import * as React from "react";
import styled from "react-emotion";
import Divider from "./divider";
import Feed from './feed_list'

const ContentsContainer = styled("section")`
  height: 100vh;
  width: 66%;
  margin-top: 100px;
  padding: 0px 10px;

  h2 {
    color: #1A3937;
    margin-bottom: 0;
    min-height: 35px;
  }
`;

const Contents = ({ selectedDj }) => {
  return (
    <ContentsContainer>
      <h2>{selectedDj}</h2>
      <Divider />
      {selectedDj && <Feed username={selectedDj} />}
    </ContentsContainer>
  )
}

export default Contents;