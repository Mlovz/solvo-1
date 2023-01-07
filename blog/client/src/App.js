import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Login, Register, AddPost, Detail } from "pages";
import { AppLayout, AuthLayout, Loading, Navbar } from "components";
import { getUser } from "redux/actions/authAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Loading />

      <div className="container">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/add_post" element={<AddPost />} />
            <Route path="/article/:id" element={<Detail />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
