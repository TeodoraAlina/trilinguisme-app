import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./components/Menu";

const App = () => {
    return (
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/about" element= {<About />} />
          </Routes>
        </BrowserRouter>
    );
};
export default App;