import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Tasks from './pages/Tasks';
import Settings from './pages/Settings';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import './css/App.css';
import Logo from './images/Logo.png';

export const App = (): JSX.Element => {
  return (
    <div className="h-100">
      <Container fluid className="h-100">
        <BrowserRouter>
          <Row className="py-3 h-100">
            <Sidebar logo={Logo} />
            <Switch>
              <Route exact path="/">
                <Tasks />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
            </Switch>
          </Row>
          <Footer />
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
