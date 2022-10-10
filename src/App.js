import React, { useRef, Fragment } from "react";
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

  const openingRef = useRef();
  const openingDivRef = useRef();

  const toTopHandler = () => {
    // openingRef.current.scroll();
    openingDivRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout className="App">
      {/* <button onClick={toBottomHandler}>to bottom</button> */}
      <div ref={openingDivRef}>
        <Opening ref={openingRef} />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Values />
      </div>
      <div>
        <Contact />
      </div>
      {/* <button onClick={toTopHandler}>to Top</button> */}
    </Layout>
  );
}

export default App;
