// components
import Foot from './components/foot/index.js'
import Nav from './components/nav/index.js'

// pages
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import WebDesign from './pages/webdesign'
import Journalism from './pages/journalism'
import Creative from './pages/creative'
import Magazines from './pages/magazines'

import { Routes, Route } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <div id='content-div'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='web-design' element={<WebDesign />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='journalism' element={<Journalism/>} />
          <Route path='creative' element={<Creative/>} />
          <Route path='magazines' element={<Magazines />} />
        </Routes>
        <Foot />
      </div>
    </div>
  );
}

export default App;
