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
import ProductConsole from "./pages/ProductConsole";
import UnifiedSandbox from "./pages/UnifiedSandbox";
import DashboardLayout from "./components/Dashboard/DashboardLayout";

function App() {
  const Gate = ({ children }) => {
    const ok = typeof window !== "undefined" && localStorage.getItem("demoAccess") === "true";
    if (!ok) return <Navigate to="/request-demo" replace />;
    return children;
  };

  const MemberZone = ({ children }) => (
    <Gate>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </Gate>
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/console" element={<MemberZone><ProductConsole /></MemberZone>} />
          <Route path="/sandbox" element={<MemberZone><UnifiedSandbox /></MemberZone>} />
          <Route path="/voice" element={<MemberZone><Voice /></MemberZone>} />
          <Route path="/fertilizer" element={<MemberZone><Fertilizer /></MemberZone>} />
          <Route path="/crop" element={<MemberZone><Crop /></MemberZone>} />
          <Route path="/sms" element={<MemberZone><SmsService /></MemberZone>} />
          <Route path="/disease" element={<MemberZone><Disease /></MemberZone>} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/market" element={<MemberZone><Market /></MemberZone>} />
          <Route path="/about" element={<MemberZone><About /></MemberZone>} />
          <Route path="/science" element={<MemberZone><Science /></MemberZone>} />
          <Route path="/stories" element={<MemberZone><Stories /></MemberZone>} />
          <Route path="/news" element={<MemberZone><News /></MemberZone>} />
          <Route path="/contact" element={<MemberZone><Contact /></MemberZone>} />
          <Route path="/docs" element={<MemberZone><Docs /></MemberZone>} />
          <Route path="/api" element={<MemberZone><Api /></MemberZone>} />
          <Route path="/support" element={<MemberZone><Support /></MemberZone>} />
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
