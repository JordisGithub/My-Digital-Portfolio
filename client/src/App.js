import React from 'react';
import ReactDOM from 'react-dom';
// import React, { useState, useRef } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import TheStack from './Components/TheStack/TheStack'
import Specializations from './Components/Specializations/Specializations'
import AboutMe from './Components/AboutMe/AboutMe'
import MyWork from './Components/MyWork/MyWork'
import Experience from './Components/Experience/Experience'
import ContactForm from './Components/ContactForm/ContactForm'
import Footer from './Components/Footer/Footer'

import MenuItems from './Components/Menu/MenuItems'
import MenuButton from './Components/Menu/MenuButton'
import Menu from './Components/Menu/Menu'

import Contact from './Components/Contact/Contact'
// import {
//   app,
//   port,
//   data,
//   mailoptions
// } from './Services/api-helper.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const menu = ['']
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItems
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => { this.handleLinkClick(); }}>

          {val}</MenuItems>)
    });

    return (
      <>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
        <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} />


        <Header />
        <TheStack />
        <Contact />
        <Specializations />
        <AboutMe />
        <MyWork />
        <Experience />
        <ContactForm />

        <Footer />
      </>
    )
  }
}

export default App;
