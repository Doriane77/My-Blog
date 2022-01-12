import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavigationMenu from "./Components/Navigation/NavigationMenu";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <NavigationMenu/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;