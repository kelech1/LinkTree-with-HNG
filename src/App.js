import './App.css';

import React from 'react';
import slack from './icons/slack.png'
import github from './icons/github.png'
import share from './icons/share.png'

import i4g from './icons/I4G.png'
import vector from './icons/Zuri.png'
// eslint-disable-next-line no-unused-vars
import errorPage from './error-page/errorPage';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <div className='Image'>
            <img className='profile__img' src= {process.env.PUBLIC_URL + "profile__img.jpg"} alt="avatar" id="profile__img" />
            
          </div>
          <h3>Kelechi Henry</h3>
          <h1 id="slack">
          Kacey
          </h1>
        </div>
        <button>
          <img src={share} alt="share" id="share"/>
        </button>
      </header>
      <main className="links">
        <a id="twitter" href="https://twitter.com/0xKacey" target="_blank" rel="noreferrer">
          Twitter Link
        </a>
        <a href="https://training.zuri.team/" id="btn__zuri" target="_blank" rel="noreferrer">
          Zuri Team
        </a>
        <a href="http://books.zuri.team/" id="books" target="_blank" rel="noreferrer">
          Zuri Books
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Kacey" id="book__python" target="_blank" rel="noreferrer">
          Python Books
        </a>
        <a href="https://background.zuri.team/" id="pitch" target="_blank" rel="noreferrer">
          Background Checks for Coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="book__design" target="_blank" rel="noreferrer">
          Design Books
        </a>
        <div className="socials" id="">
          <img src={slack} alt="icons"/> 
          <img src={github} alt="icons"/>        
        </div>
      </main>
      <footer className="footer" id="">
          <img src={vector} id="vector" alt="logo"/>  
          <p>HNG Internship 9 Frontend Task</p>
          <img src={i4g} id="i4g" alt="logo"/> 
      </footer>
    
    </div>
  );
}

export default App;