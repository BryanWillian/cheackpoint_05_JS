import React from 'react';
import Header from "../src/components/header/Header"
import Aside from "../src/components/aside/aside"
import Footer from "../src/components/footer/footer"
import styled from 'styled-components';

const StyledApp = styled.div`
 min-height: 1200px; 
`
function App() {
  return (
    <div className="App">
    
       <Header /> 
       <Aside />
       <Footer />
    

    </div>
  );
}

export default App;