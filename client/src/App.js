import React from 'react';
import About from './About';
import Fibonacci from './Fibonacci';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Link as RouteLink } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Welcome>
            Welcome to the <Title>Overcomplex Fibonacci Calculator</Title>
          </Welcome>
          <Links>
            <Link to="/">
              Home
            </Link>
            <Link to="/about">
              About
            </Link>
          </Links>
        </Header>
        <main>
          <Route exact path="/" component={Fibonacci} />
          <Route path="/about" component={About} />
        </main>
      </Container>
      <GlobalStyles />
    </Router>
  );
}

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  margin: 5vh auto;
`;

const Welcome = styled.h1`
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
`;

const Title = styled.div`
  color: #541388;
  font-size: 2.5rem;
  font-weight: bold;
  max-width: 70%;
  margin: 0 auto;
`;

const Links = styled.div`
  text-align: center;
`;

const Link = styled(RouteLink)`
  color: #D90368;
  font-size: 1.5rem;

  &:first-child {
    margin-right: 1rem;
  }
`;

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  body * {
    color: #2E294E;
    font-family: sans-serif;
    background-color: #F1E9DA;
  }
`;