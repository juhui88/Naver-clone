import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const Wrap = styled.div`
  margin: 0 auto;
`
function App() {
  return (
    <Wrap>
      <Header/>
    </Wrap>
  );
}

export default App;
