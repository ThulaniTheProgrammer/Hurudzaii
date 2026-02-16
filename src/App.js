import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Voice from "./pages/voice/voice";
import Fertilizer from "./pages/fertilizer/fertilizer";
import Crop from "./pages/crop/crop";
import SmsService from "./pages/sms/sms";
import Disease from "./pages/disease/disease";
import Privacy from "./pages/privacy/privacy";
import DeleteAccount from "./pages/delete-account/delete-account";
import RequestDemo from "./pages/request-demo/request-demo";
import { Navigate } from "react-router-dom";
function App() {
  const Gate = ({ children }) => {
    const ok = typeof window !== "undefined" && localStorage.getItem("demoAccess") === "true";
    if (!ok) return <Navigate to="/request-demo" replace />;
    return children;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/voice" element={<Gate><Voice /></Gate>} />
          <Route path="/fertilizer" element={<Gate><Fertilizer /></Gate>} />
          <Route path="/crop" element={<Gate><Crop /></Gate>} />
          <Route path="/sms" element={<Gate><SmsService /></Gate>} />
          <Route path="/disease" element={<Gate><Disease /></Gate>} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// code completed
export default App;
