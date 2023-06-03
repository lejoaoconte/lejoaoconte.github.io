import React, { useEffect } from "react";

import img from "./assets/coder.svg";
import Header from "./components/header";

const App = () => {
  useEffect(() => {
    window.location.replace("https://github.com/lejoaoconte");
  }, []);

  return (
    <main>
      <Header />
      {/* <img src={img} width={100} /> */}
    </main>
  );
};

export default App;
