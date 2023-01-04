import React from "react";
import Header from './components/header/header';
import Main from './components/main/main.jsx';
import Footer from './components/footer/footer';
import'./index.css';

export default function App(){
  return(
    <section>
        <Header />
        <Main />
        <Footer />
    </section>
  )
}