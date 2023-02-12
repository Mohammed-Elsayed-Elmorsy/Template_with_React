import Contact from '../../pages/Contact/Contact'
import Header from '../../components/Header/Header';
import Land from '../../components/Landing/Land';
import Work from '../../components/Work/Work';
import About from '../../components/About/About'; 
import Portfolio from '../../components/Portfolio/Portfolio'; 
import Social from '../../components/Social/Social'; 
import Profile from '../../components/Profile/Profile'; 
import Footer from '../../components/Footer/Footer'; 
import React, { Component } from 'react';
class Home extends Component {
  render(){

    return (
      <div>
            <Header/>
            <Land/>
            <Work/>
            <Portfolio/>
            <Profile/>
            <About/>
            <Social/>
            <Contact/>
            <Footer/>
      </div>
    )
  }
}

export default Home
