import { useRef } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Opening from "./components/content/opening/Opening";
import About from "./components/content/about/About";
import Values from "./components/content/values/Values";
import ValueBox from "./components/UI/value box/ValueBox";
import Contact from "./components/content/contact/Contact";

function App() {
  const first = useRef();
  const bottomRef = useRef();

  // const toTopHandler = () => {
  //   first.current.scrollIntoView({ behavior: "smooth" });
  // };

  // const toBottomHandler = () => {
  //   bottomRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <Layout className="App">
      {/* <button onClick={toBottomHandler}>to bottom</button> */}
      <div ref={first}></div>
      {/* <div> */}
      {/* <button ref={bottomRef} style={{ color: "red" }} onClick={toTopHandler}>
          to top
        </button> */}
      {/* </div> */}
      <Opening />
      <About />
      <Values />
      <Contact />
    </Layout>
  );
}

export default App;
