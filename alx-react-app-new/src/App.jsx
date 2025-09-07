import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Counter />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
