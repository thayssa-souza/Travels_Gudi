import React from "react";
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Style from './index.css';

export default function App(){
  return(
    <section>
        <Header />
        <Main />
        <Footer />
    </section>
  )
}