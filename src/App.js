import React, { useState } from "react";
import './App.css'
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";



function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isChanged, setIsChanged] = useState(false)

  const addUser = (e) => {
    e.preventDefault();
    setIsChanged(true)
  }

  return (
    <div className="App">
      <Header name={name} isChanged={isChanged} />
      <div className="main">
        <Sidebar name={name} isChanged={isChanged} />
        <Form addUser={addUser} setName={setName} setEmail={setEmail} />
      </div>
    </div>
  );
}

export default App;
