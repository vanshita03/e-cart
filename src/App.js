import "./App.css";
import Allproduct from "./Components/Assest/Allproduct";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Hero from "./Components/Hero/Hero";
import Mens from "./Components/Mens/Mens";
import Kids from "./Components/Kids/Kids";
import Loginsignup from "./pages/Loginsignup";
import Shopdetails from "./Components/Navbar/Shopdetails";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Search } from "@mui/icons-material";

function App() {
  const [search, setsearch] = useState("");
  const [darkmode, setdarkmode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkmode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <div>
          <BrowserRouter>
            <Navbar
              search
              ={search}
              setsearch={setsearch}
              check={darkmode}
              change={() => setdarkmode(!darkmode)}
              theme={darkTheme}
            />
            <Routes>
              <Route path="/Hero" element={<Hero search={search} check={darkmode}
              change={() => setdarkmode(!darkmode)}
              theme={darkTheme} />} />
              <Route path="/Mens" element={<Mens />} />
              <Route path="/Allproduct" element={<Cart />} />
              <Route path="/Kids" element={<Kids />} />
              <Route path="/Loginn" element={<Loginsignup />} />
              <Route path="/Shopdetails/:id" element={<Shopdetails />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
