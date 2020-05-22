import React from "react";
import "./App.css";
import WelcomeMessage from "./componants/WelcomeMessage";
import AppLayout from './componants/AppLayout'


function App() {
  return (
    <AppLayout>
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
