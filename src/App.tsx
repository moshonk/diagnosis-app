import React from 'react';
import './App.scss';
import { Button, Content } from 'carbon-components-react';
import PageHeader from './components/PageHeader/PageHeader';
import landingPage from './content/LandingPage/LandingPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  <Switch>
    <Route exact path="/" component={landingPage}></Route>
  </Switch>
  return (
    <div className="App">
        <PageHeader></PageHeader>
        <Content>
          <Button></Button>
        </Content>
    </div>
  );
}

export default App;
