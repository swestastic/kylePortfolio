import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Simulations } from "./pages/Simulations";
import { Automotive } from "./pages/Automotive";
import Z32 from "./pages/Z32";
import { AE86 } from "./pages/AE86";
import AE86Writeups from "./pages/AE86Writeups";
import AE86Sr20deSwap from "./pages/AE86/writeups/sr20de-swap";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="simulations" element={<Simulations />} />
        <Route path="automotive" element={<Automotive />} />
        <Route path="z32" element={<Z32 />} />
  <Route path="ae86" element={<AE86 />} />
  <Route path="ae86/writeups" element={<AE86Writeups />} />
  <Route path="ae86/writeups/sr20de-swap" element={<AE86Sr20deSwap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

