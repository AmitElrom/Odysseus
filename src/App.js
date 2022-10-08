import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Opening from "./components/content/opening/Opening";
import About from "./components/content/about/About";
import Values from "./components/content/values/Values";
import Contact from "./components/content/contact/Contact";

function App() {
  // const bottomRef = useRef();

  // const toBottomHandler = () => {
  //   bottomRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <Layout className="App">
      {/* <button onClick={toBottomHandler}>to bottom</button> */}
      <Opening />
      <About />
      <Values />
      <Contact />
    </Layout>
  );
}

export default App;
