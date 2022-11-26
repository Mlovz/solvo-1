import { useEffect } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Compass from "./pages/Compass/Compass";
import Favorite from "./pages/Favorite/Favorite";
import Message from "./pages/Message/Message";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compass" element={<Compass />} />
        <Route path="/message" element={<Message />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
