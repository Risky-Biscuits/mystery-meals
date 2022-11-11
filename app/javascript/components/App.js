import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

const App = (props) => {
  return (
    <div >
      <Header {...props} />
      <div className='App'>
      <Home {...props} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
