import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Call from './pages/Call';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <>
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand className='mr-auto' href='https://github.com/diarmuid-murphy/' target='_blank'>
        Teachee
      </Navbar.Brand>

      <Navbar.Text className='mr-sm-2'>
        Created by Diarmuid Murphy
      </Navbar.Text>
    </Navbar>

    <Container>
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/call'} component={Call} />
          <Route path={process.env.PUBLIC_URL + '*'} component={Home} />
        </Switch>
      </Router>
    </Container>
    </>
  );
}

export default App;
