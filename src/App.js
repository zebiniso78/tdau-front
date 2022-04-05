import React from 'react';
import './App.css';
import newsCard from './components/newsCard';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Main />
      <newsCard
        title="A seminar-training on publishing articles was held at our university"
        text='A seminar-training for professors and teachers of Tashkent State Agrarian University on the publication of articles in specialized scientific publications on the list of international scientific and technical databases "ScienceDirect" and "Web o f science" was held. A seminar-training for professors and teachers of Tashkent State Agrarian University on the publication of articles in specialized scientific publications on the list of international scientific and technical databases "ScienceDirect" and "Web o f science" was held.'
      />
    </div>
  );
}

export default App;
