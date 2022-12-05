import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Compass from "./pages/Compass/Compass";
import Favorite from "./pages/Favorite/Favorite";
import Message from "./pages/Message/Message";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compass" element={<Compass />} />
          <Route path="/message" element={<Message />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
