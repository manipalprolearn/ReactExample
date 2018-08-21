import React, { Component } from 'react';
import './App.css';
import { HeaderComponent } from "./headerComponent";
import { FooterComponent  } from "./footerComponent";
import { HomeComponent  } from "./homeComponent";


class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>

        <HomeComponent></HomeComponent>

        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default App;
