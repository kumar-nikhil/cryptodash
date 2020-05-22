import React from "react";
import "./App.css";
import WelcomeMessage from "./componants/WelcomeMessage";
import AppLayout from './componants/AppLayout'
import AppBar from './componants/AppBar'


function App() {
  return (
    <AppLayout>
      <AppBar />
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
