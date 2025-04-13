import { useEffect, useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div>
      <button style={{background:theme === "light" ? "#fff" : "#333",width:"100px",height:'100px'}} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default UseState;
