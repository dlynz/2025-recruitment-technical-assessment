import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem('darkMode');
    return storedPreference ? JSON.parse(storedPreference) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <MainSection darkmode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
