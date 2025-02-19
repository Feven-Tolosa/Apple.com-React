import React from "react";
import Header from "./componentes/Header/Header";
import Alert from "./componentes/Alert/Alert";
import Footer from "./componentes/Footer/Footer";
import Main from "./componentes/Main/Main";
import Cart from "./RoutingComponents/Cart/Cart";
import Ipad from "./RoutingComponents/Ipad/Ipad";
import Iphone from "./RoutingComponents/Iphon/Iphone";
import Mac from "./RoutingComponents/Mac/Mac";
import Music from "./RoutingComponents/Music/Music";
import Support from "./RoutingComponents/Support/Support";
import Tv from "./RoutingComponents/Tv/Tv";
import Watch from "./RoutingComponents/Watch/Watch";
import { Route, Routes } from "react-router-dom";
import NotFound from "./RoutingComponents/NotFound/NotFound";
function App() {
  return (
    <div>
      <Header />
      <Alert />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mac/" element={<Mac />} />
        <Route path="/ipad/" element={<Ipad />} />
        <Route path="/iphone/" element={<Iphone />} />
        <Route path="/music/" element={<Music />} />
        <Route path="/support/" element={<Support />} />
        <Route path="/tv/" element={<Tv />} />
        <Route path="/watch/" element={<Watch />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
