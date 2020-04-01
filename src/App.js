import React from "react";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <Contact name="Rodney Mullen" avatar="https://randomuser.me/api/portraits/men/74.jpg" online/>
      <Contact name="Colleen Fox" avatar="https://randomuser.me/api/portraits/women/11.jpg" offline/>
      <Contact name="Deaan Kelly" avatar="https://randomuser.me/api/portraits/women/75.jpg" online/>
    </div>
  );
}



export default App;
