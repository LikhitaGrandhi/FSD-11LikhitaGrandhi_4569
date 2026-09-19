import React from "react";
import Header from "./Header";
import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Component Nesting Demo</h1>

      {/* Nested Components */}
      <Header />
      <Student />
    </div>
  );
}

export default App;
