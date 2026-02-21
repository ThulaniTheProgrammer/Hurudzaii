import "./App.css";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Voice from "./pages/voice/voice";
import Fertilizer from "./pages/fertilizer/fertilizer";
import Crop from "./pages/crop/crop";
import SmsService from "./pages/sms/sms";
import Disease from "./pages/disease/disease";
import Privacy from "./pages/privacy/privacy";
import DeleteAccount from "./pages/delete-account/delete-account";
import RequestDemo from "./pages/request-demo/request-demo";
import WhatsAppBot from "./pages/products/WhatsAppBot";
import FarmersCRM from "./pages/products/FarmersCRM";
import DeveloperConsole from "./pages/products/DeveloperConsole";
import B2BSolutions from "./pages/products/B2BSolutions";
import Market from "./pages/Market";
import About from "./pages/About";
import Science from "./pages/Science";
import Stories from "./pages/Stories";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";
import Api from "./pages/Api";
import Support from "./pages/Support";
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
          <Route path="/market" element={<Gate><Market /></Gate>} />
          <Route path="/about" element={<Gate><About /></Gate>} />
          <Route path="/science" element={<Gate><Science /></Gate>} />
          <Route path="/stories" element={<Gate><Stories /></Gate>} />
          <Route path="/news" element={<Gate><News /></Gate>} />
          <Route path="/contact" element={<Gate><Contact /></Gate>} />
          <Route path="/docs" element={<Gate><Docs /></Gate>} />
          <Route path="/api" element={<Gate><Api /></Gate>} />
          <Route path="/support" element={<Gate><Support /></Gate>} />
          {/* Product Pages */}
          <Route path="/products/whatsapp-bot" element={<WhatsAppBot />} />
          <Route path="/products/farmers-crm" element={<FarmersCRM />} />
          <Route path="/products/developer-console" element={<DeveloperConsole />} />
          <Route path="/products/b2b-solutions" element={<B2BSolutions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// code completed
export default App;
