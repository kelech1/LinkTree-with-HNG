import './App.css';
import { Homepage } from './components/Homepage';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Errorpage from './components/Errorpage';
// eslint-disable-next-line no-unused-vars
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/Contact' element={<Contact />} />
        <Route exact path='/Errorpage' element={<Errorpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;