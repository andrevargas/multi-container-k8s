import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function About() {
  return (
    <div>
      <Text>
        I'm here just to test routing with React Router and Nginx!
        Now you can go back <Link to="/">Home</Link>.
      </Text>
    </div>
  )
}

const Text = styled.p`
  font-size: 1.5rem;
  max-width: 50%;
  text-align: center;
  margin: 0 auto;
`;