import React from "react";
import "./App.css";

import Layout from "./components/layout/Layout";
import Opening from "./components/content/opening/Opening";
import About from "./components/content/about/About";
import Values from "./components/content/values/Values";
import Contact from "./components/content/contact/Contact";
import ValueModal from './components/UI/modals/value modal/ValueModal'

function App() {

  return (
    <Layout className="App" >
      <Opening id="opening" />
      <About id="about" />
      <Values id="values" />
      <Contact id="contact" />
      <ValueModal />
    </Layout >
  );
}

export default App;
