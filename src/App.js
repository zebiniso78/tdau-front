import React, { useEffect } from 'react';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Submissions from './pages/Submissions/container';
// import Navbar from './components/MainPage/Navbar/Navbar';
import { Layout } from './pages/Submissions/components/layout';
import { Toaster } from 'react-hot-toast';
import { Navigator } from './components/navbar/index';
// import { MainLayoutProvider } from 'styles/globalStyle';
import  Home  from 'pages/Home/container';
// import { MainSection } from 'pages/Home/components/main';
import  Footer  from 'pages/Home/components/footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import About from 'pages/About/container';


function App() {

  useEffect(() => {
    Aos.init({ duration: 1500, once: false });
    // setLoading(true);
  }, []);
  return (
    <BrowserRouter>
        <Navigator />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/personal-info" component={Submissions} />
        <Route path="/admission" component={Profile} />
        <Route path='/about' component={About} />
        <Layout />
      </Switch>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
