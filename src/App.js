import React, { useEffect } from 'react';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Submissions from './pages/Submissions/container';
// import Navbar from './components/MainPage/Navbar/Navbar';
import { Layout } from './pages/Submissions/components/layout';
import { Toaster } from 'react-hot-toast';
import { Navigator } from './components/navbar/index';
import Home from 'pages/Home/container';
import Footer from 'pages/Home/components/footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import About from 'pages/About/container';
import Admissions from 'pages/addmission/container';
import RectorsMessage from 'pages/test-pages/rector-massage/container';
import UniversityStructure from 'pages/university-structure/container';
import Levels from 'pages/Levels/container';
import ProgramsPage from 'pages/programs';
import DirectorPage from 'pages/director/container';
import LevelPage from 'pages/level';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: false });
    // setLoading(true);
  }, []);
  return (
    <BrowserRouter>
      <Navigator />
      <Switch>
        <Route path="/rectors-message" exact component={RectorsMessage} />
        <Route path="/" exact component={Home} />
        <Route path="/personal-info" component={Submissions} />
        <Route path="/admission" component={Profile} />
        <Route path="/university-admissions" component={Admissions} />
        <Route path="/partner-universities/blog/:id" component={About} />
        <Route path="/university-structure" component={UniversityStructure} />
        <Route path="/bachelor" component={Levels} />
        <Route path="/branch/:id" component={DirectorPage} />
        <Route path="/level/:id" component={LevelPage} />
        <Route path="/master" component={Levels} />
        <Route path="/phd" component={Levels} />
        <Route path="/about-university" component={ProgramsPage} />
        <Layout />
      </Switch>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
