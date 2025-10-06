import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Simulations } from "./pages/Simulations";
import { Automotive } from "./pages/Automotive";
import { Z32 } from "./pages/Z32";
import { AE86 } from "./pages/AE86";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="simulations" element={<Simulations />} />
        <Route path="automotive" element={<Automotive />} />
        <Route path="z32" element={<Z32 />} />
        <Route path="ae86" element={<AE86 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

