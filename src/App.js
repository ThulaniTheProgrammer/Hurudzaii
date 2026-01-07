import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Voice from "./pages/voice/voice";
import Fertilizer from "./pages/fertilizer/fertilizer";
import Crop from "./pages/crop/crop";
import SmsService from "./pages/sms/sms";
import Disease from "./pages/disease/disease";
import Privacy from "./pages/privacy/privacy";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/fertilizer" element={<Fertilizer />} />
          <Route path="/crop" element={<Crop />} />
          <Route path="/sms" element={<SmsService />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// code completed
export default App;
