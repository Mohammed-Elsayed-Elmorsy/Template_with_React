import './App.css';
import { Component } from 'react';
import Home from './pages/home/Home';
import {  BrowserRouter , Routes , Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import SearchBar from './components/Search';

class App extends Component {

  render(){
    return(
      <div className='container'>
        <SearchBar/>
          <BrowserRouter>
             <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/port' element={<Portfolio/>}/>
              <Route path='/contact' element={<Contact/>}/>
             </Routes>
          </BrowserRouter>
      </div>
    )
  }
}
export default App;
