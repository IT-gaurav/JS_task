import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const SectionWrapper = styled.div`
  width:100%;
  max-width:1000px;

  margin:auto;
  display:block;
  text-align: center;
  padding: 40px;
  box-sizing:border-box;
  background: #fff;
  border-radius: 8px;
  margin: 30px auto;
  box-shadow:0 4px 6px rgba(0,0,0,0.2);
`

function App() {

  const [name, setName] = useState();

  useEffect(() => {
    socket.on("update");
  }, [])

  useEffect(() => {
    socket.emit('update', name)
  }, [name])


  return (
    <div className="App">
      <SectionWrapper>
        <h1>Section 1</h1>
        <Section1 />
      </SectionWrapper>
      <hr />
      <SectionWrapper>
        <h1>Section 2</h1>
        <Section2 />
      </SectionWrapper>
      <hr />
      <SectionWrapper>
        <h1>Section 3</h1>
        <Section3 />
      </SectionWrapper>
      <SectionWrapper>
        <h1>Section 4</h1>
        <input name='name' onChange={e => setName(e.target.value)} value={name} />
      </SectionWrapper>
    </div>
  );
}

export default App;
