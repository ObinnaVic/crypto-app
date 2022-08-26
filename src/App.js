import "./App.css";
import NavBar from "./components/Nav";
import SignIn from "./components/Signup";
import SubNav from "./components/SubNav";
import Body from "./components/Body";
import Exchanges from "./components/Exchanges";
import Download from "./components/Download";
import SingleCoin from "./components/Singlecoin";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
      <>
        <SubNav />
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<SignIn setUser={setUser} />} />
            <Route path="home" element={<Body user={user} />} />
            <Route path="exchanges" element={<Exchanges user={user} />} />
            <Route path="download" element={<Download user={user} />} />
            <Route path="coin/:id" element={<SingleCoin user={user} />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </>
  );
}

export default App;
