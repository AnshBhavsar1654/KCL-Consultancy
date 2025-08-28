
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ExcellencePage from "./pages/ExcellencePage";
import HumansPage from "./pages/HumansPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/vision-mission" element={<AboutPage />} />
              <Route path="/approach" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/research" element={<ServicesPage />} />
              <Route path="/services/strategy" element={<ServicesPage />} />
              <Route path="/services/execution" element={<ServicesPage />} />
              <Route path="/services/evaluation" element={<ServicesPage />} />
              <Route path="/services/community" element={<ServicesPage />} />
              <Route path="/excellence" element={<ExcellencePage />} />
              <Route path="/excellence/healthcare" element={<ExcellencePage />} />
              <Route path="/excellence/urban" element={<ExcellencePage />} />
              <Route path="/excellence/digital" element={<ExcellencePage />} />
              <Route path="/humans" element={<HumansPage />} />
              <Route path="/humans/who-we-are" element={<HumansPage />} />
              <Route path="/humans/stories" element={<HumansPage />} />
              <Route path="/humans/life" element={<HumansPage />} />
              <Route path="/humans/careers" element={<HumansPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
