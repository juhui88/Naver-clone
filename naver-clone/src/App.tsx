import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const Wrap = styled.div`
  margin: 0 auto;
`
const Hr = styled.hr`
  background: #e4e8eb;
  height:1px;
  border:0;
`
function App() {
  return (
    <Wrap>
      <Header/>
      <Hr/>
    </Wrap>
  );
}

export default App;
