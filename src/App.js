import React, { useEffect } from 'react';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Submissions from './pages/Submissions/container';
import Navbar from './components/MainPage/Navbar/Navbar';
import Footer from './components/MainPage/Footer/Footer';
import { Layout } from './pages/Submissions/components/layout';
import Main from './pages/Main';
import { useHistory } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/personal-info" component={Submissions} />
        <Route path="/admission" component={Profile} />
        <Layout />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
