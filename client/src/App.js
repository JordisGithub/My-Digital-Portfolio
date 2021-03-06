import React from 'react';
// import ReactDOM from 'react-dom';
// import React, { useState, useRef } from 'react';
import MenuItems from './Components/Menu/MenuItems'
import MenuButton from './Components/Menu/MenuButton'
import Menu from './Components/Menu/Menu'
import './App.css';
import Header from './Components/Header/Header'
import TheStack from './Components/TheStack/TheStack'
import Specializations from './Components/Specializations/Specializations'
import AboutMe from './Components/AboutMe/AboutMe'
import MyWork from './Components/MyWork/MyWork'
import Experience from './Components/Experience/Experience'
// import ContactForm from './Components/ContactForm/ContactForm'
import Footer from './Components/Footer/Footer'
import Scroll from './Components/ScrollButton/Scroll'
import Form from './Components/ContactForm/Form'
import Formspree from './Components/ContactForm/Formspree'
// import Contact from './Components/Contact/Contact'
// import Accordion from './Components/Specializations/Accordion'




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
        {/* <Accordion /> */}
        {/* <Contact /> */}
        <Specializations />
        <AboutMe />
        <MyWork />
        <Experience />
        {/* <ContactForm /> */}
        <Formspree />
        {/* <Form /> */}
        <Scroll showBelow={250} />

        <Footer />
      </>
    )
  }
}

export default App;
