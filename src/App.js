import React from 'react';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Submissions from './pages/Submissions/container';
import Navbar from './components/MainPage/Navbar/Navbar';
import Footer from './components/MainPage/Footer/Footer';
import Main from 'pages/Main';
import { Layout } from './pages/Submissions/components/layout';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar />
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/filing" component={Submissions} />
        <Layout />
      </Switch>

      <Footer /> */}

      <Switch>
        <Route path="/main" exact component={Main} />
        <Route path="/" exact component={Profile} />
        <Route path="/filing" component={Submissions} />
        <Layout />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
